import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styling} from '../../styles/styles';
import Header from '../../CommonComponents/header';
import Input from '../../CommonComponents/input';
import fullLengthButton from '../../CommonComponents/fullLengthButton';
import StyledButton from '../../CommonComponents/styledButton';
import Modal from './modalMap';

export default function RouteHome() {
  const [startAddress, onChangeText1] = useState(null);
  const [endAddress, onChangeText2] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [handlePress, startHandlePress] = useState(false);
  handlePressFunction = () => {
    startHandlePress(true);
    setTimeout(() => {
      setModalVisible(true);
    }, 6000 )
  }
  return (
    <View
      style={[
        styling.container,
        {
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingBottom: Dimensions.get('window').height * 0.01,
        },
      ]}>
      <Modal
        modalVisible={modalVisible}
        close={setModalVisible}
        startAddress={startAddress}
        endAddress={endAddress}
        startRequest={handlePress}
      />
      <Header title={'Routing'}></Header>
      <Input
        setInput={onChangeText1}
        placeholder={'Start Address'}
        iconName={'navigate-circle-outline'}
      />
      <Input
        setInput={onChangeText2}
        placeholder={'End Address'}
        iconName={'locate-outline'}
      />
      <StyledButton loading={false} title={'Go'} submitForm={handlePressFunction} />
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
    top: Dimensions.get('window').height * 0.03,
    position: 'absolute',
    alignSelf: 'center',
  },
});
