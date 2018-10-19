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

//Project Activities
import HomeScreen from './Home/home';
import ScheduleScreen from './Schedule/schedule';
//import GradesScreen from './activities/Grades/grades';
import CalendarScreen from './Calendar/calendar';

export default class Content extends React.Component {
  render() {
    return (
      <Swiper containerStyle={styles.wrapper} showsButtons={false} showsPagination={false}>
        <View style={styles.slide1}>
          <HomeScreen/>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Grades</Text>
        </View>
        <View style={styles.slide3}>
          <ScheduleScreen/>
        </View>
        <View style={styles.slide4}>
          <Text style={styles.text}>Calendar</Text>
        </View>
        <View style={styles.slide5}>
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
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7badd1',
    },
    slide5: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#68a1ca',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})