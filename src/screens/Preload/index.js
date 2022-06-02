import React, { useEffect } from "react"
import { Image, View, } from 'react-native'
import styles from "./styles"

export default function Login({ navigation }) {
   const Logo = require('../../assets/images/preload/logo.png')

   useEffect(() => {
      setTimeout(() => {
         navigation.navigate('Introducion');
      }, 1000);
   }, [])

   return (
      <View style={styles.container}>
         <Image 
           source={Logo}>
         </Image>
      </View>

   )
}
