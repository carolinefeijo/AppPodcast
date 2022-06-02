import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import RenderPlay from '../RenderPlay'

export default function SectionListPlay({ title, data, navigator }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <RenderPlay item={item} navigator={navigator} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}