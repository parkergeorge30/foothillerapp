import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';



export default class PlannerScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.Title}>{"\n"}Planner</Text>
      </View>
    );
  }
}










const styles = {
  Title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
}

