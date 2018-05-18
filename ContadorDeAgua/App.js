import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button } from 'react-native';

export default class App extends React.Component {



  constructor(props){
    super(props);
    this.state = {consumido:0, status:'RUIM',pct:'0%'};

    this.addCup = this.addCup.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    let s = this.state;
    s.consumido = 0;
    this.setState(s);
    this.atualizar();
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.floor((s.consumido/2000)*100);

    if(s.pct>= 100){
      s.status = "BOM"
    }else{
      s.status = "RUIM"
    }

    s.pct +="%";
  
    this.setState(s);
  }

  addCup(){
    let s = this.state;
    s.consumido +=200;
    this.setState(s);

    this.atualizar();

  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./src/img/waterbg.png')} style={styles.bgimage} >
          <View>
            <View style={styles.infoarea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>META</Text>
                <Text style={styles.areaDado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>CONSUMIDO</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>STATUS</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}</Text>
            </View>

            <View style={styles.btnArea}>
              <Button  title="+ 200ml" onPress={this.addCup}/>
              <Button  title="+ 200ml" onPress={this.reset}/>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,

  },
  bgimage: {
    flex:1,
    width:null,

  },
  infoarea:{
    flex:1,
    flexDirection: 'row',
    marginTop: 70,
  },
  area:{
    flex:1,
    alignItems: 'center',
  },
  areaTitulo:{
    color:'#45B2FC',

  },
  areaDado:{
    marginTop:5,
    color:'#2B4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pctArea:{
    marginTop:170,
    alignItems: 'center',
  },
  pctText:{
    fontSize:70,
    color:'#FFF',
    backgroundColor:'transparent',
  },
  btnArea:{
    marginTop:30,
    alignItems: 'center',
  },
});
