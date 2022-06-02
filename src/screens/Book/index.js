import { View, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { ListBook, NewRealeaseBook, TopBook } from '../../assets/data/mock'
import TopBar from '../Home/components/TopBar'
import SearchBar from '../../components/SearchBar'
import SectionListBook from './components/SectionListBook'
import SectionRealeseBook from './components/SectionRealeseBook'
import Divider from '../../components/Divider'

export default function Book({ navigation }) {

  const navigationBook = (id, title, description, uri) => {
    navigation.navigate('Play', {
      podcast: { id, title, description, uri },
    });
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <SearchBar />
      <ScrollView>
        <SectionListBook data={ListBook} title={"Popular now"} />
        <Divider marginBottom={10} />
        <SectionRealeseBook data={NewRealeaseBook} title={"New Release"} navigator={navigationBook} />
        <SectionRealeseBook data={TopBook} title={"Top Sci-Fi"} navigator={navigationBook} />
        <Divider margin={38} />
      </ScrollView>
    </View>
  )
}