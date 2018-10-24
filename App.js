//React Imports
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Content from './activities/content'
/*



Do Not Touch This File


*/


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.default}>
        <Content/>
        <View style={styles.navBar}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  default: {
    flex:1
  },
  navBar:{ 
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    bottom: 0,
  }
})