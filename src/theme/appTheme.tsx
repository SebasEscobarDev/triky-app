import {StyleSheet, Dimensions} from 'react-native';

const DeviceWidth = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({

	bgPrimaryColor: {
		backgroundColor: '#202329',
	},


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  casillaIndex: {fontSize: 20, color: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, left: 0},
  markCharacter: {fontSize: 70, color: '#1465ff', display:'none'},
  showCharacter: { display: 'flex' },
  box1: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, borderRadius: 10},
  box2: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, borderRadius: 10},
  box3: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, borderRadius: 10},
  box_1: {borderLeftWidth:0, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 0, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_2: {borderLeftWidth:0, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_3: {borderLeftWidth:0, borderBottomWidth:0, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_4: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 0, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_5: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_6: {borderLeftWidth:1, borderBottomWidth:0, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_7: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 0, borderTopWidth: 0, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_8: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 0, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  box_9: {borderLeftWidth:1, borderBottomWidth:0, borderRightWidth: 0, borderTopWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center'},
  btnReset: {
    marginTop: 15,
    backgroundColor: '#0057ff',
    padding: 15,
    borderRadius: 20,
  },
  txtReset: {
    fontSize: 25,
    color: 'white',
  },
  ///////////////////
  image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	loginbox: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: '#202329',
		minHeight: WINDOW_HEIGHT,
	},

	bg_circle_1: {
		width: 30,
		height: 30,
		backgroundColor: '#1465ff',
		position: 'absolute',
		top: 260,
		left: 330,
		borderRadius: 100,
	},
	bg_circle_2: {
		width: 250,
		height: 250,
		backgroundColor: '#202329',
		position: 'absolute',
		top: -110,
		left: 200,
		borderRadius: 200,
		borderWidth: 60,
		borderColor: '#1465ff',
	},
	bg_circle_3: {
		width: 500,
		height: 500,
		backgroundColor: '#202329',
		position: 'absolute',
		top: 550,
		left: -40,
		borderRadius: 500,
		borderWidth: 80,
		borderColor: '#1465ff',
	},

	left_equis: {
		position: 'absolute',
		left: 0,
		top: 5,
		opacity: 1,
	},
	right_equis: {
		position: 'absolute',
		right: 0,
		top: 340,
		opacity: 1,
	},

	bg_equis_1: {
	},
	bg_equis_2: {},
	bg_equis_3: {},

	bg_morphism: {
		position: 'relative',
		backgroundColor: 'rgba(53,67,87,0.9)',
		display: 'flex',
		paddingVertical: 25,
		paddingHorizontal: 20,
		borderRadius: 5,
		boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
	},

	eye: { position: 'absolute', right: 10 },

	inputView: {
		backgroundColor: 'rgba(32,33,52,0.5)',
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: 'white',
		borderBottomColor: '#1465ff',
		borderBottomWidth: 2,
		marginBottom: 10,
	},

	textInput: {
		paddingHorizontal: 12,
		color: 'white',
		fontSize: 16,
		zIndex: 2,
	},

	roundIcon:{
		borderRadius: 50,
		backgroundColor:'#354357',
		alignItems: 'center',
		alignSelf: 'center',
		alignContent: 'center',
		padding: 10,
		width: 45,
		height: 45,
		marginLeft: 0,
		marginTop: 0,
	},

	title:{
		alignSelf: 'center',
		fontSize: 60,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 15,
		textAlign: 'center',
		padding: 10,
		paddingHorizontal: 20,
	},

	btnPrimary: {
		display: 'flex',
		backgroundColor: '#1465ff',
		borderWidth: 2,
		borderColor: '#1465ff',
		padding: 10,
		paddingVertical: 20,
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 50,
	},

	btnActionPrimary: {
		display: 'flex',
		backgroundColor: '#1465ff',
		borderWidth: 2,
		borderColor: '#1465ff',
		padding: 5,
		paddingVertical: 10,
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 50,
	},

	iconBtn:{
		position:'absolute',
		right:20,
		top: 15,
	},

	iconActionBtn:{
		position:'absolute',
		right:20,
		top: 5,
	},

	txtActionPrimary: {
		fontSize: 16,
		color: '#fff',
		lineHeight: 18,
	},

	txtPrimary: {
		fontSize: 20,
		color: '#fff',
		lineHeight: 20,
	},

	chargertxt: {
		textAlign: 'center',
		fontSize: 30,
		color: '#fff',
		padding: 20,
	},

	bgChargeColor: {backgroundColor:'#141a1f'},

	pb_135: { paddingBottom: 135 },

	flatListStyle:{backgroundColor:'#141a1f'},

	trikyBox:{
		borderColor:'#fff',
		borderStyle: 'solid',
		borderBottomWidth: 0.5,
		paddingTop: 5,
		paddingBottom: 15,
		marginTop: 10,
		alignContent: 'center',
	},

	divTriky: {
		display: 'flex',
		alignItems: 'center',
	},

	usertitle:{
		color: '#fff',
		paddingLeft: 10,
		position: 'relative',
		paddingRight: 10,
	},
	userDescription:{
		color: '#fff',
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 16,
	},
	id:{
		position: 'absolute',
		top: 20,
		left: 10,
	},
	userState:{
		borderWidth: 1,
		borderColor: '#0057ff',
		display: 'flex',
		maxWidth: 200,
		textAlign: 'center',
		fontSize: 12,
		padding: 5,
		borderRadius: 100,
		color: '#88b0ff',
		marginBottom: 5,
	},
	userBilling:{
		color: '#00ea8c',
	},
	btnActionTriky:{
		borderColor:'#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		backgroundColor:'#fff',
		padding: 20,
		borderRadius: 10,
		fontSize: 8,
		position: 'absolute',
		right: 10,
		top: 11,
	},
	txtBtnAction:{
		color: '#fff',
	},
	iconList:{
		color: '#fff',
	},

	colorActive:{
		paddingLeft: 10,
		color: '#00ea8c',
	},

});
