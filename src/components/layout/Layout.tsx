import React from 'react';
import { View, StatusBar } from 'react-native';
import myBootstrap from '../../theme/myBootstrap';
import { styles } from '../../theme/appTheme';
import BackgroundApp from './BackgroundApp';


const Layout = ( { children } : any ) => {
	return (
		<View style={[myBootstrap.fullHeight, styles.bgPrimaryColor]}>
			{/* <StatusBar backgroundColor="#40b700"/> */}
			<StatusBar backgroundColor="#1465ff"/>
			{children}
		</View>
	);
};

export default Layout;
