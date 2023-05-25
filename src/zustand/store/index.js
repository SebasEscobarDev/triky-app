import create from 'zustand';
import { getUsers, saveUser, updateUser, deleteUser, loginUser } from '../../api/users.js';
import { getTrikys, saveTriky, updateTriky, deleteTriky } from '../../api/trikys.js';

export const useStore = create( (set, get) => ({
	users: [],
	trikys: [],

	/*=====================
	*  METHODS FOR TRIKYS  *
	======================*/
	getTrikys: async() => {
		const trikys = await getTrikys();
		set({ trikys: trikys });
	},
	saveTriky: async(triky) =>{
		await saveTriky(triky);
		set((state) => ({ trikys: [...state.trikys, { triky }] }));
	},
	updateTriky: async(id, triky) =>{
		await updateTriky(id, triky);
		set(state => ({
			trikys: state.trikys.map(item => {
				if (item.id === triky.id) {
					return {
						...item,
						player2: triky.player2,
					};
				} else {
					return item;
				}
			}),
		}));
	},
	deleteTriky: async(id) => {
		await deleteTriky(id);
		set(state => ({
			trikys: state.trikys.filter(triky => triky.id !== id),
		}));
	},

	/*=====================
	*  METHODS FOR USERS  *
	======================*/
	getUsers: async() => {
		const users = await getUsers();
		set({ users: users });
	},
	saveUser: async(user) =>{
		await saveUser(user);
		set((state) => ({ users: [...state.users, { user }] }));
	},
	updateUser: async(id, user) =>{
		await updateUser(id, user);
		set(state => ({
			users: state.users.map(item => {
				if (item.id === user.id) {
					return {
						...item,
						name: user.name,
						email: user.email,
						password: user.password,
					};
				} else {
					return item;
				}
			}),
		}));
	},
	deleteUser: async(id) => {
		await deleteUser(id);
		set(state => ({
			users: state.users.filter(user => user.id !== id),
		}));
	},
	loginUser: async(user) => {
		await loginUser(user);
	},
})
);
//@lilyprosse