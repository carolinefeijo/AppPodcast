import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function SectionSmallList({ data, title, size, navigator }) {

  function renderItem({ item }) {
    return (
      <View style={styles.renderItemContainer}>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => { navigator() }}>

          <Image
            style={size == 'small' ? styles.renderItemImageSmall : styles.renderItemImageLarge}
            source={item.uri}>
          </Image>

          <Text
            style={styles.renderTitle}>
            {item.title}
          </Text>

          {
            item.description != undefined &&
            <Text
              style={styles.renderDescription} >

              {item.description}
            </Text>
          }

          {
            item.time != undefined &&
            <Text
              style={styles.renderDescription} >
              {item.time}
            </Text>
          }
        </TouchableOpacity>

      </View>

    )
  }
  return (

    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>
      <SafeAreaView style={styles.safeAreaContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

    </View>
  )
}
