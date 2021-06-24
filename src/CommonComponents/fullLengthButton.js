import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function fullLengthButton(props) {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          props.function();
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          <Icon
            name={props.iconName}
            color={'white'}
            size={Dimensions.get('window').width * 0.07}
            style={{marginTop: 10}}
          />
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'white',
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').height * .07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingBox: {
      borderWidth: 1,
      borderRadius: 12,
      borderColor: 'white',
      width: Dimensions.get('window').width * .9,
      height: Dimensions.get('window').height * .07,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: Dimensions.get('window').height*0.1,
      right: Dimensions.get('window').width*0.2,
  },
  text: {
      color: 'white',
      fontSize: 16,
  }
});
