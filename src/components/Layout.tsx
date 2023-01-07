import React from 'react';
import { View, StatusBar } from 'react-native';
import myBootstrap from '../theme/myBootstrap';

const Layout = ( { children } : any ) => {
	return (
		<View style={[myBootstrap.fullHeight, {backgroundColor:'#141a1f'}]}>
			<StatusBar backgroundColor="#360088"/>
			{children}
		</View>
	);
};

export default Layout;
