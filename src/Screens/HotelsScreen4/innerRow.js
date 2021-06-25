import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';

export default function innerRow(props) {
    return (
        <View style={styles.row}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  row: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.1,
    alignItems: 'center',
  },
});
