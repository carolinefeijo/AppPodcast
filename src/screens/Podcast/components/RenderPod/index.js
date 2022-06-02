import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function RenderPod({ item, navigator}) {
    
    return (
        <View style={styles.renderItemContainer}>
            <ScrollView>
                <TouchableOpacity
                    onPress={ ()=> { navigator () }}
                    >
                    <Image style={styles.renderItemImage}
                        source={item.uri}>
                    </Image>
              
                    <Text
                        style={styles.renderTitle}>
                        {item.title}
                    </Text>

                    <Text
                        style={styles.renderDescription}>

                        {item.description}
                    </Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
