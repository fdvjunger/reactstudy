import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      statusStyle:'dark-content',
      bgColor:'#FFFFFF'
    };
    this.alternar = this.alternar.bind(this);
  }

  alternar(){
    let s =this.state;

    if(s.statusStyle == 'dark-content'){
      s.statusStyle = 'light-content';
      s.bgColor = '#000';
    }else{
      s.statusStyle = 'dark-content';
      s.bgColor = '#FFF';
    }

    this.setState(s);
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor:this.state.bgColor}]}>
        <StatusBar barStyle={this.state.statusStyle} />
        <Button title="Alternar"  onPress={this.alternar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
