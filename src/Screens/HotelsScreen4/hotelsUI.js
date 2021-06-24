import React, { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../CommonComponents/input';
import StyledButton from '../../CommonComponents/styledButton';

export default function hotelsUI(props) {
    const[roomQuantity, setRoomQuantity] = useState(null);
    const[guests, setGuests] = useState(null);
    const [distance, setDistance] = useState(null);
    const[address, setAddress] = useState(null);
    let lat;
    let lon;
          getRequest = (city) => {
            const AuthStr = 'Bearer '.concat(props.accessToken);
            const axios = require('axios');
            console.log(lat + " " + lon);
            const lat2 = Number(13.383);

            const URL = `https://test.api.amadeus.com/v2/shopping/hotel-offers?roomQuantity=1&cityCode=${city}&adults=2&radius=5&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=NONE`;
            var string_copy = (' ' + URL).slice(1);  
            axios
              .get(string_copy, {headers: {Authorization: AuthStr}})
              .then(response => {
                console.log(response.data.data);
              })
              .catch(error => {
                console.log('error Amadeus' + error);
              });
          };
              format_str_hotel = s => {
                return s.replaceAll(' ', '%20');
              };
          get_lat_lon = (s1) => {
              const API_KEY =
                '5b3ce3597851110001cf624844cd20c3b5664414b9c2edc1eb4fce19';
            const axios = require('axios');
            const URL1 = `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${s1}`;
            axios
              .get(URL1)
              .then(function (response) {
                lat = 
                  Math.round((response.data.bbox[1] + response.data.bbox[3]) / 2 * 10000) / 10000;
                lon = 
                  Math.round(
                    ((response.data.bbox[0] + response.data.bbox[2]) / 2) *
                      10000,
                  ) / 10000
                ;
                // console.log(lat + " " + lon)
              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {
              });
          };
    handleRequest = () => {
        get_lat_lon('Berlin Germany')
        getRequest("DFW")
    }
    return (
      <View>
        <Input
          setInput={setAddress}
          placeholder={'Airport Code (Ex: DFW)'}
          iconName={'location-outline'}
          keyboardType={'number-pad'}
        />
        <Input
          setInput={setRoomQuantity}
          placeholder={'Number of Rooms (1-9)'}
          iconName={'wallet-outline'}
          keyboardType={'number-pad'}
        />
        <Input
          setInput={setGuests}
          placeholder={'Number of Guests (1-9)'}
          iconName={'people-circle-outline'}
          keyboardType={'number-pad'}
        />
        <Input
          setInput={setDistance}
          placeholder={'Distance From Location (miles)'}
          iconName={'car-outline'}
          keyboardType={'number-pad'}
        />
        <StyledButton
          loading={false}
          title={'Search'}
          submitForm={handleRequest}
        />
      </View>
    );
}

const styles = StyleSheet.create({})
