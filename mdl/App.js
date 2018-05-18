import React from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
    };

    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abrirModal(){
    let s= this.state;
    s.modalVisible = true;
    this.setState(s);
  }

  fecharModal(){
    let s= this.state;
    s.modalVisible = false;
    this.setState(s);
  }

  //animationType='slide' -> modal sobe e preenche o espaço definido para o modal
  //animationType='fade' -> aparece na tela "esfumaçando"
  //animationType='none' -> simplesmente aparece na tela

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.modalVisible} onRequestClose={()=>{}}>
          <View style={styles.modal}>
            <Text>TESTANDO</Text>
            <Button title="Fechar Modal" onPress={this.fecharModal}/>
          </View>
        </Modal>

        <Button title="Abrir Modal" onPress={this.abrirModal} />

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
    paddingTop: 30,
  },
  modal:{
    flex:1,
    backgroundColor:'#00FF00',
    alignItems: 'center',
    paddingTop: 40,
  },
});
