import React, {Component} from 'react'
import {StyleSheet,StatusBar,View,Image,Text,TextInput,Alert,TouchableOpacity} from 'react-native'
import styles from '../components/styles'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import {goToHome} from '../Navigation'
import Axios from 'axios'
import {Base64} from 'js-base64'

const Global = require('../components/Global')
const url = Global.URL

export default class Login extends Component {

    state = {
        email:'',
        password:'',
        passwordEncrypt:'',
    }

    loginButton() {
        if (this.state.email === '') {
            alert('Please Enter Email');
        } else {
            if (this.state.password === '') {
                alert('Please Enter Password');
            } else {
                const {email} = this.state
                const {password} = this.state
                const encrypt = Base64.encode(password)

                Axios.post(`${url}users`, { 
                    email: email,
                    password: encrypt
                })
                .then(res=>{
                    if (res.status=== 200) {
                        AsyncStorage.setItem('tokenJwt', res.data.token).then(()=> {
                            goToHome()
                        })
                        .catch((error)=> {
                            console.log(error)
                        })
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 404) {
                        alert('wrong email or password')
                    }
                })
            }
        }
    }

    _onPressButtonHelp() {
        Alert.alert('You tapped the help button!')
    }

    _onPressButtonFacebook() {
        Alert.alert('You tapped the facebook button!')
    }
    
    _onPressButtonSignup() {
        Alert.alert('You tapped the sign up button!')
    }

    render() {
        return (
        <LinearGradient
            start={{x: 0.0, y: 0.3}} 
            end={{x: 1.5, y: 0.8}}
            colors={[
                '#814BA9', 
                '#94439a', 
                '#a23d8e', 
                '#a83a88', 
                '#b03780', 
                '#b73677', 
                '#c13765', 
                '#C33C67'
            ]} 
            style={styles.linearGradient} >
                
            <View style={styles.container}>
                <View style={{padding: 40,}}>
                    <StatusBar backgroundColor="purple" barStyle="default" />
                </View>

                <View style={styles.logoBox}>
                    <Image
                    source={require('E:/Aplikasi/InstagramClone/material/img/instagram_text.png')}
                    style={{width: 260, height: 90,}} />
                </View>

                <View style={styles.loginConten}>
                    <TextInput 
                        placeholder='Email' 
                        placeholderTextColor= '#EEEBEC'
                        style={styles.inputText}
                        onChangeText={(email)=>{this.setState({email})}}
                        value={this.state.email}
                        require={true}/>

                    <TextInput 
                        placeholder='Password' 
                        placeholderTextColor= '#EEEBEC' 
                        secureTextEntry= {true} 
                        style={styles.inputText}
                        onChangeText={(password)=>{this.setState({password})}}
                        value={this.state.password}/>

                    <TouchableOpacity
                        onPress={()=> this.loginButton()}   
                        style={styles.buttonText} >
                        <Text 
                            style={styles.textLoginBox}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.textLoginBox}>
                            Forgot your login details?
                        </Text>
                        <TouchableOpacity onPress={this._onPressButtonHelp} style={styles.buttonText3}>
                            <Text style={styles.textLoginBox2}>
                            Get help signing in.
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
                        <Text style={styles.textLine}>
                            ----------------------------------------------------------------------------------------------
                        </Text>
                        <Text style={styles.textLoginBox3}>
                            OR
                        </Text>
                        <Text style={styles.textLine}>
                            ----------------------------------------------------------------------------------------------
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this._onPressButtonFacebook} style={styles.buttonText2}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Image
                                    source={require('E:/Aplikasi/InstagramClone/material/img/iconFacebook.png')}
                                    style={{width: 22, height: 25,}} />
                            </View>
                            <View style={{paddingLeft: 8}}>
                                <Text style={styles.textLoginBox4}>
                                    Log In with Facebook
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer} >
                    <View style={styles.footerBox}>
                        <Text style={styles.footerText1}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={this._onPressButtonSignup} style={styles.buttonText3}>
                            <Text style={styles.footerText2}>
                                Sign up.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </LinearGradient>   
        )
    }
}
