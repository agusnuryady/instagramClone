import React, {Component} from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, StatusBar, View, Image, TextInput, Alert, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import { Container, Header, Body, Button, Icon, Text, Content, Thumbnail, Right, } from 'native-base'
import {goToHome} from '../Navigation'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../components/styles'

const Global = require('../components/Global')
const url = Global.URL

export default class AddPost extends Component {

    constructor(){
        super()
        this.state={
            dataUser:[],
            dataPost:[],
            urlInput:"",
            watchInput:"",
            commentInput:"",
            postDate:"",
            token:"",
            id_user:"",
            id_post:"",
        }
        
    }

    // getData = () => {
    //     this.setState({
    //         id_post:this.props.id
    //     })
    // }

    componentDidMount() {
        AsyncStorage.getItem('tokenJwt', (err, result) => {
            if (result) {
                this.setState({
                    token: result
                })
                GetPost = async () => {
                    const response = await Axios({
                        method: 'post',
                        headers: {
                            'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                        },
                        url:url+'dataPost',
                        data: {
                            idPost: this.props.id,
                        }
                    })
                    console.log(response)
                    this.setState({id_post: response.data[0].id})
                    this.setState({urlInput: response.data[0].image_link})
                    this.setState({watchInput: response.data[0].watch})
                    this.setState({commentInput: response.data[0].comment_post})
                    this.setState({postDate: response.data[0].post_date})
                }
                GetPost()
            }
        })
    }

    shareButton=()=> {
        if (this.state.urlInput != '') {
            if (this.state.watchInput != '') {
                if (this.state.commentInput != '') {
                    const {urlInput, watchInput, commentInput, postDate} = this.state
                    
                    AsyncStorage.getItem('tokenJwt', (error, result) => {
                        if (result) {
                            this.setState({
                                token: result
                            })
                            console.log(this.state.id_post)
                            GetData = async () => {
                                const response = await Axios({
                                    method: 'patch',
                                    headers: {
                                        'Authorization' : `Bearer ${this.state.token}`,'content-type':'application/json'
                                    },
                                    url:`${url}post/update/${this.state.id_post}`,
                                    data: {
                                        urlInput: urlInput,
                                        watchInput: watchInput,
                                        commentInput: commentInput,
                                        postDate: postDate,
                                    }
                                })
                                //.then(res => {console.log(res.data)})
                                .then(goToHome())
                            }
                            GetData()
                        }
                    })
                    
                } else {
                    alert('Please Write a Comment')
                }
            } else {
            alert('Please Enter Watch Value')
            }
        } else {
            alert('Please Enter URL Address')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='height'>
                <Container style={{paddingBottom:100}}>
                    <Header style={styles.headerHome}>
                        <StatusBar backgroundColor='#F0F0F0' barStyle='dark-content'/>
                        <View style={styles.iconBoxPost}>
                            <TouchableWithoutFeedback
                                onPress={() => goToHome()} 
                            >
                                <Icon name='left' type='AntDesign' style={{fontSize:25}} />
                            </TouchableWithoutFeedback>
                        </View>
                        <Body style={styles.bodyHeader}>
                            <Text style={styles.textHeader1}>
                                New Post
                            </Text>
                        </Body>
                        <View style={styles.rightHeader}>
                            <TouchableOpacity 
                                style={styles.bodyHeader2}
                                onPress={this.shareButton} >
                                <Text style={styles.textHeader2}>
                                    Share
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Header>
                    <Content>
                        <ScrollView>
                            <View style={{padding:10}}>
                                <TextInput
                                    placeholder='Url Image Address'
                                    style={styles.textInputPost1}
                                    multiline={true}
                                    onChangeText={(urlInput)=> {this.setState({urlInput})}}
                                    value={this.state.urlInput} />
                                <TextInput
                                    placeholder='Watcher Post Value'
                                    style={styles.textInputPost2}
                                    onChangeText={(watchInput)=> {this.setState({watchInput})}}
                                    value={this.state.watchInput} />
                                <TextInput
                                    placeholder='Comment Post'
                                    style={styles.textInputPost2}
                                    multiline={true}
                                    onChangeText={(commentInput)=> {this.setState({commentInput})}}
                                    value={this.state.commentInput} />
                                <TextInput
                                    placeholder='Post Date'
                                    style={styles.textInputPost2}
                                    onChangeText={(postDate)=> {this.setState({postDate})}}
                                    value={this.state.postDate} />
                            </View>
                        </ScrollView>
                    </Content>
                </Container>
            </KeyboardAvoidingView>
        )
    }
}