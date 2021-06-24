import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';
import {styling} from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default function modalMap(props) {
    const startAddress = props.startAddress
    const endAddress = props.endAddress
    format_str = (s) => {
        return s.replaceAll(" ", "%20");
    }
    API_KEY = "5b3ce3597851110001cf624844cd20c3b5664414b9c2edc1eb4fce19"
    const [start_lat, setChangeStartLat] = useState(null);
    const [start_lon, setChangeStartLon] = useState(null);
    const [end_lat, setChangeEndLat] = useState(null);
    const [end_lon, setChangeEndLon] = useState(null);
    get_lat_lon = (s1, s2) => {
       const axios = require('axios');
       const URL1 = `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${format_str(s1)}`
       axios
         .get(URL1)
         .then(function (response) {
           setChangeStartLat((response.data.bbox[1]+response.data.bbox[3])/2);
           setChangeStartLon((response.data.bbox[0]+response.data.bbox[2])/2);
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .then(function () {
           // always executed
         });
         const URL2 = `https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${format_str(s2)}`
       axios
         .get(URL2)
         .then(function (response) {
           setChangeEndLat((response.data.bbox[1]+response.data.bbox[3])/2);
           setChangeEndLon((response.data.bbox[0]+response.data.bbox[2])/2);
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .then(function () {
           // always executed
         });
    }
    const [route, setChangeRoute] = useState(null);
    get_route = (s1, s2) => {
        const axios = require('axios');
        get_lat_lon(s1, s2);
        let headers =  {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
            'Authorization': API_KEY,
            'Content-Type': 'application/json; charset=utf-8'
        }
        axios.post(
            'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
            {"coordinates":[[start_lon,start_lat],[end_lon,end_lat]]},
            {headers: headers}
        )
        .then(function (response) {
            //console.log(JSON.parse(response.request._response).features[0].geometry.coordinates);
            setChangeRoute(JSON.parse(response.request._response).features[0].geometry.coordinates);
            //console.log(route)
        })
        .catch(function (error) {console.log(error)})
        .then(function() {});
    }
    const [pois, setChangePois] = useState(null);
    get_pois = (s1, s2) => {
        const axios = require('axios');
        get_lat_lon(s1, s2);
        setTimeout(() => {
            console.log('hey')
        }, (4000))
        get_route(s1, s2);
        setTimeout(() => {
            console.log('hey')
        }, (4000))        
        let body = {
            "request": "pois",
            "geometry":{
                "geojson": {
                    "type": "LineString",
                    "coordinates": route
                },
                "buffer": 2000
            }
        }
        let headers = {
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
            'Authorization': API_KEY,
            'Content-Type': 'application/json; charset=utf-8'
        }
        axios.post(
            'https://api.openrouteservice.org/pois',
            body,
            {headers: headers}
        )
        .then(function (response) {
            setChangePois(JSON.parse(response.request._response)[0].features)
        })
        .catch(function (error) {console.log(error)})
        .then(function() {});
    }
    iterate_through_pois = (pois) => {
      console.log(pois);
      let a = [];
      for (i = 0; i < pois.length; i += 1) {
        try {
          a.push(pois[i].properties.category_ids[Object.keys(pois[i].properties.category_ids)[0]].category_name);
        }
        catch {}
      }
      return Array.from(new Set(a));
    }
    return (
      <View>
        <Modal animationType="slide" visible={props.modalVisible}>
          <View style={[styling.vertContainer, {justifyContent: 'flex-end'}]}>
            <View style={styles.mapContainer}>
              <MapView
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.map}
              />
              <TouchableOpacity
                style={styles.overlay}
                onPress={() => {
                //   props.close(false);
                get_pois("2320 Lynbridge Dr, Plano, TX", "3800 N Central Expy, Plano, TX");
                setTimeout(() => {
                  console.log('hey')
              }, (4000))
                console.log(iterate_through_pois(pois));
                }}>
                <Icon
                  name="close-outline"
                  color={'black'}
                  size={50}
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
}


const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
      width: Dimensions.get('window').width * 1,
      height: Dimensions.get('window').height * 1,
      borderWidth: 1,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    overlay: {
      top: Dimensions.get('window').height * .03,
      position: 'absolute',
      alignSelf: 'center',
    },
  });
