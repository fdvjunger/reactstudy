import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {textoTop:'TOP',textoBottom:'BOTTOM'};

    this.write = this.write.bind(this);
  }

  changeVogal(textV){
    let newText = textV.toLowerCase();

      newText = newText.replace(/(a|e|i|o|u)/g,'i');
      newText = newText.replace(/(á|à|â|ã)/g,'i');
      newText = newText.replace(/(é|è|ê)/g,'i');
      newText = newText.replace(/(í|ì|î)/g,'i');
      newText = newText.replace(/(ó|ò|õ|ô)/g,'i');
      newText = newText.replace(/(ú|ù|û)/g,'i');
      
    return newText;
  }

  write(t){
    let s = this.state;
    s.textoTop=t;
    s.textoBottom = this.changeVogal(t);
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.head}> Criador de Miimi</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput  style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.write}/>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.top]} >{this.state.textoTop.toUpperCase()}</Text>
          <Image style={styles.guri} source={require('./src/img/mimimi.jpg')}/>
          <Text style={[styles.texto, styles.bottom]} >{this.state.textoBottom.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    paddingTop:30,
    flex:1,
    flexDirection:'column',
    alignItems:'center',    
  },
  head: {
    fontSize:30,
    color:'#FFF',
  },
  input:{
    borderWidth:1,
    borderColor:'#999',
    backgroundColor:'#eee',
    color:'#000',
    height:40,
    margin:20,
    padding:10,
    borderRadius:10,
  },
  inputArea:{
    alignSelf:'stretch',
  },
  area:{
    width:300,
    height:300,
    marginTop:10,
  },
  guri:{
    marginTop:-70,
    width:300,
    height:300,
    zIndex:0,
  },
  texto:{
    fontSize:25,
    color:'#FFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight: 'bold',
    textAlign:'center',
    height:70,
    zIndex:1
  },
  top:{},
  bottom:{
    marginTop:-70,

  },
});
