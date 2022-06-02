import { View, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function InputSearch() {

    const iconSearch = require('../../assets/images/topbar/search.png')

    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>

                <TextInput
                    style={styles.Input}
                    placeholder="cari video, psikiater, dll"
                    placeholderTextColor={"#A9A9A9"}
                />
                <Image style={styles.iconSearch}
                    source={iconSearch}>
                </Image>

            </View>

        </View >
    )
} 