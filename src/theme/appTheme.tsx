import {StyleSheet, Dimensions} from 'react-native';

const DeviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  casillaIndex: {fontSize: 20, color: 'rgba(0,0,0,0.2)', position: 'absolute', top: 0, left: 0},
  markCharacter: {fontSize: 70, color: '#1465ff', display:'none'},
  showCharacter: { display: 'flex' },
  box1: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3},
  box2: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3},
  box3: {width: DeviceWidth * 0.3, height: DeviceWidth * 0.3},
  box_1: {borderLeftWidth:0, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 0, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_2: {borderLeftWidth:0, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_3: {borderLeftWidth:0, borderBottomWidth:0, borderRightWidth: 1, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_4: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 0, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_5: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 1, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_6: {borderLeftWidth:1, borderBottomWidth:0, borderRightWidth: 1, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_7: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 0, borderTopWidth: 0, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_8: {borderLeftWidth:1, borderBottomWidth:1, borderRightWidth: 0, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
  box_9: {borderLeftWidth:1, borderBottomWidth:0, borderRightWidth: 0, borderTopWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center'},
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
	boxMorphism: {
		width: '90%',
		marginLeft: '5%',
		position: 'relative',
		backgroundColor: 'rgba(59,59,59,0.8)',
		display: 'flex',
		padding: 10,
		paddingTop: 10 ,
		height: 'auto',
		borderTopLeftRadius : 10,
		borderTopRightRadius : 10,
		borderBottomLeftRadius : 10,
		borderBottomRightRadius : 10,
	},
	tabsLogin: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		flexDirection: 'row',
	},
	btnUno:{
		borderTopLeftRadius: 15,
	},
	btnDos:{
		borderTopRightRadius: 15,
	},
	active:{
		backgroundColor: '#280064',
	},
	buttonTab: {
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#6500ff',
		borderRadius: 10,
		color: '#fff',
		width: '100%',
	},
	oneBtn:{
		display: 'flex',
		paddingBottom: 32,
		alignItems: 'center',
		borderRadius: 10,
	},
	oneText:{
		top: 12,
		left: 20,
	},
	touchableText: {
		color: '#ffffff',
	},
	inputView: {
		width: '100%',
		height: 60,
		backgroundColor: 'rgba(32,33,52,0.5)',
		borderRadius: 10,
		paddingVertical: 18,
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: 'white',
		borderBottomColor: '#6500ff',
		borderBottomWidth: 0.5,
		marginBottom: 10,
	},
	inputRadiusTop: {
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
	},
	inputRadiusBottom: {
		borderBottomLeftRadius : 10,
		borderBottomRightRadius : 10,
	},
	textInput: {
		flex: 1,
		paddingHorizontal: 12,
		width: '100%',
		color: 'white',
	},
	viewLogin: {
		flex: 1,
		width: '100%',
	},
	svglogin:{
		top: 20,
		left: 20,
	},
	userBox:{
		backgroundColor: '#202934',
		paddingTop: 10,
		paddingBottom: 10,
		position: 'relative',
		borderRadius: 0,
		marginTop: 0,
		borderBottomWidth:0.5,
		borderBottomColor:'darkgray',
		paddingLeft: 10,
	},
	usertitle:{
		color: '#fff',
		paddingLeft: 10,
		position: 'relative',
		paddingRight: 10,
	},
	userDescription:{
		color: '#697584',
		paddingLeft: 10,
		paddingRight: 10,
	},
	userBilling:{
		color: '#00ea8c',
	},
	btnAction:{
		borderColor:'#6500ff',
		borderStyle: 'solid',
		borderWidth: 1,
		backgroundColor:'#6500ff',
		padding: 7,
		borderRadius: 10,
		fontSize: 8,
		position: 'absolute',
		right: 10,
		top: 11,
	},
	txtBtnAction:{
		color: '#fff',
	},
	chargertxt: {
		fontSize: 40,
		color: '#fff',
		padding: 20,
	},
	roundIcon:{
		borderRadius: 10,
		backgroundColor:'#354357',
		padding: 10,
		width: 45,
		height: 45,
		marginLeft: 0,
		marginTop: 0,
	},
	iconList:{
		color: '#fff',
	},
	colorActive:{
		paddingLeft: 10,
		color: '#00ea8c',
	},
	modalStyle:{
		paddingTop:15,
		height: 50,
		width: '100%',
	},
	modalTextStyle:{
		marginLeft:10,
		height: 50,
		width: '100%',
		fontSize: 13,
	},
	modalDropDownStyle:{
		marginLeft:-23,
		width:'85%',
		marginTop:-15,
		backgroundColor:'#141a1f',
		borderColor:'#00ea82',
		height:'auto',
	},
	modalDropDownTextStyle:{
		paddingLeft:20,
		color:'white',
		backgroundColor:'#141a1f',
		borderBottomWidth: 0.5,
		borderColor:'#00ea82',
		fontSize: 13,
	},
	modalDropDownTextHighlightStyle:{
		color:'#00ea82',
	},
	alignEnd: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	autoBtn:{
		marginRight: 10,
		position: 'relative',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 0,
	},
	btnCancel:{
		backgroundColor: 'gray',
	},
	btnSucess:{
		backgroundColor: '#6500ff',
	},
	btnNew:{
		backgroundColor: '#fefefe',
		textTransform: 'capitalize',
	},
});
