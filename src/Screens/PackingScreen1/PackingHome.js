import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Button from '../../CommonComponents/fullLengthButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../CommonComponents/input';

export default function PackingHome() {
  const [items, setChangeItems] = useState([]);
  const [userText, setChangeUserText] = useState(null);
  addItem = i => {
    setChangeUserText(items.push({key: i}));
  };
  return (
    <View style={styling.vertContainer}>
      <Header title={'Packing'} />
      <Input
        setInput={setChangeUserText}
        placeholder={'Add an Item'}
        iconName={'add-circle-outline'}
        onEndEditing={() => {
          setChangeUserText('');
          addItem(userText);
        }}
        returnKey={'go'}
      />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.textStyle} alignSelf={'flex-start'}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'KohinoorTelugu-Regular',
  },
  box: {
    // borderWidth: 2,
    // borderColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#FD282A',
  },
});
