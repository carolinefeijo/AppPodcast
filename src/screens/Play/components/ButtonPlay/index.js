import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function ButtonPlay() {

    const imgPlay = require('../../../../assets/images/Play/play.png')

    return (
        <View style={styles.container}>
            
            <View style={styles.mainContainer}>
                <Image
                    source={imgPlay}>
                </Image>
            </View>

        </View>
    )
}