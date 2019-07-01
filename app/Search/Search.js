import React, {Component} from 'react'
import {StyleSheet,StatusBar,View,Image,TextInput,Alert,TouchableOpacity,ScrollView,TouchableWithoutFeedback,Dimensions,FlatList,} from 'react-native'
import {Container,Header,Left,Right,Body,Button,Icon,Text,Content,Footer,FooterTab,Thumbnail,Card,CardItem,Badge,Tabs,Tab,TabHeading, Item,} from 'native-base'
import PostingUser from '../components/PostingUser'

var {width,height}=Dimensions.get('window')

export default class Search extends Component {

    data = {
        userStory: [
            {storyName:"Shock Gun",imageProfil:"https://img.cinemablend.com/cb/a/2/0/3/f/d/a203fd188bf8397f47a3146d619b1ecaf2557a92c9e9f531812b3d9f7851f461.jpg",thumbnailBorder:"gray"},
            {storyName:"New Mark Suit",imageProfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hH48hEN_qyc4iXtxHPCmBV9Kkjy9suJcIzCLJZZzvFxskl09Dg",thumbnailBorder:"gray"},
            {storyName:"Jarvis System",imageProfil:"https://s1-ssl.dmcdn.net/v/CU2J-1S-YNoMJBUr3/x120",thumbnailBorder:"gray"},
            {storyName:"The Helper Arm",imageProfil:"https://www.hdwallpapers.in/walls/iron_man_in_the_avengers_movie-HD.jpg",thumbnailBorder:"gray"},
            {storyName:"Thor Chalenge",imageProfil:"https://www.nydailynews.com/resizer/vV5W3ciGFS6Q1Q2P14Omw-LTIZM=/800x330/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/W3R47IXRMWBQFOJJOP2BFBUS2M.jpg",thumbnailBorder:"gray"},
            {storyName:"The Thruster Project",imageProfil:"https://i2.wp.com/i2.ytimg.com/vi/PZlL5gZeGDI/mqdefault.jpg",thumbnailBorder:"gray"}
        ],
        userPost: [
            {username:"Tony Stark",imageProfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrLMuCp2S6ImoBzcyG_wAce4GoIhkRBcvaBTNtHvuV65mWPLw",thumbnailBorder:"gray",contentPost:"https://uproxx.files.wordpress.com/2015/03/stark.jpeg?quality=95&w=650",viewPost:"12.242.023 tayangan",textPost:"It's Time To Explode",commentPost:"Lihat semua 124.040 komentar",timePost:"19 Juni 2019",},
            {username:"Tony Stark",imageProfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrLMuCp2S6ImoBzcyG_wAce4GoIhkRBcvaBTNtHvuV65mWPLw",thumbnailBorder:"gray",contentPost:"https://i.ytimg.com/vi/t86sKsR4pnk/maxresdefault.jpg",viewPost:"4.242.023 tayangan",textPost:"Who say being Hero is Easy",commentPost:"Lihat semua 523.040 komentar",timePost:"10 Juni 2019",},
            {username:"Tony Stark",imageProfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrLMuCp2S6ImoBzcyG_wAce4GoIhkRBcvaBTNtHvuV65mWPLw",thumbnailBorder:"gray",contentPost:"https://s3.amazonaws.com/prod-media.gameinformer.com/styles/thumbnail/s3/legacy-images/Bucky%20Squares%20Off%20Against%20Iron%20Man%20And%20His%20Team%20In%20Civil%20War%20Movie%20Clip/BuckyShootsTony-610.jpg",viewPost:"54.242.023 tayangan",textPost:"Shoot me if you dare",commentPost:"Lihat semua 644.040 komentar",timePost:"3 Juni 2019",},
            {username:"Tony Stark",imageProfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrLMuCp2S6ImoBzcyG_wAce4GoIhkRBcvaBTNtHvuV65mWPLw",thumbnailBorder:"gray",contentPost:"https://mp3.dost.az/src/11913910.jpg",viewPost:"2.643.753 tayangan",textPost:"It's Time To Party",commentPost:"Lihat semua 64.040 komentar",timePost:"27 Mei 2019",},
        ],
        userTagged: [
            {image:"https://media.gq.com/photos/5ae87b6f5fc9cd1448207f3c/4:3/w_1296,h_972,c_limit/robert-downey-jr-avengers-track-suit-GQ-May-2018-050118.jpg"},
            {image:"https://i.pinimg.com/originals/85/b3/6c/85b36c280a9e25a4422f74328dfc4325.jpg"},
            {image:"https://geeksofcolor.files.wordpress.com/2017/04/peter-tony-bros.jpg?w=950"},
            {image:"https://i.pinimg.com/originals/ff/a3/b3/ffa3b3e122a458ada1a792e9af5415f5.jpg"},
            {image:"http://images.fandango.com/MDCsite/images/featured/201304/Iron%20Man%203%20Tony%20Stark%20(585%20x%20308).jpg"},
            {image:"http://experienceperception.com/images/starkmirror_06.jpg?crc=3930149221"},
            {image:"https://geekswipe.net/wp-content/uploads/2012/09/Ironman2.jpg"},
            {image:"https://cdn-images-1.medium.com/max/1200/1*ZNlTJ_QLPyYcm9zk1D4ufw.png"},
            {image:"https://images.indianexpress.com/2019/02/thanos-iron-man-759.jpg?w=759&h=422&imflag=true"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1zdTKp6OSWtfWYJKnxI5q2rEcbPX-tlBJo1Enn7I27amAirB"},
            {image:"https://seanmills6.files.wordpress.com/2018/05/avif-review-list-05.jpg"},
            {image:"https://i.ytimg.com/vi/mhOfcoBxI80/maxresdefault.jpg"},
        ]
    }

    constructor(props){
        super(props)
        this.state={activeIndex:0,
            imageTagged: [
                {image:"https://media.gq.com/photos/5ae87b6f5fc9cd1448207f3c/4:3/w_1296,h_972,c_limit/robert-downey-jr-avengers-track-suit-GQ-May-2018-050118.jpg"},
                {image:"https://i.pinimg.com/originals/85/b3/6c/85b36c280a9e25a4422f74328dfc4325.jpg"},
                {image:"https://geeksofcolor.files.wordpress.com/2017/04/peter-tony-bros.jpg?w=950"},
                {image:"https://i.pinimg.com/originals/ff/a3/b3/ffa3b3e122a458ada1a792e9af5415f5.jpg"},
                {image:"http://images.fandango.com/MDCsite/images/featured/201304/Iron%20Man%203%20Tony%20Stark%20(585%20x%20308).jpg"},
                {image:"http://experienceperception.com/images/starkmirror_06.jpg?crc=3930149221"},
                {image:"https://geekswipe.net/wp-content/uploads/2012/09/Ironman2.jpg"},
                {image:"https://cdn-images-1.medium.com/max/1200/1*ZNlTJ_QLPyYcm9zk1D4ufw.png"},
                {image:"https://images.indianexpress.com/2019/02/thanos-iron-man-759.jpg?w=759&h=422&imflag=true"},
                {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1zdTKp6OSWtfWYJKnxI5q2rEcbPX-tlBJo1Enn7I27amAirB"},
                {image:"https://seanmills6.files.wordpress.com/2018/05/avif-review-list-05.jpg"},
                {image:"https://i.ytimg.com/vi/mhOfcoBxI80/maxresdefault.jpg"},
            ]
        }
    }

    segmentClicked=(index)=>{
        this.setState({activeIndex:index})
    }
    getColorTabs(index){
        return this.state.activeIndex === index ? '#3897F0' : '#ABABAB'
    }
    getSizeTabs(index){
        return this.state.activeIndex === index ? 30 : 30
    }

    render() {
        return(
            <Container>
                <Header style={{backgroundColor: '#FBFBFB',elevation:5,borderBottomColor:'#BBBBBB',borderBottomWidth:0.7}}>
                    <StatusBar backgroundColor='#F0F0F0' barStyle='dark-content'/>
                    <View style={{paddingHorizontal:5,justifyContent:'center'}}>
                        <TouchableWithoutFeedback onPress={()=>Alert.alert('Account option pressed!')}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{paddingRight:10,fontFamily:'Gill Sans',fontSize:18,fontWeight:'bold'}}>Tony Stark</Text>
                                <Image
                                    source={require('E:/Aplikasi/InstagramClone/material/img/igarrowdown-logo.png')} 
                                    style={{width:12,height:12}}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Right style={{alignItems:'center'}}>
                        <TouchableWithoutFeedback style={{padding:5,justifyContent:'center'}} onPress={()=>Alert.alert('History option pressed!')}>
                            <View style={{alignItems:'center',justifyContent:'center',paddingRight:10}}>
                                <Image
                                    source={require('E:/Aplikasi/InstagramClone/material/img/ighistory-logo.png')} 
                                    style={{width:28,height:27}}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={{padding:5,justifyContent:'center'}} onPress={()=>Alert.alert('Menu option pressed!')}>
                            <View style={{alignItems:'center',justifyContent:'center',paddingHorizontal:10}}>
                                <Image
                                    source={require('E:/Aplikasi/InstagramClone/material/img/ignotif-logo.png')}
                                    style={{width:10,height:10,position:'absolute',right:1,top:-5}} />
                                <Icon name='menu' type='SimpleLineIcons' style={{fontSize:25}}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </Right>
                </Header>
                <Content>
                    <ScrollView>
                        <Tabs locked tabBarUnderlineStyle={{backgroundColor:'transparent'}} onChangeTab={({i})=>this.segmentClicked(i)}>
                            <Tab
                                onPress={()=>this.segmentClicked(0)}
                                heading={
                                <TabHeading style={{backgroundColor:'white'}}>
                                    <Icon name='md-grid' type='Ionicons' style={{fontSize:this.getSizeTabs(0),color:this.getColorTabs(0)}} />
                                </TabHeading>
                            }>
                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    {
                                        this.data.userPost.map((imageGrid, index)=>(
                                            <View key={index} style={[{width:(width)/3},{height:(width)/3},
                                                {marginBottom:2},
                                                index % 3 !==0 ? {paddingLeft:2} : {paddingLeft:0}]}>
                                                <Image style={{flex:1,width:undefined,height:undefined}}
                                                    source={{uri:imageGrid.contentPost}}/>
                                            </View>
                                        ))
                                    }
                                </View>
                            </Tab>
                            <Tab 
                                onPress={()=>this.segmentClicked(1)}
                                heading={
                                <TabHeading style={{backgroundColor:'white'}}>
                                    <Icon name='view-day' type='MaterialCommunityIcons' style={{fontSize:this.getSizeTabs(1),color:this.getColorTabs(1)}} />
                                </TabHeading>
                            }>
                                {
                                    this.data.userPost.map((postData, index)=>(
                                        <PostingUser
                                        key={index}
                                        imageProfil={postData.imageProfil}
                                        username={postData.username}
                                        imagePost={postData.contentPost}
                                        viewPost={postData.viewPost}
                                        textPost={postData.textPost}
                                        commentPost={postData.commentPost}
                                        timePost={postData.timePost}
                                        thumbnailStyleCard={postData.thumbnailBorder} />    
                                    ))
                                }
                            </Tab>
                            <Tab 
                                onPress={()=>this.segmentClicked(2)}
                                heading={
                                <TabHeading style={{backgroundColor:'white'}}>
                                    <Icon name='clipboard-account' type='MaterialCommunityIcons' style={{fontSize:this.getSizeTabs(2),color:this.getColorTabs(2)}} />
                                </TabHeading>
                            }>
                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <FlatList
                                        data={this.state.imageTagged}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({item, index}) => 
                                            <View key={index} style={[{width:(width)/3},{height:(width)/3},
                                                {marginBottom:2},
                                                index % 3 !==0 ? {paddingLeft:2} : {paddingLeft:0}]}>
                                                <Image style={{flex:1,width:undefined,height:undefined}}
                                                    source={{uri:item.image}}/>
                                            </View>
                                        }
                                        keyExtractor={item => item.image}
                                    />
                                </View>
                            </Tab>
                        </Tabs>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}