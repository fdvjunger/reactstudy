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
            Tela inicial
          </Text>
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
  