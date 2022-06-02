import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function TopBarPlay({ navigator }) {
  const imgArrow = require('../../../../assets/images/Play/arrow.png')
  const imgShare = require('../../../../assets/images/Play/share.png')

  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>

        <TouchableOpacity
          onPress={() => { navigator() }}>
          <Image
            source={imgArrow}>
          </Image>
        </TouchableOpacity>

        <Image
          source={imgShare}>
        </Image>

      </View>

    </View>
  )
}