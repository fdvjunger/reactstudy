import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listData:[
        {title:'B',data:[
          {key:'1',nome:'Bussunda', idade:90 },
        ]},
        {title:'C',data:[
          {key:'2', nome:'Cassilds', idade:30},
          {key:'3', nome:'Carai', idade:35},
          {key:'4', nome:'Cerveja', idade:55},
        ]},
        {title:'D',data:[
          {key:'5', nome:'Dassilds', idade:30},
          {key:'6', nome:'Darai', idade:35},
          {key:'7', nome:'Derveja', idade:55},
        ]},
        {title:'E',data:[
          {key:'8', nome:'Essilds', idade:30},
          {key:'9', nome:'Earai', idade:35},
          {key:'10', nome:'Eerveja', idade:55},
        ]},
      ]
    };
  }

  listSectionRender(section){
    return(
      <Text style={styles.section} >{section.title}</Text>
    );
  }

  listRender(item){
    return(
      <View style={styles.item}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.idade}>{item.idade} Anos</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList 
          stickySectionHeadersEnabled={true} 
          sections={this.state.listData} 
          renderItem={({item})=>this.listRender(item)} 
          renderSectionHeader={({section})=>this.listSectionRender(section)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  item:{
    height:60,
    padding:10,
  },
  nome:{
    fontSize: 18,
  },
  idade:{
    fontSize:14,
  },
  section:{
    fontSize:14,
    backgroundColor:'#CCCCCC',
    padding:10,
  },
});
