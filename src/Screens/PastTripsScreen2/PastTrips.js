import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  FlatList
} from 'react-native';
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Icon from 'react-native-vector-icons/Ionicons';
import AddButton from './addButton';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Input from '../../CommonComponents/input';
import Stars from 'react-native-stars';
import StyledButton from '../../CommonComponents/styledButton';

export default function PastTripsHome() {
  const [trips, setChangeTrips] = useState([
    {
      dest: 'Honolulu',
      dur: '1 week',
      expenses: '$2000',
      stars: 8,
      tripName: 'Hawaii Vacation',
    },
    {
      dest: 'Rabat',
      dur: '2 Weeks',
      expenses: '$15809',
      stars: 5,
      tripName: 'Morocco Vacation',
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [tripName, setChangeTripName] = useState(null);
  const [dest, setChangeDest] = useState(null);
  const [dur, setChangeDur] = useState(null);
  const [expenses, setChangeExpenses] = useState(null);
  const [stars, setStars] = useState(0);
  closeModal = () => {
    setVisible(false)
  };
  renderHotelsList = () => {
        return trips.map((element) => {
            return (
              <View key={element.tripname} style={styles.box}>
                <View style={styles.topRow}>
                  <Text style={styles.tripName}>{element.tripName}</Text>
                </View>
                <Stars
                  display={element.stars}
                  spacing={8}
                  count={10}
                  starSize={30}
                  fullStar={<Icon name="star" color={'#f7d825'} size={23} />}
                  emptyStar={
                    <Icon name="star-outline" color={'#f7d825'} size={23} />
                  }
                />
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Destination: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                      },
                    ]}>
                    {element.dest}
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Duration: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                      },
                    ]}>
                    {element.dur}
                  </Text>
                </View>
                <View style={styles.ratingRow}>
                  <Text style={styles.innerTag}>Expenses: </Text>
                  <Text
                    style={[
                      styles.innerTag,
                      {
                        marginRight: 10,
                        fontFamily: 'KohinoorDevanagari-Regular',
                        color: '#1bb567',
                      },
                    ]}>
                    {element.expenses}
                  </Text>
                </View>
              </View>
            );
        })
    }
  return (
    <View style={styling.vertContainer}>
      <Header title="Past Trips"></Header>
      <View>
        <Modal animationType="slide" visible={visible} transparent={true}>
          <View style={styles.container1}>
            <View style={styles.container}>
              <Input
                setInput={setChangeTripName}
                placeholder={'Trip Name'}
                iconName={'bookmark-outline'}
                returnKey={'next'}
              />
              <Input
                setInput={setChangeDest}
                placeholder={'Destination'}
                iconName={'locate-outline'}
                returnKey={'next'}
              />
              <Input
                setInput={setChangeDur}
                placeholder={'Duration'}
                iconName={'time-outline'}
                returnKey={'next'}
              />
              <Input
                setInput={setChangeExpenses}
                placeholder={'Expenses'}
                iconName={'cash-outline'}
                returnKey={'done'}
              />
              <Stars
                default={1}
                spacing={8}
                count={10}
                update={val => {
                  setStars(val);
                }}
                starSize={30}
                fullStar={<Icon name="star" color={'#f7d825'} size={23} />}
                emptyStar={
                  <Icon name="star-outline" color={'#f7d825'} size={23} />
                }
              />
              <StyledButton
                loading={false}
                title={'Add Trip'}
                submitForm={() => {
                  trips.push({
                    tripName: tripName,
                    dest: dest,
                    dur: dur,
                    expenses: expenses,
                    stars: stars,
                  });
                  console.log(trips);
                  closeModal();
                }}
                //   loading={loading}
              />
            </View>
          </View>
        </Modal>
      </View>
      <AddButton title={'Add a Trip'} openModal={setVisible} />
      <ScrollView>
                {renderHotelsList()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height * 0.8,
  },
  container: {
    width: Dimensions.get('window').width * 0.95,
    // height: Dimensions.get('window').height * 0.6,
    alignItems: 'center',
    backgroundColor: '#525252',
    borderRadius: 20,
    paddingVertical: 20,
  },
  container2: {
    alignItems: 'center',
  },
  closeModal: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.07,
    backgroundColor: '#FD282A',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerTag: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'KohinoorDevanagari-Semibold',
  },
  box: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  tripName: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'KohinoorTelugu-Regular',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fa3e40',
    width: Dimensions.get('window').width * 0.902,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: -1,
    alignItems: 'center',
    paddingVertical: 5,
    alignSelf: 'center',
    marginBottom: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.85,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
