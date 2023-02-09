/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDSlZHoPl3ZcmZ0-F8_ttfQFeC2s7WRtX0",
  authDomain: "friendlychat-17d37.firebaseapp.com",
  projectId: "friendlychat-17d37",
  storageBucket: "friendlychat-17d37.appspot.com",
  messagingSenderId: "319060987539",
  appId: "1:319060987539:web:eeecd586dc3f33e92d8766"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}