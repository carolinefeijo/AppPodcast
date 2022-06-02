import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function InputPasswordField({ title, placeholder }) {

  const iconShow = require('../../assets/images/signUp/eye.png')
  const iconHide = require('../../assets/images/signUp/eyeShow.png')

  const [hidePassword, setHidePassword] = useState(true)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.mainInput}>

        <TextInput style={styles.input}
          placeholder={placeholder}
          placeholderTextColor='#3A3A3A'
          fontFamily="Poppins-Regular"
          fontSize={14}
          fontWeight="400"
          secureTextEntry={hidePassword}
        />

        <TouchableOpacity
          onPress={() => { hidePassword ? setHidePassword(false) : setHidePassword(true) }}>
          <Image style={styles.icon}
            source={hidePassword ? iconShow : iconHide} />
        </TouchableOpacity>

      </View>
      
    </View>
  )
}
