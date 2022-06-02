import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
import RenderPod from '../RenderPod'

export default function SectionListPod({ data, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={RenderPod}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}