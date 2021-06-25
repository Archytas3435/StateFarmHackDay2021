import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialIndicator} from 'react-native-indicators';

export default function continueButton(props) {
  const returnStatus = () => {
    if (!props.loading) {
      return (
        <Icon
          name={'chevron-forward-outline'}
          size={30}
          color="#ffffff"
          style={{marginRight: 10}}
        />
      );
    } else {
      return (
        <MaterialIndicator
          color="white"
          size={Dimensions.get('window').width * 0.06}
          style={styles.indicator}
        />
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.submitForm(true);
        }}>
        <Text style={styles.titleText}>{props.title}</Text>
        {returnStatus()}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 0,
    marginRight: 15,
  },
  button: {
    height: 45,
    borderRadius: 7,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#FD282A',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: 'KohinoorTelugu-Regular',
    color: 'white',
    fontSize: 25,
    // marginTop: 3,
    marginLeft: 5,
  },
});
