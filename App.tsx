/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, CreateAccountScreen, HomeScreen, TrikyScreen, PerfilScreen, RankingScreen, UserConnectedScreen } from './src/screens';
import { useStore } from './src/zustand/store';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SocketProvider } from './src/context/SocketContext';
// import { styles } from './src/theme/appTheme';


const Stack = createNativeStackNavigator();

function App() {

  const {
		getTrikys,
    getUsers,
	} = useStore();

	useEffect( () => {
		//selects
		(async()=>{
			await getTrikys();
			await getUsers();
			console.log('---------------------');
			console.log('load first time store');
			console.log('---------------------');
		})();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
    <SocketProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{headerShown:false}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={ ( {navigation} )=>({
              title: 'Trikys',
              headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor:'#1465ff',
              },
              headerTintColor: "#FFF",
              headerTitleStyle: { color: 'white' },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{alignItems: 'center', padding: 10, marginRigth: -10, paddingLeft: 30}}>
                  <Icon style={{bottom:7, left: 0, position: 'absolute'}} name="arrow-back-outline" size={25} color={'#fff'} />
                  <Text style={{color:'#fff', fontSize: 16}}>Salir</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('UserConnectedScreen')} style={{alignItems: 'center', backgroundColor: '#1465ff', padding: 20, marginRight: -20}}>
                  <Icon style={{bottom:17, right: 10, position: 'absolute'}} name="add-outline" size={25} color={'#fff'} />
                  <Text style={{color:'#fff', paddingRight: 20, fontSize: 16}}>Desafiar</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="UserConnectedScreen" component={UserConnectedScreen}
            options={ ( {navigation} )=>({
              title: 'Usuarios conectados',
              headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor:'#1465ff',
              },
              headerTintColor: "#fff",
              headerTitleStyle: { color: '#fff' },
            })}
          />
          <Stack.Screen name="TrikyScreen" component={TrikyScreen}  />
          <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
          <Stack.Screen name="RankingScreen" component={RankingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SocketProvider>
  );
}

export default App;
