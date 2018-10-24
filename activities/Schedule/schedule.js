import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text}>Schedule</Text>
        </View>
        
    );
  }
}



const styles = {
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
}