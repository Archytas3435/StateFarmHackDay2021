import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function settingsButton(props) {
    return (
      <View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            props.submitForm(true);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={props.icon}
              size={25}
              color="#ffffff"
              style={{marginLeft: 10}}
            />
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
          <Icon
            name={'chevron-forward-outline'}
            size={30}
            color="#ffffff"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'KohinoorTelugu-Regular',
    color: 'white',
    fontSize: 18,
    // marginTop: 3,
    marginLeft: 5,
  },
});
