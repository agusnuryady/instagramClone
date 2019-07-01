import {Navigation} from 'react-native-navigation'

export const goToHome = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            id:'navHome',
                            children: [{
                                component: {
                                    name: 'Home'
                                }
                            }],
                            options: {
                                bottomTab: {
                                    icon: require('../material/img/ighome-logo.png'),
                                    testID: 'firstTabBottom',
                                    fontSize: 10,
                                    iconColor:'#ABABAB',
                                    selectedIconColor: 'black',
                                },
                                topBar: {
                                    drawBehind: true,
                                    visible: false
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'Search',
                            options: {
                                bottomTab: {
                                    icon: require('../material/img/igsearch-logo.png'),
                                    testID: 'secondTabBottom',
                                    fontSize: 15,
                                    iconColor:'#ABABAB',
                                    selectedIconColor: 'black',
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            id:'navAddPost',
                            children: [{
                                component: {
                                    name: 'AddPost'
                                }
                            }],
                            options: {
                                bottomTab: {
                                    icon: require('../material/img/igplus-logo.png'),
                                    testID: 'tirthTabBottom',
                                    fontSize: 15,
                                    iconColor:'#ABABAB',
                                    selectedIconColor: 'black',
                                },
                                topBar: {
                                    drawBehind: true,
                                    visible: false
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'AddPost',
                            options: {
                                bottomTab: {
                                    icon: require('../material/img/igheart-logo.png'),
                                    testID: 'fourthTabBottom',
                                    fontSize: 15,
                                    iconColor:'#ABABAB',
                                    selectedIconColor: 'black',
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            id:'navProfil',
                            children: [{
                                component: {
                                    name: 'Profil'
                                }
                            }],
                            options: {
                                bottomTab: {
                                    icon: require('../material/img/igprofile-logo.png'),
                                    testID: 'fifthTabBottom',
                                    fontSize: 15,
                                    iconColor:'#ABABAB',
                                    selectedIconColor: 'black',
                                },
                                topBar: {
                                    drawBehind: true,
                                    visible: false
                                }
                            }
                        }
                    }
                ],
                options: {
                    bottomTabs: {
                        animate: false,
                        titleDisplayMode: 'alwaysHide',
                    }
                }
            }
            
        }
    })

}

export const goToLogin = () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name:"Login"
                    }
                }],
                options: {
                    topBar: {
                        drawBehind: true,
                        visible: false
                    }
                }
            }
        }
    })

    Navigation.setDefaultOptions({
        animations: {
            push: {
                enabled: 'false'
            },
            pop:{
                enabled:'false'
            }
        }
    })
}

// export const goToEdit = () => {
//     Navigation.setRoot({
//         root: {
//             stack: {
//                 id: 'editPost',
//                 children: [{
//                     component: {
//                         name: 'AddPost'
//                     }
//                 }]
//             }
//         }
//     })
// }