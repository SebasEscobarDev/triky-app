import React, {useEffect, useState} from 'react';
import {
	Button,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	ImageBackground,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { saveMaster, loginMaster, getMasterLogin } from '../api/masters'
import { SvgXml } from 'react-native-svg';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

import { loginsvg } from './assets/svgs/login';

const LoginForm = () => {

	const navigation = useNavigation();

	/*##############################################################################*/
	/* ESTADOS LOCALES PARA ALMACENAR TEMPORALMENTE EL USUARIO A LOGUEAR */
	/*#############################################################################*/
	const [logMaster, setLogMaster] = useState({
		phone: '3148406835',
		password: 'qaws12pj-22',
	})
	const handleChangeUs = (name:string, value:string) => setLogMaster({...logMaster, [name]: value });

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

	const handleSubmitMaster =  async ()=>{
		// const response = await loginMaster(logMaster);
		// if( response.token ){
		// 	if( response.master.rol_id == 1 ){
		// 		navigation.navigate('DrawerNavigator', { screen: 'RolesHomeScreen' });
		// 	}else{
		// 		navigation.navigate('TabNavigator', { screen: 'MastersHomeScreen' });
		// 	}
		// }else{
		// 	LoginError()
		// }
		navigation.navigate('TabNavigator', { screen: 'TrikyScreen' });

	};
	const [passwordSecured1, setPasswordSecured1] = useState(true);

	//funcion inicial que cuando cambie isFocuse se ejecuta de nuevo  esta funcion
	useEffect(() => {
		setPasswordSecured1(true);
	}, []);

	return (
		<View>
			<ImageBackground source={require('./assets/bg-login.jpg')} style={styles.image} blurRadius={0}>
				<View style={styles.boxMorphism}>
					<View style={[styles.tabsLogin, {marginBottom: 10}]}>
						<TouchableOpacity style={[styles.buttonTab, styles.active]}>
							<Text style={styles.touchableText}>Inicio de sesión de usuarios</Text>
						</TouchableOpacity>
					</View>
					<View>
						<View style={styles.inputView}>
							<Icon style={styles.roundIcon} name="call-outline" size={25} color={'#00ea82'} />
							<TextInput style={styles.textInput}
								placeholder="Celular"
								placeholderTextColor="#c0c0c0"
								autoCorrect={false}
								keyboardType="numeric"
								autoCapitalize="none"
								onChangeText={(text) => handleChangeUs('phone', text)}
								value={logMaster.phone}
							/>
						</View>
						<View style={styles.inputView}>
							<Icon style={styles.roundIcon} name="document-text-outline" size={25} color={'#00ea82'} />
							<TextInput style={styles.textInput} placeholder={'Contraseña'} placeholderTextColor="#c0c0c0" secureTextEntry={passwordSecured1} textContentType={'password'}
								onChangeText={(text) => handleChangeUs('password', text)}
								value={logMaster.password}
							/> 
							<TouchableOpacity style={{ position: 'absolute', right: 10 }}
								onPress={()=>{
									setPasswordSecured1(!passwordSecured1);
								}}
							>
								<Icon style={styles.roundIcon} name="eye" size={20} color={'#6500ff'} />
							</TouchableOpacity>
						</View>
					</View>
					<View>
						<Button
							title="Iniciar Session"
							color="#6500ff"
							onPress={handleSubmitMaster}
						/>
					</View>
				</View>
				<View style={styles.svglogin}>
          <SvgXml xml={loginsvg} />
				</View>
			</ImageBackground>
		</View>
	);
};

export default LoginForm;
