import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhmeauIX75GPOpZOry14DQNGPIKzVpRIY",
    authDomain: "tiktokclonetrainingproject.firebaseapp.com",
    projectId: "tiktokclonetrainingproject",
    storageBucket: "tiktokclonetrainingproject.appspot.com",
    messagingSenderId: "469574152133",
    appId: "1:469574152133:web:16c8832d479d60aff625ac",
    measurementId: "G-RXX2642PWD"
  };

  firebase.initializeApp(firebaseConfig);
  const DataBase = firebase.firestore();
  

  export default firebase;
  export {DataBase}