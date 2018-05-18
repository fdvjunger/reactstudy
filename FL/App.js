import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      flatData:[
        {key:"1",nome:'Fernando',idade:30},
        {key:"2",nome:'Pedro',idade:34},
        {key:"3",nome:'Paulo',idade:50},
        {key:"4",nome:'Ilarilariê',idade:70},
        {key:"5",nome:'Fe',idade:20},
        {key:"6",nome:'dinando',idade:30},
        {key:"7",nome:'Fernando',idade:30},
        {key:"8",nome:'Pedro',idade:34},
        {key:"9",nome:'Paulo',idade:50},
        {key:"10",nome:'Ilarilariê',idade:70},
        {key:"11",nome:'Fe',idade:20},
        {key:"12",nome:'dinando',idade:30},
        {key:"1",nome:'Fernando',idade:30},
        {key:"2",nome:'Pedro',idade:34},
        {key:"3",nome:'Paulo',idade:50},
        {key:"4",nome:'Ilarilariê',idade:70},
        {key:"5",nome:'Fe',idade:20},
        {key:"6",nome:'dinando',idade:30},
        {key:"7",nome:'Fernando',idade:30},
        {key:"8",nome:'Pedro',idade:34},
        {key:"9",nome:'Paulo',idade:50},
        {key:"10",nome:'Ilarilariê',idade:70},
        {key:"11",nome:'Fe',idade:20},
        {key:"12",nome:'dinando',idade:30}
      ]
    };
  }

  flatRender(item){
    return(
      <View style={styles.flatItem} >
        <Text style={styles.flatNome}> {item.nome}</Text>
        <Text style={styles.flatIdade}>{item.idade} anos </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,

  },
  flatItem:{
    height:50,
    padding:10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 1,
  },
  flatList:{  },
  flatNome:{
    fontSize: 18,
  },
  flatIdade:{
    fontSize: 14,
  },
});
