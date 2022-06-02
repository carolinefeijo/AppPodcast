import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function TitleAuth() {

    const Logo = require('../../assets/images/signUp/logo.png')

    return (
        <View style={styles.main}>

            <Image style={styles.logo}
                source={Logo}>
            </Image>

            <Text style={styles.title}>SignUp</Text>
        </View>
    )
}