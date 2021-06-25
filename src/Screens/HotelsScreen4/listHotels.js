import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/Ionicons';

export default function listHotels(props) {
    const { hotelsList } = props.route.params;
    // console.log(hotelsList)
    handleHotelList = () => {
        for(let i = 0; i < hotelsList.length;i++) {
            console.log(hotelsList[i].hotel.contact)
        }
    }
    renderHotelsList = () => {
        return hotelsList.map((element) => {
            return (
              <TouchableOpacity style={styles.box} key={element.hotel.name}
              onPress={() => {
                  props.nav.navigate('Info', {
                    element: element.hotel,
                  });
              }}
              >
                <View style={styles.topRow}>
                  <Text style={styles.hotelName}>
                    {element.hotel.name.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Rating: </Text>
                  <Stars
                    display={parseInt(element.hotel.rating)}
                    spacing={8}
                    count={5}
                    starSize={30}
                    fullStar={<Icon name="star" color={'#f7d825'} size={20} />}
                    emptyStar={
                      <Icon name="star-outline" color={'#f7d825'} size={20} />
                    }
                  />
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Distance: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                      },
                    ]}>
                    {element.hotel.hotelDistance.distance} MILES AWAY
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Hotel Chain Code: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                      },
                    ]}>
                    {element.hotel.chainCode}
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Phone: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                      },
                    ]}>
                    {element.hotel.contact != undefined ? element.hotel.contact.phone : ''}
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Status: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                        color: '#1bb567',
                      },
                    ]}>
                    AVAILABLE
                  </Text>
                </View>
              </TouchableOpacity>
            );
        })
    }
    useEffect(() => {
        handleHotelList()
    })
    return (
      <View style={styling.vertContainer}>
        <Header title={'Available Hotels'} back={true} nav={props.nav} />
        <ScrollView
        
        showsVerticalScrollIndicator={false}>

          {renderHotelsList()}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fa3e40',
    width: Dimensions.get('window').width * 0.902,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: -1,
    alignItems: 'center',
    paddingVertical: 5,
    alignSelf: 'center',
  },
  hotelName: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'KohinoorTelugu-Regular',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.85,
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
});
