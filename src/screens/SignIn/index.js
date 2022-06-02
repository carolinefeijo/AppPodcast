import { View } from 'react-native'
import React from 'react'
import styles from './style'
import TopbarAuth from '../../components/TopbarAuth'
import LogoBig from './components/LogoBig'
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import ButtonEnd from '../../components/ButtonEnd'
import AccessMultiGoogle from './components/AccessMultiGoogle'
import AccessMultiFacebook from './components/AccessMultiFacebook'

export default function SignIn({ navigation }) {
  const AcessGoogle = () => {
    navigation.navigate('Home')
  }
  const AcessFacebook = () => {
    navigation.navigate('Home')
  }
  const accessAccount  = () => {
    navigation.navigate('SignUp')
  }
  return (
    <View style={styles.container}>
      <TopbarAuth />
      <Divider margin={15} />
      <LogoBig />
      <Divider margin={40} />
      <Button title={'Using mobile number'} />
      <Divider margin={10} />
      <Button title={'access with gmail'} />
      <Divider margin={10} />
      <ButtonEnd title={"existing account"} navigator={accessAccount}/>
      <Divider margin={30} />
      <View style={styles.mainMult}>
      <AccessMultiGoogle navigator={AcessGoogle}/>
      <AccessMultiFacebook navigator={AcessFacebook} />
      </View>
    </View>
  )
}