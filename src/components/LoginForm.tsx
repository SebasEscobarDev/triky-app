import React, {useEffect, useState, useContext} from 'react';
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

import BackgroundApp from './layout/BackgroundApp';

import { loginUser } from '../api/users';

import AsyncStorage from '@react-native-async-storage/async-storage';
import myBootstrap from '../theme/myBootstrap';

import { getDevice } from 'react-native-device-info';
import { SocketContext } from '../context/SocketContext';

import socket from '../socket';




const LoginForm = () => {

	const { setUsersOn } :any = useContext(SocketContext);

  useEffect(()=>{
		socket.on('newUserResponse', (data) => setUsersOn(data));

		return () => {
      socket.off('newUserResponse');
    };
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// console.log(socket.socket);

	const navigation = useNavigation();
	const isFocused = useIsFocused();

	/* ESTADOS LOCALES PARA ALMACENAR TEMPORALMENTE EL USUARIO A LOGUEAR */
	const [logUser, setLogUser] = useState({
		email: 'sebas@gmail.com',
		password: 'qaws12pj-22',
	});
	const handleChangeUser = (name:string, value:string) => setLogUser({...logUser, [name]: value });

	/*ALERT */
	const LoginError = () =>
		Alert.alert(
			'Error',
			'Datos de Usuario Incorrectos.',
			[
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			]
		);
	/* /END ALERT */

	const handleSubmitUser =  async ()=>{
		try {
			const response = await loginUser(logUser);
			if ( response.token ){
				try {
					await AsyncStorage.setItem('@t_token', response.token);
					await AsyncStorage.setItem('@t_userID', response.id + '');
				} catch (err){
					console.log('error put storage user');
					console.log(err);
				}
				//sends the username and socket ID to the Node.js server
				try {
					let userEnterLogin = {
						...response,
						socketID: socket.id,
					};
					socket.emit('newUser', userEnterLogin);
				} catch (err){
					console.log('error push user Socket');
					console.log(err);
				}
				navigation.navigate('HomeScreen');
			} else {
				LoginError();
			}
		} catch (err){
			console.log('error login user');
			console.log(err);
		}
	};
	const [passwordSecured1, setPasswordSecured1] = useState(true);


	useEffect(()=>{
		setPasswordSecured1(true);
		if ( isFocused ){
			(async()=>{
				const userID = await AsyncStorage.getItem('@t_userID');
				if ( Number(userID) > 0 ){
					try {
						socket.emit('logout');
					} catch (err){
						console.log('error disconnect user Socket');
						console.log(err);
					}
				}

				try {
					await AsyncStorage.setItem('@t_token', '0');
					await AsyncStorage.setItem('@t_userID', '0');
				} catch (err){
					console.log('error set token, and ID user');
					console.log(err);
				}

				let device = await getDevice();
				if ( device ){
					if ( device.includes('emulator') ){
						setLogUser({
							email: 'cata@gmail.com',
							password: 'qaws12pj-22',
						});
					}
				}
			})();
		}
		return () => {
			socket.off('logout');
		};
	}, [isFocused] );

	return (
		<KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
			<BackgroundApp />
			<ScrollView>
				<View style={[myBootstrap.rowCenter]}>
					<View style={[myBootstrap.col_11, styles.bg_morphism]}>
						<View>
							<Text style={styles.title}>King Of Triky 👑</Text>
							<View style={styles.inputView}>
								<Icon style={styles.roundIcon} name="person-circle" size={25} color={'#fff'} />
								<TextInput style={styles.textInput}
									placeholder="Correo electrónico"
									placeholderTextColor="#c0c0c0"
									autoCorrect={false}
									keyboardType="email-address"
									autoCapitalize="none"
									onChangeText={(text) => handleChangeUser('email', text)}
									value={logUser.email}
								/>
							</View>
							<View style={styles.inputView}>
								<Icon style={styles.roundIcon} name="lock-closed" size={25} color={'#fff'} />
								<TextInput style={styles.textInput} placeholder={'Contraseña'} placeholderTextColor="#c0c0c0" secureTextEntry={passwordSecured1} textContentType={'password'}
									onChangeText={(text) => handleChangeUser('password', text)}
									value={logUser.password}
								/>
								<TouchableOpacity style={styles.eye}
									onPress={()=>{
										setPasswordSecured1(!passwordSecured1);
									}}
								>
									<Icon style={styles.roundIcon} name="eye" size={25} color={'#fff'} />
								</TouchableOpacity>
							</View>
						</View>
						<View>
							<TouchableOpacity style={[styles.btnPrimary]}
									onPress={handleSubmitUser}
								>
								<Text style={styles.txtPrimary}>Iniciar Session</Text><Icon style={styles.iconBtn} name="log-in-outline" size={30} color={'#fff'} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default LoginForm;
