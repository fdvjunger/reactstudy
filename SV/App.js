import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <ScrollView >
            <View style={styles.square1}></View>
            <View style={styles.square2}></View>
            <View style={styles.square1}></View>
            <View style={styles.square2}></View>
        </ScrollView>
        <View style={styles.header}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  square1:{
    backgroundColor:'red',
    height:200,
  },
  square2:{
    backgroundColor:'green',
    height:500,
  },
  header:{
    backgroundColor:'#0000FF',
    height:100,
  },
});
