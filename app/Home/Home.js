import React, {Component} from 'react'
import { StyleSheet, StatusBar, View, Image, TextInput, Alert, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { Container, Header, Left, Right, Body, Button, Icon, Text, Content, Footer, FooterTab, Thumbnail, Card, CardItem, Badge, } from 'native-base'
import Posting from '../components/Posting'
import StoryPost from '../components/StoryPost'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import styles from '../components/styles'
import Modal from 'react-native-modal'

const Global = require('../components/Global')
const url = Global.URL

export default class Home extends Component {

    constructor(){
        super()
        this.state={
            dataPost:[],
            dataStory:[],
            dataUser:[],
            token:"",
        }
    }

    fetchAll = ()=> {
        axios({
            method: 'post',
            headers: {
                'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
            },
            url:url+'post',
        })
        .then(res => {this.setState({dataPost: res.data})})
    }

    componentDidMount() {
        AsyncStorage.getItem('tokenJwt', (err, result) => {
            if (result) {
                this.setState({
                    token: result
                })
                this.fetchAll()
                GetDataUser = async () => {
                    const user = await axios({
                        method: 'post',
                        headers: {
                            'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                        },
                        url:url+'user',
                    })
                    this.setState({dataUser:user.data[0]})
                }
                GetDataUser()

                GetDataStory = async () => {
                    const response = await axios({
                        method: 'post',
                        headers: {
                            'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                        },
                        url:url+'story',
                    })
                    this.setState({dataStory:response.data})
                }
                GetDataStory()
                
                GetDataPost = async () => {
                    const response = await axios({
                        method: 'post',
                        headers: {
                            'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                        },
                        url:url+'post',
                    })
                    this.setState({dataPost:response.data})
                }
                GetDataPost()
            }
        })
    }

    deleteButton(id){
        this.setState({isModalPostVisible: !this.state.isModalPostVisible})
        Alert.alert(
        '',
        'Are you sure you want delete this? ',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text:'OK', 
                onPress: ()=> {
                axios({
                    method: 'delete',
                    headers: {
                        'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                    },
                    url:`${url}post/${id}`,
                })
                .then((res)=> this.fetchAll())
                .then(Alert.alert('Data berhasil Di hapus'))
                }
            },
        ],
        {cancelable:false},
        )
    }

    render() {
        console.log('test gannn')
        return(
            <Container>
                {console.log("Home")}
                {console.log(this.props.componentId)}
                <Header style={styles.headerHome}>
                    <StatusBar backgroundColor='#F0F0F0' barStyle='dark-content'/>
                    <View style={styles.iconBoxHome}>    
                        <TouchableOpacity>
                            <Icon name='camera' type='SimpleLineIcons' style={{fontSize:28}}/>
                        </TouchableOpacity>
                    </View>
                    <Body style={{padding:5}}>
                        <Image
                            source={require('E:/Aplikasi/InstagramClone/material/img/instagram_text_black.png')}
                            style={{width: 120, height: 40}} />
                    </Body>
                    <Right>
                        <TouchableOpacity style={styles.iconBoxHome2}>
                            <Image
                                source={require('E:/Aplikasi/InstagramClone/material/img/ignotif-logo.png')}
                                style={styles.iconHome1} />
                            <Image
                                source={require('E:/Aplikasi/InstagramClone/material/img/igtv-logo-black.png')} 
                                style={styles.iconHome2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBoxHome3}>
                            <Image
                                source={require('E:/Aplikasi/InstagramClone/material/img/igsend-logo.png')} 
                                style={styles.iconHome3} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.scrollViewStory}>
                            <View style={styles.thumbnailbox}>
                                <Thumbnail 
                                    source={{uri:this.state.dataUser.profil_image}} 
                                    style={styles.thumbnailHome}/>
                                <Badge info style={styles.badgeHome}>
                                    <Text>+</Text>
                                </Badge>
                                <Text numberOfLines={1} style={styles.thumbnailText}>Your Story</Text>
                            </View>

                            {
                                this.state.dataStory.map((story, index)=>(
                                    <StoryPost
                                    key={index}
                                    imageProfil={story.image_link}
                                    username={story.username}
                                    thumbnailStyle={story.thumbnail_color} />    
                                ))
                            }

                        </ScrollView>
                        <ScrollView>

                            {
                                this.state.dataPost.map((data, index) => (
                                    <Posting 
                                        key={index}
                                        id={data.id}
                                        username={data.username}
                                        imageProfil={data.image_user}
                                        thumbnailStyle={data.thumbnail_color}
                                        imagePost={data.image_link}
                                        viewPost={data.watch}
                                        textPost={data.comment_post}
                                        commentPost={data.comment_total}
                                        timePost={data.post_date}
                                        parentId={this.props.componentId} 
                                        imageUserProfil={this.state.dataUser.profil_image}
                                        delete={()=>this.deleteButton(data.id)}
                                    />
                                ))
                            }

                        </ScrollView>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}
