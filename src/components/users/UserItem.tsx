import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';



const UserItem = ({user, handleUpdate} : any) => {

	// const navigation = useNavigation();
	return (
		<View style={[styles.trikyBox]}>
			<TouchableOpacity
				style={[styles.divTriky]}
				onPress={() => handleUpdate(user.id)}
			>
				<Text style={[styles.userDescription, styles.userState]}>Esperando Oponente!</Text>

				<Text style={styles.userDescription}>{user.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default UserItem;
