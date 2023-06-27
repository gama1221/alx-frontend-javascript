import {uploadPhoto, createUser} from './utils.js';

function handleProfileSignup(){
	return (
		Promise.all([uploadPhoto(), createUser()])
		.then((data) =>{
		console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
		})
		.catch(() =>console.error('Signup system offline'))
	);
}