import { View, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import TopBar from './components/TopBar'
import SearchBar from '../../components/SearchBar'
import SectionList from './components/SectionList'
import SectionSmallList from './components/SectionSmallList'
import { promotionData, realeaseData, podcastData, episodeData, videosData, books, creators } from '../../assets/data/mock'
import Divider from '../../components/Divider'

export default function Home({ navigation }) {

  const navigationToLogin = () => {
    navigation.navigate('SignUp')
  }
  const navigationPodcast = () => {
    navigation.navigate('Podcast')
  }

  return (
    <View style={styles.container}>
      <TopBar navigator={navigationToLogin} />
      <ScrollView>
        <SearchBar />
        <SectionList data={promotionData} title={"Promotion"} />
        <SectionSmallList data={realeaseData} title={"New Realease"} size={'small'} />
        <SectionSmallList data={podcastData} navigator={navigationPodcast} title={"Trending Podcast"} size={'small'} />
        <SectionSmallList data={episodeData} title={"New Episode"} size={'small'} />
        <SectionSmallList data={videosData} title={"Videos"} size={'large'} />
        <SectionSmallList data={books} title={"Books"} size={'small'} />
        <SectionSmallList data={creators} title={"Top Creators"} size={'small'} />
        <Divider margin={70} />
      </ScrollView>
    </View>

  )
}
