import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import HotelsHome from './HotelsHome';
import HotelsList from './listHotels';

const Home = ({route}) => {
  const navigation = useNavigation();
  return <HotelsHome nav={navigation} route={route} />;
};

const List = ({route}) => {
  const navigation = useNavigation();
  return <HotelsList nav={navigation} route={route} />;
};

// const Home = () => {
//   const navigation = useNavigation();

//   return <MCQ nav={navigation} />;
// };

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
    </Stack.Navigator>
  );
}
