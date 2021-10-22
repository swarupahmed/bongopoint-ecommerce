import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDMpj76KkD7fhyIAhRbZebp65IQ6ni88rg',
	authDomain: 'user-auth-bongopoint.firebaseapp.com',
	projectId: 'user-auth-bongopoint',
	storageBucket: 'user-auth-bongopoint.appspot.com',
	messagingSenderId: '966052624318',
	appId: '1:966052624318:web:0a9eda74c54325a3512bef'
};

export const app = initializeApp(firebaseConfig);
