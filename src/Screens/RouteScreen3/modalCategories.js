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
  ScrollView
} from 'react-native';
import {styling} from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function modalCategories(props) {
    console.log("categories: " + props.categories)
  return (
    <View>
      <Modal
        animationType="slide"
        visible={props.modalVisible}
        transparent={false}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.closeModal}>
                    <Text style={styles.buttonText}>
                        Apply Categories
                    </Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <ScrollView>
                        
                    </ScrollView>
                </View>
            </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
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
});
