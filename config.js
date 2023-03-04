// Add to .gitignore

export const FIREBASE_API_KEY = '...';
export const FIREBASE_AUTH_DOMAIN = '...';
export const FIREBASE_PROJECT_ID = '...';
export const FIREBASE_STORAGE_BUCKET = '...';
export const FIREBASE_MESSAGE_SENDER_ID = '...';
export const FIREBASE_APP_IP = '...';
export const FIREBASE_MEASUREMENT_ID = '...';

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