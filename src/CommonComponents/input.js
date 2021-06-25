import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function inputBox(props) {
  return (
    <View style={styles.inputBox}>
      <Icon name={props.iconName} size={25} color="#ffffff" />
      <TextInput
        style={styles.input}
        onChangeText={text => props.setInput(text)}
        value={props.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#b8b8b8'}
        autoCompleteType={props.autoCompleteType}
        secureTextEntry={props.password}
        keyboardType={props.keyboardType}
        clearTextOnFocus={true}
        returnKeyType={props.returnKey}
        onSubmitEditing={props.onEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: 'white',
    width: Dimensions.get('window').width * 0.8,
    marginLeft: 7,
    // marginTop: 3,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'white',
    height: 45,
    width: 100,
    borderRadius: 7,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    marginVertical: Dimensions.get('window').height*0.01,
  },
  textStyle: {
    fontSize: 17,
    marginVertical: 3,
  },
});
