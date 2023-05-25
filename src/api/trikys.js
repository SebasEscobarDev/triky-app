import {API_URL, API_TOKEN} from '@env';
const API = `${API_URL}/api/trikys`;

console.log(API);

export const getTrikys = async () => {
	const response = await fetch(API);
	return await response.json();
};

export const getTriky = async (id) => {
	const response = await fetch(`${API}/${id}`);
	return await response.json();
};

export const saveTriky = async (newTriky) => {
	const response = await fetch(API, {
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type':'application/json'},
		body: JSON.stringify(newTriky),
	});
	return await response.json();
};

//no password
export const updateTriky = async (id, triky) =>{
	const res = await fetch(`${API}/${id}`, {
		method: 'PATCH',
		headers: {Accept: 'application/json', 'Content-Type':'application/json'},
		body: JSON.stringify(triky),
	});
	return res;
};

export const deleteTriky = async(id) => {
	await fetch(`${API}/${id}`, {
		method: 'DELETE',
	});
};
