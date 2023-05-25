import React, { useState, useCallback } from 'react';
import {
	FlatList,
	RefreshControl,
	Text,
	View,
} from 'react-native';
import { useStore } from '../../zustand/store';

import TrikyItem from './TrikyItem';
import myBootstrap from '../../theme/myBootstrap';
import { styles } from '../../theme/appTheme';
import { Triky } from '../../models/triky.model';

const TrikysList = () => {

	const { getTrikys, trikys, updateTriky } = useStore();
	const [refreshing, setRefreshing] = useState(false);


	const handleUpdate = async (id:number, triky:Triky) =>{
		await updateTriky(id, triky);
	};

	const onRefresh = useCallback( async() => {
    setRefreshing(true);
		await getTrikys();
		setRefreshing(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	if ( !trikys.length ) {
		return (
			<View style={[myBootstrap.fullHeight,styles.bgChargeColor]}>
				<Text style={styles.chargertxt}>Selecciona tu oponente e inicia el desafio.</Text>
			</View>
		);
	}

	const renderItem = ({item}:any)=>{
		return <TrikyItem triky={item} handleUpdate={handleUpdate} />;
	};

	return (
		<FlatList
			contentContainerStyle={styles.pb_135}
			style={[styles.flatListStyle]}
			data={trikys}
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

export default TrikysList;
