import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Home from '../home';
import Packing from '../Screens/PackingScreen1/PackingHome';
import Hotels from '../Screens/HotelsScreen4/hotelsNavigator';
import Profile from '../Screens/ProfileScreen5/ProfileHome';
import PastTrips from '../Screens/PastTripsScreen2/PastTrips';
import Route from '../Screens/RouteScreen3/RouteHome'

function RouteScreen() {
  return <Route />;
}

function PackingScreen() {
  return <Packing />;
}

function PastTripsScreen() {
  return <PastTrips />;
}

function ProfileScreen() {
  return <Profile />;
}

function HotelsScreen() {
  return <Hotels />;
}

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Route'}
        tabBarOptions={{
          activeTintColor: '#FD282A',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: '#1a1a1a',
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Packing"
          component={PackingScreen}
          options={{
            tabBarColor: '#1a1a1a',
            tabBarIcon: ({color}) => (
              <Icon
                name="list-circle-outline"
                color={color}
                size={26}
                style={{marginTop: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Past Trips"
          component={PastTripsScreen}
          options={{
            tabBarColor: '#1a1a1a',
            tabBarIcon: ({color}) => (
              <Icon
                name="copy-outline"
                color={color}
                size={26}
                style={{marginTop: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Route"
          component={RouteScreen}
          options={{
            tabBarColor: '#1a1a1a',
            tabBarIcon: ({color}) => (
              <Icon
                name="map-outline"
                color={color}
                size={26}
                style={{marginTop: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hotels"
          component={HotelsScreen}
          options={{
            tabBarColor: '#1a1a1a',
            tabBarIcon: ({color}) => (
              <Icon
                name="bed-outline"
                color={color}
                size={26}
                style={{marginTop: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ProfileScreen}
          options={{
            tabBarColor: '#1a1a1a',
            tabBarIcon: ({color}) => (
              <Icon
                name="person-circle-outline"
                color={color}
                size={26}
                style={{marginTop: 10}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

export default function App(props) {
  return <MyTabs />;
}
