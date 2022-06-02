import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function TopbarAuth({ navigator }) {
    const IconArrow = require('../../assets/images/signUp/arrow.png')
    return (
        <View style={styles.container}>

            <View style={styles.iconArrow}>
                <TouchableOpacity
                    onPress={() => { navigator() }}>

                    <Image style={styles.arrow}
                        source={IconArrow}>
                    </Image>

                </TouchableOpacity>
            </View>

        </View>
    )
}