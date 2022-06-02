import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function InputEmailField({ title, placeholder }) {

    const iconCheck = require('../../assets/images/signUp/check.png')
    const [email, setEmail] = useState('')

    return (
        <View style={styles.container}>

            <Text style={email.includes('@') ? styles.title : email != "" && styles.titleError}>{title}</Text>

            <View style={styles.mainInput}>
                <TextInput style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor='#3A3A3A'
                    fontFamily="Poppins-Regular"
                    fontSize={14}
                    fontWeight="400"
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                {
                    email.includes('@') &&
                    <Image style={styles.icon}
                        source={iconCheck}
                    />
                }

            </View>
        </View>
    )
}
