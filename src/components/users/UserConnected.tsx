import React, {useContext} from 'react';
import {
	FlatList,
	Text,
	View,
} from 'react-native';
// import { useStore } from '../../zustand/store';

import UserConItem from './UserConItem';
import myBootstrap from '../../theme/myBootstrap';
import { styles } from '../../theme/appTheme';
import { SocketContext } from '../../context/SocketContext';

const UserConnected = () => {

	const { usersOn } :any = useContext(SocketContext);

	const handleUpdate = async () =>{
		console.log('click user connected');
	};

	if ( !usersOn.length ) {
		return (
			<View style={[myBootstrap.fullHeight,styles.bgChargeColor]}>
				<Text style={styles.chargertxt}>No hay Usuarios Online...</Text>
			</View>
		);
	}

	const renderItem = ({item}:any)=>{
		return <UserConItem user={item} handleUpdate={handleUpdate} />;
	};

	return (
		<FlatList
			contentContainerStyle={styles.pb_135}
			style={[styles.flatListStyle]}
			data={usersOn}
			keyExtractor={(item) => item.id + ''}
			renderItem={renderItem}
		/>
	);
};

export default UserConnected;
