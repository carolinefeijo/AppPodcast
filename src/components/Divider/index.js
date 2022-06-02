import { View, Text } from 'react-native'
import React from 'react'

export default function Divider({ margin, marginBottom}) {
  return (
    <View style={{ margin: margin }}>
    <View style={{ marginBottom: marginBottom }}>
    </View>
    </View>

  )
}