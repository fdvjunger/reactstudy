import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valor:false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch thumbTintColor="#0000FF" onTintColor="#FF0000" value ={this.state.valor} onValueChange={(v)=>this.setState({valor:v})} />

        <Text>{this.state.valor.toString()}</Text>
        <Text>{(this.state.valor)?"Selected":"Not Select"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    
  },
});
