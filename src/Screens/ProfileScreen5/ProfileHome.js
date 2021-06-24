import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';

export default function ProfileHome() {
    return (
        <View style={styling.container}>
            <Header title='Profile'></Header>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})