import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function addButton(props) {
  return (
    <TouchableOpacity style={styles.box}
    onPress={() => {
        props.openModal(true)
    }}
    >
      <Icon
        name={'add-circle-outline'}
        size={30}
        color="#ffffff"
        style={{marginRight: 5}}
      />
      <Text style={styles.titleText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD282A',
  },
  titleText: {
    fontFamily: 'KohinoorTelugu-Regular',
    color: 'white',
    fontSize: 18,
    // marginTop: 3,
  },
});
