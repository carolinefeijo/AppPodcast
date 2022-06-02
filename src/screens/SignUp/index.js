import { View  } from 'react-native'
import React from 'react'
import styles from './style'
import TopbarAuth from '../../components/TopbarAuth'
import InputPasswordField from '../../components/InputPasswordField'
import TitleAuth from '../../components/TitleAuth'
import InputEmailField from '../../components/InputEmailField'
import Divider from '../../components/Divider'
import ButtonReset from '../../components/ButtonReset'
import Button from '../../components/Button'

export default function SignUp({ navigation }) {

  const navigationToReset = () => {
    navigation.navigate('Home')
  }
  const navigationToLogin = () => {
    navigation.navigate('Profile')
  }
  const navigationToAcess = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>

      <TopbarAuth />
      <View style={styles.main}>
        <TitleAuth />
        <InputEmailField title={'Email Address'} placeholder={"enter your email"} />
        <Divider margin={15} />
        <InputPasswordField title={'Password'} placeholder={"enter your password"} />
        <Divider margin={10} />
        <ButtonReset title={"Forgot Password ?"} navigator={navigationToReset} />
        <ButtonReset title={"access account"} navigator={navigationToAcess} />
        <Divider margin={90} />
        <Button navigatorProfile={navigationToLogin} title={"Sign Up "} />
      </View>

    </View>
  )
}