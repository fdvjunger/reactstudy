import React,{Component} from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';




export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      red:127,
      green:127,
      blue:127, 
    };

    
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider minimumTrackTintColor={"rgb("+this.state.red+",0,0)"} value={this.state.red} minimumValue={0} maximumValue={255} onValueChange={(v) => this.setState({red:v})} />
        <Text style={styles.texto}>Vermelho: {this.state.red.toFixed(0)}</Text>

        <Slider minimumTrackTintColor={"rgb(0,"+this.state.green+",0)"} value={this.state.green} minimumValue={0} maximumValue={255} onValueChange={(v) => this.setState({green:v})} />
        <Text style={styles.texto}>Verde: {this.state.green.toFixed(0)}</Text>

        <Slider minimumTrackTintColor={"rgb(0,0,"+this.state.blue+")"} value={this.state.blue} minimumValue={0} maximumValue={255} onValueChange={(v) => this.setState({blue:v})} />
        <Text style={styles.texto}>Azul: {this.state.blue.toFixed(0)}</Text>
        <View style={styles.result} >
          <View style={{backgroundColor:'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')',width:100,height:100}}  ></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  texto:{
    textAlign:'center',
    fontSize:25,
  },
  result:{
    paddingTop:50,
    alignItems: 'center',
  },  
});
