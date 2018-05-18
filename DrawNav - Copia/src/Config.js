import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';



export default class ConfigScreen extends Component{

  static navigationOptions = ({navigation}) => ({
    drawerLabel:"Config",
    drawerIcon:({tintColor, focused}) => {
      if(focused){
        return(
          <Image source={require('../assets/img/home_on.png')} style={{width:20, height:20}} />
        );
      }else{
        return(
          <Image source={require('../assets/img/home_off.png')} style={{width:20, height:20}} />
        );
      }
      
    }
  });

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Tela de Configurações
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