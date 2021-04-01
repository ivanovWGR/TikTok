import firebase, { DataBase } from "../../firebase"
import createUserInDatabase from './createUserInDatabase'


// Create user in the database

// const createUserInDatabase({email, password, firstName, lastName, nickName, avatar = ""}) => {
//     DataBase.collection("users").doc(user.uid).set({
//         avatar: avatar,
//         firstName: firstName,
//         lastName: lastName,
//         nickName: nickName,
//         fallowers: 0,
//         following: [""],
//         likedVideos: [""],
//         likes: 0
//     })
//         .then(() => {
//             console.log("Document successfully written!");
//         })
//         .catch((error) => {
//             console.error("Error writing document: ", error);
//         });
// }

const registerWithEmailAndPass = (email, password, firstName, lastName, nickName) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User ', user)

            // Call createUserinTheDatabase
            
            DataBase.collection("users").doc(user.uid).set({
                avatar: "",
                firstName: firstName,
                lastName: lastName,
                nickName: nickName,
                fallowers: 0,
                following: [""],
                likedVideos: [""],
                likes: 0
            })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('error ', errorMessage)
            // ..
        });
}
export default registerWithEmailAndPass;