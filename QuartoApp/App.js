import React, {Component} from 'react';
import { Image, Text, View } from 'react-native';

class Janta extends Component{

  constructor(props){
    super(props);
    this.state={comida:props.comida};
    var comidas = ['Pizza','Lasanha','Sopa','Salada'];
    setInterval(()=>{
      this.setState(previousState => {
        var n = Math.floor(Math.random() * comidas.length)

        return{comida: comidas[n]}
      })
    },1000);
  }  
  
  render(){

    return(
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30, color:'red'}}>Hoje vc vai jantar</Text>
        <Text style={{textAlign:'center', fontSize:20}}>{this.state.comida}</Text>
      </View>
    );

  }

}

export default class Projeto extends Component {
  
  render() {
   
    return (

      <View style ={{paddingTop:20}}>
        <Janta comida='X-Burguer'/>
      </View>

    );

  }

}

