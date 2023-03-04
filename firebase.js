// Create and add the following to config.js and ignore the file.
// export const FIREBASE_API_KEY = '';
// export const FIREBASE_APP_ID = '';
// export const FIREBASE_AUTH_DOMAIN = '';
// export const FIREBASE_MESSAGE_SENDER_ID = '';
// export const FIREBASE_PROJECT_ID = '';
// export const FIREBASE_STORAGE_BUCKET = '';
// export const FIREBASE_MEASUREMENT_ID = ''; // If you have enabled analytics.
// 
// After creating the project in firebase, go to the project settings and add the web app.
// Copy the config and paste the details into the config.js file.
// 
// For example from the firebaseConfig object below into the above exported keys:
// const firebaseConfig = {
//   apiKey: "AIzaSy...Jm6A",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project"",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "778...122",
//   appId: "1:7780...:web:305...973"
// };
// 
// Add the config.js to .gitignore if you have not done so already.


import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {
	FIREBASE_API_KEY,
	FIREBASE_APP_IP,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_MESSAGE_SENDER_ID,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
} from './config';

const config = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
	appId: FIREBASE_APP_IP,
	measurementId: FIREBASE_MEASUREMENT_ID,
};

const Firebase = firebase.initializeApp(config);
const Auth = firebase.auth();
const Firestore = firebase.firestore();
const Storage = firebase.storage();

export { Firebase, Auth, Firestore, Storage };