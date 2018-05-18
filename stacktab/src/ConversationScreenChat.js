import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';



export default class ConversationScreenChat extends Component{

  static navigationOptions = ({navigation}) => ({
    title:navigation.state.params.nome,
    tabBarLabel:"Conversas",
    tabBarIcon:({tintColor, focused}) => {
      if(focused){
        return(
          <Image source={require('../assets/img/chat_on.png')} style={{width:26, height:26}} />
        );
      }else{
        return(
          <Image source={require('../assets/img/chat_off.png')} style={{width:26, height:26}} />
        );
      }
      
    }
  });

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Tela de Conversa 
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