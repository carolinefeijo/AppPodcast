import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function SectionList({ data, title }) {
    function renderItem({ item }) {
        return (
            <View style={styles.renderItemContainer}>
                <TouchableOpacity onPress={() => { console.log(item.id) }}>
                    <Image style={styles.renderItemImage}
                        source={item.uri}>
                    </Image>
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
                    showsHorizontalScrollIndicator={false} />
            </SafeAreaView>

        </View>
    )
}