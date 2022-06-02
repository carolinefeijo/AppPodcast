import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function Execution() {

    const imgExecution = require('../../../../assets/images/RenderBook/execution/execution.png')

    return (
        <View style={styles.container}>

            <Image
                source={imgExecution} />

            <View style={styles.mainContainer}>
                <Text style={styles.title}>07:22</Text>
                <Text style={styles.title}>15:48</Text>
            </View>
            
        </View>
    )
}