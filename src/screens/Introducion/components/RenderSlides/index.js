import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function RenderSlides({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={item.image}
      />

      <Text
        style={styles.title}>
        {item.title}
      </Text>

      <Text
        style={styles.description}>
        {item.text}
      </Text>

    </View>
  )
}