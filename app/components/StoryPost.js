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

export default class StoryPost extends Component {
    render() {
        const {imageProfil, username, thumbnailStyle} = this.props

        return(
            <View style={styles.thumbnailbox}>
                <Thumbnail source={{uri:imageProfil}} style={{width:60,height:60,flex:1,borderWidth:3,borderColor:thumbnailStyle}} />
                <Text numberOfLines={1} style={styles.thumbnailText}>
                    {username}
                </Text>
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
    thumbnailText: {
        textAlign:'center',
        flex: 1,
        width: 70,
        fontSize:11,
        fontFamily:'Gill Sans',
        fontWeight:'400',
        padding:5,
    },
})