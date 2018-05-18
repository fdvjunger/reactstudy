import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


export default class TelaInicial extends Component{

    static navigationOptions = ({navigation}) => ({
      tabBarLabel:"Home",
      tabBarIcon:({tintColor, focused}) => {
        if(focused){
          return(
            <Image source={require('../assets/img/home_on.png')} style={{width:26, height:26}} />
          );
        }else{
          return(
            <Image source={require('../assets/img/home_off.png')} style={{width:26, height:26}} />
          );
        }
        
      }
    });
  
    constructor(props){
      super(props);
      this.state = {
        nome:''
      }
  
      
    }
  
   
  
    render(){
      return (
        <View style={styles.container}>
          <Text>
            Olá Mundo
          </Text>
  
          <TextInput style={{height:40, borderWidth:1, borderColor:'#000', width:200}} placeholder="Qual nome?" onChangeText={(nome) => this.setState({nome})} />
  
          
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
      paddingTop:30,
    },
  });
  