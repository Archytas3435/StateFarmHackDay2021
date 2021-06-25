import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Button from '../../CommonComponents/fullLengthButton';
import Input from '../../CommonComponents/input';
import UI from './hotelsUI';

export default function HotelsHome(props) {
  const[accessToken, setAccessToken] = useState()
      useEffect(() => {
        const URL =
          'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=PAR&roomQuantity=1&adults=2&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=NONE';
        const authURL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
        const CLIENT_ID = 'B0UPZsPBhgtOI8wosGQxPRbruGYAxAJS';
        const CLIENT_SECRET = '8A5TuRkxOvEwYiwM';
        fetch(authURL, {
          method: 'POST',
          body:
            'grant_type=client_credentials&client_id=' +
            CLIENT_ID +
            '&client_secret=' +
            CLIENT_SECRET,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(function (resp) {
            return resp.json();
          })
          .then(function (data) {
            setAccessToken(data.access_token)
            console.log(accessToken)
          })
          .catch(function (err) {
            console.log('something went wrong', err);
          });
      }, []);
    return (
      <View style={styling.vertContainer}>
        <Header title={'Find Hotels'} />
        <ScrollView>
          <UI accessToken={accessToken} nav={props.nav}/>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({})
