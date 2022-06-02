import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function InputLabel({ placeholder, title, text, onChangeText  }) {

    const check = require('../../../../assets/images/signUp/check.png')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.mainInput}>

                <TextInput style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor='#3A3A3A'
                    onChangeText={onChangeText}
                    value={text}
                />

                {
                    text != ""  && 
                    <Image style={styles.icon}
                        source={check}

                    />
                }

            </View>
        </View>
    )
}
