import React from 'react'
import * as F from './src/assets/contants/fonts'
import * as C from './src/assets/contants/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Preload from './src/screens/Preload';
import Introducion from './src/screens/Introducion';
import Home from './src/screens/Home';
import SignUp from './src/screens/SignUp';
import Profile from './src/screens/Profile';
import SignIn from './src/screens/SignIn'
import Podcast from './src/screens/Podcast';
import Book from './src/screens/Book'
import Play from './src/screens/Play'
import TabBarIcon from './src/components/TabBarIcon';

const homeIcon = require('./src/assets/images/TabNavigator/home.png')
const podcastIcon = require('./src/assets/images/TabNavigator/podcast.png')
const bookIcon = require('./src/assets/images/TabNavigator/book.png')
const profileIcon = require('./src/assets/images/TabNavigator/profile.png')

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BeforeLoginStack() {
    return (
        <Stack.Navigator >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Preload" component={Preload} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Introducion" component={Introducion} />

        </Stack.Navigator>
    );
}

function AfterLoginStack() {
    return (
        <Stack.Navigator >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SignIn" component={SignIn} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SignUp" component={SignUp} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Profile" component={Profile} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Home" component={Home} />

        </Stack.Navigator>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: C.maskPink,
                    borderTopColor: 'transparent',
                    height: 65,
                    position: 'absolute'
                },
                tabBarActiveTintColor: C.black2,
                tabBarInactiveTintColor: C.lightgray2,
                tabBarLabelStyle: {
                    fontFamily: F.PR,
                    fontSize: 12,
                    marginBottom: 5,
                    fontWeight: '500'
                },
            }}>

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon icon={homeIcon} iconFocused={homeIcon} focused={focused} />)
            }}
                name="Home" component={Home} />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon icon={bookIcon} iconFocused={bookIcon} focused={focused} />)
                }}
                name="Book"
                component={Book} />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon icon={podcastIcon} iconFocused={podcastIcon} focused={focused} />)
                }}
                name="Podcast"
                component={Podcast} />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon icon={profileIcon} iconFocused={profileIcon} focused={focused} />)
                }}
                name="Profile"
                component={Profile} />
        </Tab.Navigator>

    );
}

function AfterLoginStacks() {
    return (
        <Stack.Navigator >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Home" component={HomeTabs} />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Podcast" component={Podcast} />


            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Play" component={Play} />

        </Stack.Navigator>
    )
}

export default function App() {

    return (

        <NavigationContainer>
            {/* <AfterLoginStack/> */}
            {/* <BeforeLoginStack/> */}
            <AfterLoginStacks />
        </NavigationContainer>
    )
}





