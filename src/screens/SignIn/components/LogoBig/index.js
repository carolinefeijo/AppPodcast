import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function LogoBig() {
    const MainLogo = require('../../../../assets/images/signIn/logobig.png')
    return (
        <View style={styles.container}>

            <Image
                source={MainLogo}>
            </Image>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome!,We are ready for you!</Text>
            </View>

        </View>
    )
}