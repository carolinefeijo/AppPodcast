import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function Button({ navigatorProfile, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigatorProfile() }}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}
