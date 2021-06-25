import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function commonHeader(props) {
  renderBackButton = () => {
    if(props.back){
      return (
        <TouchableOpacity style={styles.back}
        onPress={() => {
          props.nav.goBack();
        }}
        >
          <Icon
            name="arrow-back-outline"
            color={'white'}
            size={26}
          />
        </TouchableOpacity>
      );
    }
  }
  return (
    <View style={styles.headerBox}>
      <View style={styles.titleBox}>
        {renderBackButton()}
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.gem}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.11,
    alignItems: 'center',
    borderBottomColor: '#2f2f2f',
    borderBottomWidth: 0.5,
  },
  title: {
    color: 'white',
    fontSize: Dimensions.get('window').width * 0.05,
  },
  titleBox: {
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * .9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gem: {
    marginBottom: Dimensions.get('window').height * 0.005,
    marginLeft: 5,
  },
  back: {
    position: 'absolute',
    left: 0,
  },
});
