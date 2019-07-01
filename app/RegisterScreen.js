import {Navigation} from 'react-native-navigation'
import App from '../App'
import Login from './Login/Login'
import Home from './Home/Home'
import Profil from './Profil/Profile'
import Search from './Search/Search'
import AddPost from './AddPost/AddPost'
import EditPost from './AddPost/EditPost'

export function RegisterScreen(){
    Navigation.registerComponent('App', ()=> App)
    Navigation.registerComponent('Login', ()=> Login)
    Navigation.registerComponent('Home', ()=> Home)
    Navigation.registerComponent('Profil', ()=> Profil)
    Navigation.registerComponent('Search', ()=> Search)
    Navigation.registerComponent('AddPost', ()=> AddPost)
    Navigation.registerComponent('EditPost', ()=> EditPost)
}