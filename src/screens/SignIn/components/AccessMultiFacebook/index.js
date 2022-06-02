import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function AccessMultiFacebook({ navigator}) {
    const iconFacebook = require('../../../../assets/images/signIn/facebook.png')
    
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigator() }}>
                <Image
                    source={iconFacebook}>
                </Image>
            </TouchableOpacity>
  
        </View>
    )
}