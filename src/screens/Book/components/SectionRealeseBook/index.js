import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import RenderRealeaseBook from '../RenderRealease'

export default function SectionRealeseBook({ title, data, navigator, }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <RenderRealeaseBook item={item} navigator={navigator} />}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false} />
            </SafeAreaView>
        </View>
    )
}