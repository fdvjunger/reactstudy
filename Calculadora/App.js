import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Btn extends Component{

  constructor(props){
    super(props);
    this.state = {};

    let c =1;
    if(props.c){
      c = parseInt(props.c);
    }

    let bg = '#E0E0E0'
    if(props.bg){
      bg = props.bg;
    }

    this.styles = StyleSheet.create({
      area:{
        flex: c,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:bg,
      },
      text:{
        fontSize: 18,
        alignContent: 'center',
      }
    });
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text} >{this.props.n}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={result:'0'};

    this.btn = this.btn.bind(this);
  }

  btn(b) {
    let s = this.state;
    if( b == 'C'){
      s.result = '0'
    }else if(b=='='){
      s.result = eval(s.result);
    }else{
      if(s.result == '0'){
        s.result = b;
      }else{
        s.result +=b;
      }
    }

    this.setState(s);

  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.linha} >
          <Text style={styles.result} >{this.state.result}</Text>
        </View>
        <View style = {styles.linha} >
          <Btn c="3" n="C" bg = "#CCCCCC" onPress={()=>{this.btn("C")}} />
          <Btn n="/" bg = "#FD9526" onPress={()=>{this.btn("/")}} />
        </View>
        <View style = {styles.linha} >
          <Btn n="7"  onPress={()=>{this.btn("7")}} />
          <Btn n="8"  onPress={()=>{this.btn("8")}} />
          <Btn n="9"  onPress={()=>{this.btn("9")}} />
          <Btn n="*" bg = "#FD9526"  onPress={()=>{this.btn("*")}} />
        </View>
        <View style = {styles.linha} >
          <Btn n="4"  onPress={()=>{this.btn("4")}} />
          <Btn n="5"  onPress={()=>{this.btn("5")}} />
          <Btn n="6"  onPress={()=>{this.btn("6")}} />
          <Btn n="-" bg = "#FD9526"  onPress={()=>{this.btn("-")}} />
        </View>
        <View style = {styles.linha} >
          <Btn n="1"  onPress={()=>{this.btn("1")}} />
          <Btn n="2"  onPress={()=>{this.btn("2")}} />
          <Btn n="3"  onPress={()=>{this.btn("3")}} />
          <Btn n="+" bg = "#FD9526"  onPress={()=>{this.btn("+")}} />
        </View>
        <View style = {styles.linha} >
          <Btn c="2" n="0"  onPress={()=>{this.btn("0")}} />
          <Btn n="."  onPress={()=>{this.btn(",")}} />
          <Btn n="=" bg = "#FD9526"  onPress={()=>{this.btn("=")}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex:1,
  },
  linha:{
    flex:1,
    flexDirection: 'row',
  },
  result:{
    backgroundColor:'#000',
    color:'#FFF',
    fontSize:50,
    flex:1,
    textAlign:'right',
  },
});
