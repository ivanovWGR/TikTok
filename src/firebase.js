import firebase from 'firebase';

//Georgi
//ORIGIN DATABASE
// const firebaseConfig = {
//   apiKey: "AIzaSyBhmeauIX75GPOpZOry14DQNGPIKzVpRIY",
//   authDomain: "tiktokclonetrainingproject.firebaseapp.com",
//   projectId: "tiktokclonetrainingproject",
//   storageBucket: "tiktokclonetrainingproject.appspot.com",
//   messagingSenderId: "469574152133",
//   appId: "1:469574152133:web:16c8832d479d60aff625ac",
//   measurementId: "G-RXX2642PWD"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBk3OZuWowO1SzTAcd-hSozByzvNN6D3jE",
//   authDomain: "tiktok-clone-278e0.firebaseapp.com",
//   databaseURL: "https://tiktok-clone-278e0-default-rtdb.firebaseio.com",
//   projectId: "tiktok-clone-278e0",
//   storageBucket: "tiktok-clone-278e0.appspot.com",
//   messagingSenderId: "104039151185",
//   appId: "1:104039151185:web:dc9aa6e0cc4a5ab8c7aa70",
//   measurementId: "G-6CH7QF7EG1"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDnmVrgRKxs61PmbkpHr3B76VnUT9wsWEU",
  authDomain: "tiktok3-48a44.firebaseapp.com",
  projectId: "tiktok3-48a44",
  storageBucket: "tiktok3-48a44.appspot.com",
  messagingSenderId: "663064326882",
  appId: "1:663064326882:web:aa803a539044284051a4bb"
};

firebase.initializeApp(firebaseConfig);
const DataBase = firebase.firestore();


export default firebase;
export { DataBase };
export const storage = firebase.storage();
