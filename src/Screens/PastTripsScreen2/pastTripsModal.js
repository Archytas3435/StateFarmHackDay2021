import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {styling} from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Input from '../../CommonComponents/input';
import Stars from 'react-native-stars';
import StyledButton from '../../CommonComponents/styledButton';

export default function modalCategories(props) {
    const [tripName, setChangeTripName] = useState(null);
    const [dest, setChangeDest] = useState(null);
    const [dur, setChangeDur] = useState(null);
    const [expenses, setChangeExpenses] = useState(null);
    const[stars, setStars] = useState(0);
    closeModal = () => {
         props.modalVisible = false;
    }
  return (
    <View>
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        transparent={true}>
        <View style={styles.container1}>
          <View style={styles.container}>
            <Input
              setInput={setChangeTripName}
              placeholder={'Trip Name'}
              iconName={'bookmark-outline'}
              returnKey={'go'}
            />
            <Input
              setInput={setChangeDest}
              placeholder={'Destination'}
              iconName={'locate-outline'}
            />
            <Input
              setInput={setChangeDur}
              placeholder={'Duration'}
              iconName={'time-outline'}
            />
            <Input
              setInput={setChangeExpenses}
              placeholder={'Expenses'}
              iconName={'cash-outline'}
            />
            <Stars
              default={1}
              spacing={8}
              count={10}
              update={val => {
                setStars(val);
              }}
              starSize={30}
              fullStar={<Icon name="star" color={'#f7d825'} size={23} />}
              emptyStar={
                <Icon name="star-outline" color={'#f7d825'} size={23} />
              }
            />
            <StyledButton
              loading={false}
              title={'Add Trip'}
              submitForm={closeModal}
            //   loading={loading}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height * 0.8,
  },
  container: {
    width: Dimensions.get('window').width * 0.95,
    // height: Dimensions.get('window').height * 0.6,
    alignItems: 'center',
    backgroundColor: '#525252',
    borderRadius: 20,
    paddingVertical: 20,
  },
  container2: {
    alignItems: 'center',
  },
  closeModal: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.07,
    backgroundColor: '#FD282A',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
