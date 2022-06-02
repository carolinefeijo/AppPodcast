import { View } from 'react-native'
import React from 'react'
import styles from './style'
import TopBarPlay from './components/TopBarPlay'
import ListPlay from './components/ListPlay'
import ButtonPlay from './components/ButtonPlay'

export default function Play({ navigation, route }) {

  const {podcast} = route.params

  const navigationgoBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TopBarPlay navigator={navigationgoBack} />
      <ListPlay podcastBook={podcast}  size={"small"} />
      <ButtonPlay />
    </View>
  )
}