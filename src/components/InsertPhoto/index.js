import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function InsertPhoto() {

  const imgInsert = require('../../assets/images/insertphoto/insert.png')

  return (
    <View style={styles.container}>

      <Image style={styles.insert}
        source={imgInsert}>
      </Image>

    </View>
  )
}