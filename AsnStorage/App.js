import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      nome:'',
    };

    AsyncStorage.getItem("nome").then((value) => {
      this.setState({nome:value});
    });

    this.setNome = this.setNome.bind(this);

  }

  setNome(nome){
    let s = this.state;
    s.nome = nome;
    this.setState(s);

    AsyncStorage.setItem("nome", nome);

  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.nome} onChangeText={(text) => this.setNome(text) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  input:{
    height:40,
    width:200,
    borderWidth:1,
    borderColor:'#CCCCCC',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
  },
});
