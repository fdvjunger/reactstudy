import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class TelaInicial extends Component{

  static navigationOptions = ({navigation}) => ({
    title:'Bem Vindo'
  });

  render(){
    return(
      <View style={styles.container}>
        <Text>Olá Mundo</Text>
      </View>
    );
  }
}

const Navegador = StackNavigator({
  Home:{ 
    screen:TelaInicial
   }
});

export default Navegador;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
