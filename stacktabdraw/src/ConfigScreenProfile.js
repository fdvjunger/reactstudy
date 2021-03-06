import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';



export default class ConfigScreenProfile extends Component{

  static navigationOptions = ({navigation}) => ({
    drawerLabel:'Config. do Profile',
    tabBarLabel:"Config",
    tabBarIcon:({tintColor, focused}) => {
      if(focused){
        return(
          <Image source={require('../assets/img/config_on.png')} style={{width:26, height:26}} />
        );
      }else{
        return(
          <Image source={require('../assets/img/config_off.png')} style={{width:26, height:26}} />
        );
      }  
    }
  });

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Tela de Configurações do perfil
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