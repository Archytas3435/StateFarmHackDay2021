import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';

export default function individualHotel(props) {
    const { element } = props.route.params;
    console.log(element);
    renderAmenities = () => {
          return element.amenities.map((element) => {
            return (
              <View style={{marginVertical: 5}} key={element}>
                <View style={styles.aBox}>
                  <Text
                    style={[
                      styles.innerTag,
                      {fontFamily: 'KohinoorTelugu-Regular'},
                    ]}>
                    {element.replaceAll('_', ' ')}
                  </Text>
                </View>
              </View>
            );
          })
    }
  return (
    <View style={styling.vertContainer}>
      <Header title={'Hotel Information'} back={true} nav={props.nav} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.ratingRow}>
          <Text style={styles.innerTag}>Rating: </Text>
          <Stars
            display={parseInt(element.rating)}
            spacing={8}
            count={5}
            starSize={30}
            fullStar={<Icon name="star" color={'#f7d825'} size={20} />}
            emptyStar={<Icon name="star-outline" color={'#f7d825'} size={20} />}
          />
        </View>
        <Text style={styles.description}>
          {element.description != undefined ? element.description.text : ''}
        </Text>
        <Text
          style={[
            styles.innerTag,
            {
              alignSelf: 'center',
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 10,
            },
          ]}>
          LIST OF AMENITIES
          {renderAmenities()}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingRow: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  innerTag: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'KohinoorDevanagari-Semibold',
  },
  description: {
    color: 'white',
    fontFamily: 'KohinoorTelugu-Regular',
    fontSize: 14,
    textAlign: 'justify',
    width: Dimensions.get('window').width * 0.95,
  },
  innerTag: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'KohinoorDevanagari-Semibold',
  },
  aBox: {
    width: Dimensions.get('window').width * 0.9,
    paddingVertical: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
