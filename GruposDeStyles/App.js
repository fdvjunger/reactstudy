import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.padrao}>
        <Text style={styles.azulG}>Texto 1</Text>
        <Text style={styles.vermelhoP}>Texto 2</Text>
        <Text style={[styles.azulG,styles.vermelhoP]}>Texto 3</Text>
        <Text style={[styles.vermelhoP,styles.azulG]}>Texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padrao:{
    paddingTop:20,
    backgroundColor:'#00ff00'
  },
  azulG:{
    color:'#0000ff',
    fontSize:30,
    textAlign:'center'
  },
  vermelhoP:{
    color:'#ff0000',
    fontSize:15
  }
});