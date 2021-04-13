import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvfKVsVx3drQ-mbofOOscjc7weEbc9Nzw",
  authDomain: "tiktoklastbase.firebaseapp.com",
  projectId: "tiktoklastbase",
  storageBucket: "tiktoklastbase.appspot.com",
  messagingSenderId: "764508715366",
  appId: "1:764508715366:web:8506dcef2a4f8beb09f0a7",
  measurementId: "G-3CDJN3M7D1"
};
firebase.initializeApp(firebaseConfig);

const DataBase = firebase.firestore();
git push
export default firebase;
export { DataBase };
export const storage = firebase.storage();
