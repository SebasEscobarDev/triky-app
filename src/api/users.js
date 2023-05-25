import {API_URL, API_TOKEN} from '@env';
const API = `${API_URL}/api/users`;

console.log(API)

export const getUsers = async () => {
	const response = await fetch(API);
	return await response.json();
};

export const getUser = async (id) => {
	const response = await fetch(`${API}/${id}`);
	return await response.json();
};

export const saveUser = async (newUser) => {
	const response = await fetch(API, {
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type':'application/json'},
		body: JSON.stringify(newUser),
	});
	return await response.json();
};

export const deleteUser = async(id) => {
	await fetch(`${API}/${id}`, {
		method: 'DELETE',
	});
};

//no password
export const updateUser = async (id, user) =>{
	const res = await fetch(`${API}/${id}`, {
		method: 'PATCH',
		headers: {Accept: 'application/json', 'Content-Type':'application/json'},
		body: JSON.stringify(user),
	});
	return res;
};

export const loginUser = async (user) =>{
	try {
		const token = await fetch(`${API}/login`, {
			method: 'POST',
			headers: {Accept: 'application/json', 'Content-Type':'application/json'},
			body: JSON.stringify(user),
		});
		return await token.json();
	} catch (err){
		console.log(err);
	}
};

export const getUserLogin = async (token) => {
	const user = await fetch(`${API}/get/login`, {
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type':'application/json'},
		body: JSON.stringify(token),
	});
	return user;
};