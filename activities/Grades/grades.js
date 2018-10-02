import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class GradesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#92BBD9'}}>
        <Text style={styles.text}>Grades</Text>
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