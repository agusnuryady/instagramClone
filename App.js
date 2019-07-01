import React, {Component} from 'react'
import {StyleSheet,View,TouchableOpacity,TextInput, YellowBox, KeyboardAvoidingView, Alert, Button,} from 'react-native'
import {Container, Content, Text, List, ListItem,Icon,} from 'native-base'
import Modal from 'react-native-modal'
import axios from 'axios'

const url = 'http://192.168.1.102:5000/api/v1/'

YellowBox.ignoreWarnings(['Remote debugger'])

export default class App extends Component {

  state = {
    textInputValue: "",
    textEditValue: "",
    todos:[],
    isModalVisible:false,
    modalInputValue: [],
  }

  fetchAll = ()=> {
    axios.get(`${url}todos`)
    .then(res => {this.setState({todos: res.data})})
  }

  componentDidMount() {
    this.fetchAll()
  }

  async buttonClickListener(){
    const {textInputValue} = this.state

    const res = await axios.post(`${url}/todo`, {
      title: textInputValue
    }).then(res=>{console.log(res.data)})

    this.fetchAll()
    
    this.setState({textInputValue:''})
  }

  deleteButton(id){
    // const res = await axios.delete(`${url}/todo/${id}`
    // ).
    // then(function (res) {
    Alert.alert(
      '',
      'Are you sure you want delete this? ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text:'OK', onPress: ()=> {
          axios.delete(`${url}todo/${id}`)
          .then((res)=> this.fetchAll())
        }},
      ],
      {cancelable:false},
    )
  }

  modalEdit(id){
    this.setState({isModalVisible: !this.state.isModalVisible}),
    axios.get(`${url}todo/${id}`)
    .then(res => {
      this.setState({modalInputValue: res.data})
      this.setState({textEditValue: this.state.modalInputValue[0].title})
    
    })
  }

  modalSaveButton(){
    const {textEditValue} = this.state

    axios.patch(`${url}todo/${this.state.modalInputValue[0].id}`, {
      title: textEditValue
    }).then(res=>{console.log(res.data)})

    this.fetchAll()

    this.modalEdit(this.state.modalInputValue[0].id)
  }

  render() {
    // const valuetext=() =>  this.state.modalInputValue[0].title
    //console.log(this.state.textInputValue)
    //alert(this.state.modalInputValue)
    return(
      <KeyboardAvoidingView style={{flex:1}} behavior='height'>
        <Content>
          <List>
            {this.state.todos.map(data=>(
              <ListItem key={data.id}>
                <TouchableOpacity 
                  style={{flex:1, flexDirection:'row'}}
                  onPress={()=> this.modalEdit(data.id)}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <Text>{data.title}</Text>
                    <TouchableOpacity 
                      style={{position:'absolute',right:0}}
                      onPress={()=> this.deleteButton(data.id)}><Icon name='close'/></TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </ListItem>
            ))}
          </List>
          <Modal 
            isVisible={this.state.isModalVisible}
            animationInTiming={500} 
            style={{flex:1,alignItems:'center',}}>
            <View style={{borderRadius:7,backgroundColor:'white',width:370,flexDirection:'column',justifyContent:'center',alignItems:'stretch',padding:30}}>
              <TextInput
                style={{fontSize:20,borderBottomWidth:1,borderColor:'#A9A9A9'}}
                onChangeText={(textEditValue) => {this.setState({textEditValue})}}
                value={this.state.textEditValue}
              />
              <View style={{paddingTop:20,flexDirection:'row-reverse',alignItems:'stretch',}}>
                <TouchableOpacity onPress={()=> this.modalSaveButton()} style={{paddingHorizontal:10,flexWrap:'wrap',}}>
                  <Text style={{fontSize:20,color:'#38A59A'}}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.modalEdit()} style={{paddingHorizontal:20,flexWrap:'wrap',}}>
                  <Text style={{fontSize:20,color:'#38A59A'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Content>
        <View style={styles.textInputBottom}>
          <TextInput 
            style={{fontSize:20,flex:7,borderWidth:2,borderColor:'#A9A9A9',borderRadius:30,paddingLeft:20}}
            onChangeText={(textInputValue) => {this.setState({textInputValue})}}
            value={this.state.textInputValue}
            placeholder='Ketik Pesan' />
        </View>
        <TouchableOpacity 
          style={styles.buttonBottom}
          onPress={()=> this.buttonClickListener()}>
          <Icon name='send' style={{fontSize:20,color:'white'}}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  textInputBottom: {
    position:'absolute', 
    bottom:30,
    left:10,
    right:90,
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    paddingBottom:10,
  },
  buttonBottom: {
    flex:3,
    backgroundColor:'#28E424',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    position:'absolute',
    bottom:30,
    right:10,
    height:70,
    width:70,
  
  }
})