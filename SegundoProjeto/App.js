import React, { Component } from 'react';
import { View, Text, StyleSheet, Image }from 'react-native';


class Imagem extends Component {

  render() {

    let imagem = {
      uri:'https://alunos.phpdozeroaoprofissional.com.br/'+this.props.nome+'.jpg'
    };

    return(
      <Image source={imagem} style={styles.img}/>
    );

  }
}



export default class TerceiroProjeto extends Component{

  somar(n1,n2){
    return n1+n2;
  }

  

  render(){

    return(
      <View>
        
        <Text style={{fontSize:25, color:'red', margin:20}}>Olá Mundo!!</Text>


        <Imagem nome='albert'/>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto:{
    fontSize:30,
    margin:20
  },
  img:{
    width:300,
    height:300,
    margin:10
  }
});