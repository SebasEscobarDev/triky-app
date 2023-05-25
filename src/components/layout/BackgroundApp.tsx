import React from 'react';
import {
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../theme/appTheme';

const BackgroundApp = () => {
  return (
    <View style={styles.loginbox}>
      <View style={styles.bg_circle_1}></View>
      <View style={styles.bg_circle_2}></View>
      <View style={styles.bg_circle_3}></View>
      <View style={styles.left_equis}>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
      </View>
      <View style={styles.right_equis}>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
        <View><Icon name="ios-close-sharp" size={100} color={'#1465ff'} /></View>
      </View>
    </View>
  );
};

export default BackgroundApp;
