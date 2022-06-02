import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function TopBar({ navigator }) {

    const PhotoUserOff = require('../../../../assets/images/topbar/userOff.png')
    const PhotoUserOn = require('../../../../assets/images/topbar/userOn.png')
    const iconNotification = require('../../../../assets/images/topbar/notifi.png')

    return (
        <View style={styles.container}>

            <View style={styles.iconContainer}>

                <TouchableOpacity
                    onPress={() => { navigator() }}>
                    <Image
                        source={PhotoUserOn}>
                    </Image>
                </TouchableOpacity>

            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> Hai,Samuel..</Text>
            </View>

            <View style={styles.iconContainer}>
                <Image
                    source={iconNotification} />
            </View>

        </View>
    )
}
