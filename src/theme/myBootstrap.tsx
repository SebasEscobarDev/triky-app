import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width - 6;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const COL_1 = WINDOW_WIDTH * 0.083;
const COL_2 = WINDOW_WIDTH * 0.16;
const COL_3 = WINDOW_WIDTH * 0.25;
const COL_4 = WINDOW_WIDTH * 0.33;
const COL_5 = WINDOW_WIDTH * 0.41;
const COL_6 = WINDOW_WIDTH * 0.50;
const COL_7 = WINDOW_WIDTH * 0.58;
const COL_8 = WINDOW_WIDTH * 0.66;
const COL_9 = WINDOW_WIDTH * 0.71;
const COL_10 = WINDOW_WIDTH * 0.83;
const COL_11 = WINDOW_WIDTH * 0.91;
const COL_12 = WINDOW_WIDTH;

const myBootstrap = StyleSheet.create({
	row: {
		width: WINDOW_WIDTH,
		flexDirection: 'row',
	},
	col_1: {
		width: COL_1,
	},
	col_2: {
		width: COL_2,
	},
	col_3: {
		width: COL_3,
	},
	col_4: {
		width: COL_4,
	},
	col_5: {
		width: COL_5,
	},
	col_6: {
		width: COL_6,
	},
	col_7: {
		width: COL_7,
	},
	col_8: {
		width: COL_8,
	},
	col_9: {
		width: COL_9,
	},
	col_10: {
		width: COL_10,
	},
	col_11: {
		width: COL_11,
	},
	col_12: {
		width: COL_12,
	},
	margin_1:{
		marginLeft: COL_1,
	},
	margin_2:{
		marginLeft: COL_2,
	},
	margin_3:{
		marginLeft: COL_3,
	},
	margin_4:{
		marginLeft: COL_4,
	},
	margin_5:{
		marginLeft: COL_5,
	},
	margin_6:{
		marginLeft: COL_6,
	},
	margin_7:{
		marginLeft: COL_7,
	},
	margin_8:{
		marginLeft: COL_8,
	},
	margin_9:{
		marginLeft: COL_9,
	},
	margin_10:{
		marginLeft: COL_10,
	},
	margin_11:{
		marginLeft: COL_11,
	},
	margin_12:{
		marginLeft: COL_12,
	},
	fullHeight:{
		minHeight: WINDOW_HEIGHT,
	},
	text_center:{
		alignItems: 'center',
	},
});

export default myBootstrap;
