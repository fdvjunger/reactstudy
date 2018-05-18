import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class TelaInicial extends Component{

    static navigationOptions = ({navigation}) => ({
      title:'Chat'
    });
  
    constructor(props){
      super(props);
      this.state = {
        nome:''
      }
  
      this.conversar = this.conversar.bind(this);
    }
  
    conversar(){
      this.props.navigation.navigate('Conversa',{
        nome:this.state.nome
      });
    }
  
    render(){
      return (
        <View style={styles.container}>
          <Text>
            Olá Mundo
          </Text>
  
          <TextInput style={{height:40, borderWidth:1, borderColor:'#000', width:200}} placeholder="Qual nome?" onChangeText={(nome) => this.setState({nome})} />
  
          <Button title="Conversar" onPress={this.conversar} />
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
  