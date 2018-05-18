import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default class ConversationScreen extends Component{

  static navigationOptions = ({navigation}) => ({
    title:navigation.state.params.nome
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