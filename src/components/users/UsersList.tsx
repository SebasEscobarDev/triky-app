import React, { useState, useCallback } from 'react';
import {
	FlatList,
	RefreshControl,
	Text,
	View,
} from 'react-native';
import { useStore } from '../../zustand/store';

import UserItem from './UserItem';
import myBootstrap from '../../theme/myBootstrap';
import { styles } from '../../theme/appTheme';
import { User } from '../../models/user.model';

const UsersList = () => {

	const { getUsers, users, updateUser } = useStore();
	const [refreshing, setRefreshing] = useState(false);


	const handleUpdate = async (id:number, user:User) =>{
		await updateUser(id, user);
	};

	const onRefresh = useCallback( async() => {
    setRefreshing(true);
		await getUsers();
		setRefreshing(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	if ( !users.length ) {
		return (
			<View style={[myBootstrap.fullHeight,styles.bgChargeColor]}>
				<Text style={styles.chargertxt}>Cargando Salas...</Text>
			</View>
		);
	}

	const renderItem = ({item}:any)=>{
		return <UserItem user={item} handleUpdate={handleUpdate} />;
	};

	return (
		<FlatList
			contentContainerStyle={styles.pb_135}
			style={[styles.flatListStyle]}
			data={users}
			keyExtractor={(item) => item.id + ''}
			renderItem={renderItem}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					colors={['#6500ff']}
					onRefresh={onRefresh}
					progressBackgroundColor="#fff"
				/>
			}
		/>
	);
};

export default UsersList;
