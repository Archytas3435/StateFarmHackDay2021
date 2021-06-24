import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styling } from './styles/styles'

export default function Home() {
    return (
        <View style={styling.container}>
            <Text>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
