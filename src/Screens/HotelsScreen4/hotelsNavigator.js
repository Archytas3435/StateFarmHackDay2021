import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import HotelsHome from './HotelsHome';
import HotelsList from './listHotels';
import Individual from './individualHotel';

const Home = ({route}) => {
  const navigation = useNavigation();
  return <HotelsHome nav={navigation} route={route} />;
};

const List = ({route}) => {
  const navigation = useNavigation();
  return <HotelsList nav={navigation} route={route} />;
};

const Info = ({route}) => {
  const navigation = useNavigation();
  return <Individual nav={navigation} route={route} />;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}
