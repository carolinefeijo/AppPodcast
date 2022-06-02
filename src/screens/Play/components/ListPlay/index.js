import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function ListPlay({ podcastBook, size }) {

    const imgExec = require('../../../../assets/images/execution/exec.png')
    const { description, title, uri } = podcastBook
 
    return (
        <View style={styles.renderItemContainer}>

            <Image
                style={size == 'small' ? styles.renderItemImageSmall : styles.renderItemImageLarge}
                source={uri}>
            </Image>
            <View style={styles.renderMainContainer}>

                <Text style={styles.renderTitle}>
                    {title}
                </Text>

                <Text style={styles.renderSubTitle}>
                    {description}
                </Text>
            </View>

            <View style={styles.renderItemPlay}>
                <Image
                    source={imgExec}>
                </Image>
            </View>
            <View style={styles.mainTime}>
                <Text style={styles.title}>07:22</Text>
                <Text style={styles.title}>15:48</Text>
            </View>

        </View>
    )
}