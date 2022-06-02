import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

import TopbarAuth from '../../components/TopbarAuth'
import InsertPhoto from '../../components/InsertPhoto'
import Divider from '../../components/Divider'
import InputLabel from './components/InputLabel'
import ButtonEnd from '../../components/ButtonEnd'

export default function Profile({ navigation }) {
  const navigationgoBack = () => {
    navigation.navigate('Home')
  }
  const navigationHome = () => {
    navigation.navigate('Home')
  }
  const [userName, setUserName] = useState('')
  const [firstName, setfirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [DateBirth, setBirth] = useState('')

  return (
    <View style={styles.container}>

      <TopbarAuth navigator={navigationgoBack} />
      <InsertPhoto />
      <InputLabel title={"User Name"} placeholder={"your username"} text={userName} onChangeText={setUserName} />
      <Divider margin={15} />
      <InputLabel title={"First Name"} placeholder={"your name"} text={firstName} onChangeText={setfirstName} />
      <Divider margin={15} />
      <InputLabel title={"Last Name"} placeholder={"your last name"} text={LastName} onChangeText={setLastName} />
      <Divider margin={15} />
      <InputLabel title={"Date of birth"} placeholder={"your birthday"} text={DateBirth} onChangeText={setBirth} />
      <Divider margin={60} />
      <ButtonEnd title={"Complete"} navigator={navigationHome} />

    </View>
  )
}