import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import RenderBook from '../RenderBook'

export default function SectionListBook({ title, data }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <SafeAreaView style={styles.safeAreaContainer}>
                <FlatList
                    data={data}
                    renderItem={RenderBook}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}