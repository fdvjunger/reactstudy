import React, {Component} from 'react';
import { DrawerNavigator } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';
import ConfigScreen from './src/Config';


const Navegador = DrawerNavigator({
  Home:{
    screen:TelaInicial
  },
  Conversa: {
    screen:ConversationScreen
  },
  Config:{
    screen:ConfigScreen
  }
},{
  tabBarOptions: {
    showIcon: true
  },
});
export default Navegador;


