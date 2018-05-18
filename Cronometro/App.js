import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={n:0,btn:'GO'};
    this.timer = null;

    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);

  }

  start(){
    let s = this.state;

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      s.btn = "GO";
    }else{
      this.timer = setInterval(()=>{
        let s = this.state;
        s.n += 0.1;
        this.setState(s);
      },100);
      s.btn = "STOP";
    }
    this.setState(s);
  }

  reset(){
    let s = this.state;
    
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      s.btn = "GO";
    }

    
    s.n = 0;
    this.setState(s);
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/images/relogio.png')}/>
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start} >
            <Text style={styles.btnText}>{this.state.btn}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.reset} >
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor :'#2C1F30',
  },
  timer:{
    color:'#BAA07A',
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor:'transparent',
    marginTop:-160,
  },
  btnArea:{
    flexDirection: 'row',
    height:40,
    marginTop:80,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#886532',
    height:40,
    borderRadius: 15,
    margin:10,
  },
  btnText:{
    fontSize:17,
    color:'#FFF',
    fontWeight:'bold',
  }
});
