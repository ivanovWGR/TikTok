import styles from "../Login.module.css"
import createUserInDatabase from '../utilRegFunctions/createUserInDatabase'
import firebase, { DataBase } from "../../firebase"
import { FcGoogle } from 'react-icons/fc'

export default function UseGoogle({ text, shouldLogin, destroyModal}) {
const colapseModal = destroyModal;
console.log(destroyModal);
    const onCreateUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("User: ", user)

                DataBase.collection('users').doc(user.uid).get().then(res => {
                    let result = res.data();

                    console.log('Result: ', result);

                    if(!result) {
                        // createUserInDatabase({user.displayName, avatar: user.image});
                        createUserInDatabase(user.uid,user.photoURL, user.displayName)
                    }
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });



        // Close the modal here....
        colapseModal()
    }

    // const onLoginUser = () => {
    //     // logvash go

    //     // close the modal here as well.... hideModal()
    // }

    return (
        <div className={styles.choiceWrapper} onClick={onCreateUser}>
            <div className={styles.iconDiv}>
                <FcGoogle fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}