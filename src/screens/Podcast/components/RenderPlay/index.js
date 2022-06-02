import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function RenderPlay({ item, navigator }) {
     const imgOptions = require('../../../../assets/images/SectionListPlay/img.png')
     const imgPlay = require('../../../../assets/images/SectionListPlay/play.png')
     const imgRunning = require('../../../../assets/images/SectionListPlay/running.png')
     const imgExecute = require('../../../../assets/images/SectionListPlay/execute.png')

     return (
          <View style={styles.renderItemContainer}>
               <TouchableOpacity
                    onPress={() => { navigator(item.id, item.title, item.description, item.uri) }}>

                    <View style={styles.mainContainer}>
                         <Image style={styles.renderItemImage}
                              source={item.uri}>
                         </Image>

                         <View style={styles.mainTitle}>

                              <View style={styles.directionContainer}>
                                   <Text style={styles.renderTitle}>
                                        {item.title}
                                   </Text>

                                   <Image style={styles.img}
                                        source={imgOptions}>
                                   </Image>
                              </View>

                              <Text style={styles.renderDescription}>
                                   {item.description}
                              </Text>

                              <Text style={styles.renderSubdescription}>
                                   {item.subdescription}
                              </Text>

                              <View style={styles.playContainer}>
                                   <Image style={styles.imgPlay}
                                        source={imgPlay}>
                                   </Image>

                                   <Image style={styles.imgRunning}
                                        source={imgRunning}>
                                   </Image>

                                   <Image style={styles.imgExecute}
                                        source={imgExecute}>
                                   </Image>
                              </View>

                         </View>
                    </View>

               </TouchableOpacity>
          </View>
     )
}