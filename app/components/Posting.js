import React, {Component} from 'react'
import {StyleSheet,StatusBar,View,Image,TextInput,Alert,TouchableOpacity,TouchableNativeFeedback,ScrollView,TouchableWithoutFeedback,} from 'react-native'
import {Container,Header,Left,Right,Body,Button,Icon,Text,Content,Footer,FooterTab,Thumbnail,Card,CardItem,Badge,} from 'native-base'
import {Navigation} from 'react-native-navigation'
import Modal from 'react-native-modal'
import styles from './styles'


export default class Posting extends Component {
    
    state = {
        isModalPostVisible:false,
        isModalPostUserVisible:false,
        idPost:"",
    }
    
    modalPost(){
        this.setState({isModalPostVisible: !this.state.isModalPostVisible})
    }
    
    
    modalPostUser(){
        this.setState({isModalPostUserVisible: !this.state.isMyModalPostUserVisible})
    }
    
    render() {
        console.log('Postingpage')
        const {username, imageProfil, thumbnailStyle, imagePost, imageUserProfil, viewPost, textPost, commentPost, timePost,} = this.props
        
        return(
            <View>
            {console.log("HERE POSTCARD")}
            {console.log(this.props.parentId)}
                <View style={styles.card}>
                    <View style={{flex:1,flexDirection:'row',padding:10}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style={{padding:1,alignItems:'center'}}>
                                <Thumbnail source={{uri:imageProfil}} style={{width:40,height:40,flex:1,borderWidth:2.5,borderColor:thumbnailStyle}}/>
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{padding:10,fontSize:15,fontFamily:'Gill Sans',fontWeight:'500'}}>{username}</Text>
                            </View>
                        </View>
                        <Right>
                            <View style={{width:30,height:30,justifyContent:'center'}}>
                                <TouchableWithoutFeedback
                                    onPress={()=> this.modalPostUser()}>
                                    <Icon
                                        name='dots-three-vertical' type='Entypo'
                                        style={{fontSize:20,margin:1}}/>
                                </TouchableWithoutFeedback>    
                            </View>
                        </Right>
                    </View>
                    <CardItem cardBody transparent>
                        <Image 
                            source={{uri:imagePost}} 
                            style={styles.picturecard}/>
                    </CardItem>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{padding:10,}}>
                                <Icon
                                    name='hearto' type='AntDesign'
                                    style={{fontSize:25}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:10,}}>
                                <Icon
                                    name='comment-o' type='FontAwesome'
                                    style={{fontSize:25,paddingBottom:5}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding:10,}}>
                                <Icon
                                    name='send-o' type='FontAwesome'
                                    style={{fontSize:22}}/>
                            </TouchableOpacity>
                        </View>
                        <Right>
                            <TouchableOpacity style={{padding:10,}}>
                                <Icon   
                                    name='bookmark-o' type='FontAwesome'
                                    style={{fontSize:27}}/>
                            </TouchableOpacity>
                        </Right>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'column',paddingHorizontal:10}}>
                            <Text style={{paddingBottom:2,flex:1,fontWeight:'500'}}>
                                {viewPost}
                            </Text>
                            <View style={{paddingVertical:2,flex:1}}>
                                <Text numberOfLines={2} style={{flex:1,flexDirection:'row'}}>
                                    <Text style={{fontWeight:'500'}}>{username} {'  '}</Text>
                                    <Text>{textPost}</Text>
                                </Text>
                            </View>
                            <Text style={{paddingVertical:2,flex:1,color:'#555555'}}>
                                {commentPost}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'row',paddingHorizontal:10,paddingVertical:5,alignItems:'center'}}>
                            <View style={{paddingHorizontal:10,alignItems:'center',width:30,height:30}}>
                                <Thumbnail source={{uri:imageUserProfil}} style={styles.thumbnailcardcomment}/>
                            </View>
                            <Text style={{color:'#555555',padding:7}}>Tambahkan komentar...</Text>    
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,paddingHorizontal:10,}}>
                            <Text style={{color:'#555555',fontSize:12}}>{timePost}</Text>    
                        </View>
                    </View>
                </View>
                <Modal 
                    isVisible={this.state.isModalPostUserVisible}
                    animationInTiming={0}
                    animationOutTiming={0}
                    backdropTransitionOutTiming={0}
                    onBackdropPress={()=> this.setState({isModalPostUserVisible: !this.state.isModalPostUserVisible})}
                    onBackButtonPress={() => this.setState({isModalPostUserVisible: !this.state.isModalPostUserVisible})}
                    style={styles.modalPost}>
                    <TouchableOpacity>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Bagikan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Bagikan di WhatsApp
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Salin Tautan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Arsipkan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=> {
                                    this.setState({isModalPostUserVisible: !this.state.isModalPostUserVisible})
                                    Navigation.push(this.props.parentId, {
                                        stack: {
                                            id:'navEditPost',
                                            children: [{
                                                component: {
                                                    name: 'EditPost',
                                                    passProps: {
                                                        id: this.props.id
                                                    }
                                                }
                                            }],
                                            options: {
                                                topBar: {
                                                    drawBehind: true,
                                                    visible: false
                                                }
                                            }
                                        }
                                    })
                                }}
                                style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=> {
                                    this.setState({isModalPostUserVisible: !this.state.isModalPostUserVisible})
                                    this.props.delete()
                                }}
                                style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Hapus
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Nonaktifkan Komentar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal 
                    isVisible={this.state.isModalPostVisible}
                    animationInTiming={230}
                    animationOutTiming={230}
                    backdropTransitionOutTiming={230}
                    onBackdropPress={() => this.modalPost()}
                    style={styles.modalPost}>
                    <TouchableWithoutFeedback
                        onPress={()=> this.modalPost()}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Laporkan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Salin Tautan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Aktifkan Notifikasi Postingan
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Bagikan Tautan...
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Bagikan di WhatsApp
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Berhenti mengikuti
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalText}>
                                    Senyapkan
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}