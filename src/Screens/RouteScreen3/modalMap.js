import React, { useState, useEffect } from 'react'
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
import { Marker } from 'react-native-maps';
import ModalCategories from './modalCategories';
import { APIData } from './data';

export default function modalMap(props) {
    const startAddress = props.startAddress;
    const endAddress = props.endAddress;
    const[startGetLatLon, setStart] = useState(true);
        API_KEY = '5b3ce3597851110001cf624844cd20c3b5664414b9c2edc1eb4fce19';
        const [start_lat, setChangeStartLat] = useState(null);
        const [start_lon, setChangeStartLon] = useState(null);
        const [end_lat, setChangeEndLat] = useState(null);
        const [end_lon, setChangeEndLon] = useState(null);
        const [modal, setModal] = useState(false);
        const [route, setChangeRoute] = useState(null);
        const [pois, setChangePois] = useState(null);
        const [categories,setChangeCategories] = useState(null);
        const [poisJson,setChangePoisJson] = useState(null);
        const[result, setResult] = useState([]);
    format_str = (s) => {
        return s.replaceAll(" ", "%20");
    }
    useEffect(() => {
        if(props.startRequest && startGetLatLon){
          handleCategories();
          console.log('got in if');
            setStart(false);
            setTimeout(() => {
            get_lat_lon(
              '2320 Lynbridge Dr, Plano, TX',
              '15250 Rolater Rd, Frisco, TX',
            );
            }, 2000);
            console.log(start_lat);
            console.log(start_lon);
        }
    })

    get_lat_lon = (s1, s2) => {
        console.log('start API 4');
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
    get_route = () => {
        console.log('start API 2');
        const axios = require('axios');
        //get_lat_lon(s1, s2);
        console.log("start API 3")
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
        .catch(function (error) {console.log("API2"+error);})
        .then(function() {});
    }

    get_pois = () => {
        console.log('start API 1');
        const axios = require('axios');
        
        setTimeout(() => {
               
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
        .catch(function (error) {console.log("API3"+error);})
        .then(function() {});
      }, 3000) 
      
  }

    iterate_through_pois = () => {

      setTimeout(() => {
        //console.log(pois);
      let a = [];
      for (i = 0; i < pois.length; i += 1) {
        try {
          a.push(pois[i].properties.category_ids[Object.keys(pois[i].properties.category_ids)[0]].category_name.replaceAll('_', ' '));
        }
        catch {}
      }
      setChangeCategories(Array.from(new Set(a)));
    }, 2000)
    setTimeout(() => {
    let b = {};
    for (i = 0; i < categories.length; i += 1) {
      b[categories[i]] = [];
    }
    for (i = 0; i < pois.length; i += 1) {
      try {
         b[pois[i].properties.category_ids[Object.keys(pois[i].properties.category_ids)[0]].category_name.replaceAll('_', ' ')].push([pois[i].geometry.coordinates[1], pois[i].geometry.coordinates[0], pois[i].properties.osm_tags.name, pois[i].properties.category_ids[Object.keys(pois[i].properties.category_ids)[0]].category_name.replaceAll('_', ' ')]);
       }
       catch {}
    }
setChangePoisJson(b);
  }, 2000)
    }
    handleCategories = () => {
      var result = [];
        for (var i in APIData) {
          for (var j = 0; j < APIData[i].length; j += 1)
            result.push(APIData[i][j]);
        }
        setResult(result);
        
    }
    return (
      <View>
        <Modal animationType="slide" visible={props.modalVisible}>
          <View style={[styling.vertContainer, {justifyContent: 'flex-end'}]}>
            <View style={styles.mapContainer}>
              <MapView
                region={{
                  latitude: start_lat,
                  longitude: start_lon,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.map}>
                {result.map((marker, index) => (
                  <Marker
                    key={index}
                    coordinate={{latitude: marker[0], longitude: marker[1]}}
                    title={marker[2]}
                    description={marker[3]}
                  />
                ))}
              </MapView>
              <TouchableOpacity
                style={styles.overlay}
                onPress={() => {
                     props.close(false);
                  //get_route();
                  //console.log(route);
                  //get_pois();
                  //iterate_through_pois();
                  //setTimeout(() => {
                  //  console.log(poisJson);
                  //}, 2000);
                  handleCategories();
                }}>
                <Icon
                  name="close-outline"
                  color={'black'}
                  size={50}
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rightButton}
                onPress={() => {
                  setModal(true);
                }}>
                <Icon
                  name="filter-outline"
                  color={'black'}
                  size={40}
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
      left: Dimensions.get('window').width * 0.05
    },
    rightButton: {
      top: Dimensions.get('window').height * .035,
      position: 'absolute',
      right: Dimensions.get('window').width * 0.06
    }
  });
