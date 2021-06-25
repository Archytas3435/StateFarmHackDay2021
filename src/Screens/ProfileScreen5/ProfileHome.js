import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import StyledButton from './settingsButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileHome() {
    return (
      <View style={styles.container}>
        <Header title="Profile"></Header>
        <ScrollView>
          <View style={styles.around}>
            <Text style={styles.title}>John Smith</Text>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://spencerauthor.com/wp-content/uploads/2020/01/profile-circle.png',
              }}
            />
            <Text style={styles.subtitle}> john.smith.2561@gmail.com </Text>
            <Text style={styles.phone}>(123) 456-7890</Text>
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              title={'About Us'}
              icon={'information-circle-outline'}
              submitForm={() => {}}
            />
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              title={'Contact Us'}
              icon={'mail-outline'}
              submitForm={() => {}}
            />
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              icon={'pencil-outline'}
              title={'Write a Review'}
              submitForm={() => {}}
            />
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              title={'Privacy Policy'}
              icon={'newspaper-outline'}
              submitForm={() => {}}
            />
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              icon={'document-outline'}
              title={'Terms of Service'}
              submitForm={() => {}}
            />
          </View>
          <View style={styles.box2}>
            <StyledButton
              loading={false}
              icon={'log-out-outline'}
              title={'Logout'}
              submitForm={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 26,
    alignItems: 'flex-start',
    fontFamily: 'KohinoorDevanagari-Semibold',
  },
  box2: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    alignItems: 'flex-start',
    borderBottomColor: '#2f2f2f',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 10,
    marginVertical: 7,
  },
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  around: {
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#FD282A',
    borderRadius: 100,
  },
  title: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'KohinoorTelugu-Regular',
    marginTop: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 5,
    fontFamily: 'KohinoorTelugu-Regular',
  },
  phone: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: -2,
    fontFamily: 'KohinoorTelugu-Regular',
    marginBottom: 10,
  },
});