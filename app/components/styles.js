import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    logoBox: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 30,
    },
    loginConten: {
        flex: 7, 
        alignItems: 'center', 
        padding: 10,
    },
    textLoginBox: {
        fontFamily: 'Gill Sans', 
        fontSize: 18, 
        color: '#EEEBEC'
    },
    textLoginBox2: {
        fontFamily: 'Gill Sans', 
        fontSize: 13, 
        fontWeight: '500', 
        color: 'white', 
        paddingLeft: 5
    },
    textLoginBox3: {
        fontFamily: 'Gill Sans', 
        fontSize: 15, 
        fontWeight: '500', 
        color: '#EEEBEC', 
        paddingVertical:10
    },
    textLoginBox4: {
        fontFamily: 'Gill Sans', 
        fontSize: 18, 
        color: 'white', 
        fontWeight: '500'
    },
    textLine: {
        fontFamily: 'Gill Sans', 
        fontSize: 5, 
        color: '#EEEBEC', 
        fontWeight: '100'
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
        backgroundColor:'#DDDDDD',
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
        backgroundColor:'#DDDDDD',
    },
    modalPost: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin:0,
        backgroundColor: 'rgba(255,255,255,0.07)'
    },
    modalContent: {
        borderRadius:7,
        backgroundColor:'white',
        width:330,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        paddingHorizontal:20
    },
    modalButton: {
        flex:1,
        justifyContent:'center',
        paddingVertical:25
    },
    modalText: {
        fontSize:16,
        alignItems:'center'
    },
    inputText: {
        fontSize: 18,
        color: '#EEEBEC',
        minWidth: 200,
        padding: 15,
        margin: 12,
        minHeight: 40,
        alignSelf: 'stretch',
        borderRadius: 2,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        minWidth: 200,
        padding: 15,
        margin: 12,
        minHeight: 40,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 0.4,
        borderColor: '#EEEBEC',
        backgroundColor: 'rgba(255,255,255,0.03)',
    },
    buttonText2: {
        fontSize: 15,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        minWidth: 200,
        padding: 10,
        minHeight: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonText3: {
        fontSize: 15,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        padding: 2,
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(255,255,255,0.07)',
    },
    footerBox: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        justifyContent: 'center'
    },
    footerText1: {
        fontFamily: 'Gill Sans', 
        fontSize: 13, 
        color: '#EEEBEC',
    },
    footerText2: {
        fontFamily: 'Gill Sans', 
        fontSize: 13, 
        fontWeight: '500', 
        color: 'white', 
        paddingLeft: 5
    },
    headerHome: {
        backgroundColor: '#FBFBFB',
        elevation:5,
        borderBottomColor:'#BBBBBB',
        borderBottomWidth:0.7
    },
        iconBoxHome: {
            paddingHorizontal:5,
            justifyContent:'center'
        },
    iconBoxHome2: {
        padding:5,
        paddingHorizontal:8,
        margin:5,
        justifyContent:'center'
    },
    iconBoxHome3: {
        padding:5,
        margin:5,
        justifyContent:'center'
    },
    iconHome1: {
        width:10,
        height:10,
        position:'absolute',
        right:5,
        top:5
    },
    iconHome2: {
        width:23,
        height:26,
        margin:1
    },
    iconHome3: {
        width:25,
        height:25
    },
    scrollViewStory: {
        backgroundColor:'#FBFBFB',
        elevation:1,
        borderBottomColor:'#D4D4D4',
        borderBottomWidth:0.2
    },
    thumbnailHome: {
        width: 60, 
        height: 60, 
        flex:1,
    },
    badgeHome: {
        position: "absolute", 
        bottom: 30, 
        right: 5
    },
    iconBoxPost: {
        paddingHorizontal:5,
        justifyContent:'center'
    },
    bodyHeader: {
        alignItems:'center', 
        justifyContent:'center', 
        alignSelf:'stretch'
    },
    bodyHeader2: {
        alignItems:'center', 
        justifyContent:'center',
    },
    textHeader1: {
        fontWeight:'bold', 
        fontSize:18
    },
    textHeader2: {
        paddingHorizontal:10, 
        fontSize:18, 
        color:'#3D9AF3'
    },
    rightHeader: {
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    textInputPost1: {
        borderBottomWidth:2, 
        borderColor:'#A9A9A9', 
        fontSize:17,
    },
    textInputPost2: {
        borderBottomWidth:2, 
        borderColor:'#A9A9A9', 
        fontSize:17,
        paddingTop:20,
    },
})

export default styles;