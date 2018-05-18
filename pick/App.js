import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      servico:0,
      servicos:[
        {nome:'Alinhamento',valor:30},
        {nome:'Balanceamento',valor:20},
        {nome:'Rodízio de Pneus', valor:50},
        {nome:'CheckUp', valor:10},
      ]
    };
  }

  render() {

    let servicosItems = this.state.servicos.map((v,k) => {
      return<Picker.Item key={k} value={k} label={v.nome}/>
    } );

    return (
      <View style={styles.container}>
        <Text style={styles.logo} >Autopeças José</Text>
        <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico:itemValue})} >
          {servicosItems}
        </Picker>
        <Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor:'#DDD',
  },
  logo:{
    fontSize:30,
    textAlign:'center',
    marginBottom: 20,
  },
  texto:{
    fontSize: 26,
    textAlign:'center',
    marginTop: 20,
  },
});
