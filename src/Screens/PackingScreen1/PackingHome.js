import React from 'react'
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Button from '../../CommonComponents/fullLengthButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PackingHome() {
    hello = () => {
        console.log("Hello")
    }

    return (
      <View style={styling.vertContainer}>
        <Header title={'Packing'} />
        <ScrollView>
          <Button title={'Add An Item'} function={hello} iconName={"add-circle-outline"}/>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({})