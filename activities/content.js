//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo';
//Import Misc Assets
import Gradient from '../assets/gradient'

//Project Activities
import HomeScreen from './Home/home';
import ScheduleScreen from './Schedule/schedule';
//import GradesScreen from './activities/Grades/grades';
import CalendarScreen from './Calendar/calendar';


export default class Content extends React.Component {
  render() {
    return (
      <Swiper containerStyle={styles.wrapper} showsButtons={false} showsPagination={false}>
        <View style={styles.slide}>
          <Gradient colorize="rgba(198, 195, 1,0.8)"/>
          <HomeScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(198, 195, 1,0.8)"/>
          <Text style={styles.text}>Grades</Text>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(198, 195, 1,0.8)"/>
          <ScheduleScreen/>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(198, 195, 1,0.8)"/>
          <Text style={styles.text}>Calendar</Text>
        </View>
        <View style={styles.slide}>
          <Gradient colorize="rgba(198, 195, 1,0.8)"/>
          <Text style={styles.text}>Planner</Text>
        </View>
      </Swiper>  
    );
  }
}

var Fullwidth = Dimensions.get('window').width;
var Fullheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3fa2d3',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})