import React, {Component} from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={resultado:'', inputTexto:'', texto:'Fernando'};
    
    this.apertouBotao = this.apertouBotao.bind(this);
    this.apertouBotaoAlert = this.apertouBotaoAlert.bind(this);
  }

  mudarTexto(t){
    let s=this.state;
    if(t.length > 0){
    s.texto = 'Olá, '+t;
    }else{
      s.texto = '';
    }
    this.setState(s);
  }

  apertouBotao(){
    let s = this.state;

    if(s.inputTexto == s.texto){
      s.resultado = "Acertou!!";
    }else{
      s.resultado = "Errou";
    }

    this.setState(s);
  }

  apertouBotaoAlert(){
    let s = this.state;

    if(s.inputTexto == s.texto){
      s.resultado = "Acertou!!";
    }else{
      s.resultado = "Errou!!!";
    }

    Alert.alert(s.resultado);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome" onChangeText={(inputTexto) => {this.setState({inputTexto})}} />
        <Button title="Aperte em mim" onPress={this.apertouBotaoAlert} />

        <Text style={styles.texto}>{this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#000000',
    borderRadius:5,
    margin:10,
    padding:10,
  },
  texto: {
    fontSize:20,
    textAlign:'center',
  },
});
