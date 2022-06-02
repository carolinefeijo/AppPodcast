import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function AccessMultiGoogle({ navigator }) {
    const iconGoogle = require('../../../../assets/images/signIn/google.png')

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigator() }}>
                <Image
                    source={iconGoogle}>
                </Image>
            </TouchableOpacity>
        </View>
    )
}