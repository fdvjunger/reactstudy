import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import ConfigApp from './ConfigApp';
import ConfigScreenProfile from './ConfigScreenProfile';

const Navegador = DrawerNavigator({
	ConfigApp:{
		screen:ConfigApp
	},
	ConfigScreenProfile:{
		screen:ConfigScreenProfile
	}
});
export default Navegador;





