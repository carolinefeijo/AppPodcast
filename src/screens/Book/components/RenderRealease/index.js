import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function RenderRealeaseBook({ item, navigator }) {

    const imgStar = require('../../../../assets/images/RenderBook/stars.png')
    const imgPlay = require('../../../../assets/images/RenderBook/NewRelease/play.png')
    const imgExec = require('../../../../assets/images/RenderBook/NewRelease/exec.png')

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

                    <View style={styles.subdescription}>
                        <Text style={styles.TitleGenre}> Genre :</Text>
                        <Text style={styles.SubGenre}> Fantasy, sci-fi,
                            mystery
                        </Text>
                    </View>

                    <View style={styles.starContainer}>
                        <Text style={styles.TitleGenre}>Rating :</Text>
                        <Image style={styles.renderStar}
                            source={imgStar}>
                        </Image>
                    </View>

                    <View style={styles.playcontainer}>
                        <Image style={styles.renderImagePlay}
                            source={imgPlay}>
                        </Image>

                        <TouchableOpacity
                            onPress={() => { navigator(item.id, item.title, item.description, item.uri) }}>
                            <Image
                                source={imgExec}>
                            </Image>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>

        </View>
    )
}