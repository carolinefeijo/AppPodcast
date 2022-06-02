import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function PlayExecution() {

    const imgPlay = require('../../../../assets/images/RenderBook/playexecution/play.png')

    return (
        <View style={styles.container}>
            <Image
                source={imgPlay}>
            </Image>
        </View>
    )
}