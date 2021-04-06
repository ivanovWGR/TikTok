import firebase, { DataBase } from "../../firebase"
import createUserInDatabase from './createUserInDatabase'

const registerWithEmailAndPass = (email, password, name) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log('User ', user)

            // Call createUserinTheDatabase
            createUserInDatabase(user.uid, name)
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error ', errorMessage)            
        });
}
export default registerWithEmailAndPass;