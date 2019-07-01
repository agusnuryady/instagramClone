import React, {Component} from 'react'
import {
StyleSheet,
StatusBar,
View,
Image,
TextInput,
Alert,
TouchableOpacity,
ScrollView,
TouchableWithoutFeedback,
} from 'react-native'
import {
    Container,
    Header,
    Left,
    Right,
    Body,
    Button,
    Icon,
    Text,
    Content,
    Footer,
    FooterTab,
    Thumbnail,
    Card,
    CardItem,
    Badge,
} from 'native-base'

export default class PostingUser extends Component {
    render() {
        const {username, imageProfil, imagePost, viewPost, textPost, commentPost, timePost, thumbnailStyle, modalType} = this.props

        return(
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
                                onPress={modalType}>
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
                    <View style={{flex:1,paddingHorizontal:10,}}>
                        <Text style={{color:'#555555',fontSize:12}}>{timePost}</Text>    
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    thumbnailbox: {
        padding: 7,
        paddingTop: 10,
        margin: 1,
        alignItems: 'center',
        flex:1,
        flexDirection:'column',
    },
    thumbnail: {
        width: 60,
        height: 60,
        flex:1,
        borderWidth: 3,
        borderColor: 'pink'
    },
    thumbnailunstory: {
        width: 60,
        height: 60,
        flex:1,
        borderWidth: 3,
        borderColor: 'gray'
    },
    thumbnailcardcomment: {
        width: 30,
        height: 30,
        flex:1,
    },
    thumbnailText: {
        textAlign:'center',
        flex: 1,
        width: 70,
        fontSize:11,
        fontFamily:'Gill Sans',
        fontWeight:'400',
        padding:5,
    },
    card: {
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:15,
    },
    picturecard: {
        height: 250,
        width: null,
        flex: 1,
    },
})