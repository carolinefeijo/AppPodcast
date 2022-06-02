import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const imgStar = require('../../../../assets/images/RenderBook/stars.png')

export default function RenderBook({ item }) {
    return (
        <View style={styles.renderItemContainer}>

            <View style={styles.mainContainer}>
                <Image style={styles.renderItemImage}
                    source={item.uri}>
                </Image>

                <View style={styles.titleContainer}>
                    <Text style={styles.renderTitle}>
                        {item.title}
                    </Text>

                    <Text style={styles.renderDescription}>
                        {item.description}
                    </Text>

                    <Image style={styles.renderStar}
                        source={imgStar}>
                    </Image>
                </View>
            </View>

        </View>
    )
}