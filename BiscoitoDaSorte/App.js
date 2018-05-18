import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

class Btn extends Component {

  constructor(props){
    super(props);
    this.state ={};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth: 2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius: 25,      
      },
      botaoArea: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
      },
      botaoText:{
        color:props.color,
        fontSize: 14,
        fontWeight: 'bold',
      },
    });
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto:''};
    this.frases = ['frase 1','frase 2','frase 3','frase 4','frase 5','frase 6','frase 7','frase 8','frase 9','frase 10','frase 11','frase 12',];


    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito(){
    let s = this.state;
    let r = Math.floor(Math.random()*this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/img/cookie.png')}/>

        <Text style={styles.text} >"{this.state.texto}"</Text>

        <Btn  color="#B59619" name="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,   
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    fontSize:20,
    color:'#B59619',
    margin:30,
    fontStyle:'italic',
    textAlign:'center',
  }
});
