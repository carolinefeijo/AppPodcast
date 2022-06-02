import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function ButtonReset({ navigator, title }) {

    return (
        <View style={styles.container}>

            <View style={styles.mainContainer}>

                <TouchableOpacity
                    onPress={() => { navigator() }}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}