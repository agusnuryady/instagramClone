/**
 * @format
 */

import { Navigation } from "react-native-navigation"
import App from './App'

import {RegisterScreen} from './app/RegisterScreen'

RegisterScreen()

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
            name: 'Login'
            }
        }
    });
});
