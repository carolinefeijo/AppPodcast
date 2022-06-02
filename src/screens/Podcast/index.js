import { View, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { ListPodcastBig, PodcastPlay } from '../../assets/data/mock'
import SectionListPod from './components/SectionListPod'
import TopBar from '../Home/components/TopBar'
import SearchBar from '../../components/SearchBar'
import SectionListPlay from './components/SectionListPlay'
import Divider from '../../components/Divider'

export default function Podcast({ navigation }) {

  const navigationPlay = (id, title, description, uri) => {
    navigation.navigate('Play', {
      podcast: {id, title, description, uri },
    });
  }
  return (
    <View style={styles.container}>
      <TopBar />
      <SearchBar />
      <ScrollView>
        <SectionListPod data={ListPodcastBig} title={"Popular Now"} />
        <Divider margin={15} />
        <SectionListPlay navigator={navigationPlay} data={PodcastPlay} title={"New Realease"}  />
        <Divider margin={38} />
      </ScrollView>
    </View>
  )
}