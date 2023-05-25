import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';



const TrikyItem = ({triky, handleUpdate} : any) => {

	// const navigation = useNavigation();

	return (
		<View style={[styles.trikyBox]}>
			<TouchableOpacity
				style={[styles.divTriky]}
				onPress={() => handleUpdate(triky.id)}
			>
				<Text style={styles.id}>🟢</Text>
				{ !triky.player2 ? (<Text style={[styles.userDescription, styles.userState]}>Esperando Oponente!</Text>) : '' }

				<Text style={styles.userDescription}>{triky["p1.name"]}</Text>
				{ triky.player2 ? (
					<>
						<Text style={[styles.userDescription, styles.colorActive]}>VS</Text>
						<Text style={styles.userDescription}>{triky["p2.name"]}</Text>
					</>
				) : ''}
			</TouchableOpacity>
		</View>
	);
};

export default TrikyItem;
