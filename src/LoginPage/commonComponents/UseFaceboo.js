import styles from "../Login.module.css"
import { FaFacebook } from 'react-icons/fa'
import firebase from '../../firebase'

export default function UseFacebook({ text, shouldLogin, hideModal  }) {
    const onCreateUser = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
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
    }

    const onLoginUser = () => {
        // logvash go

        // close the modal here as well.... hideModal()
    }

    return (
        <div className={styles.choiceWrapper} onClick={shouldLogin ? onLoginUser : onCreateUser}>
            <div className={styles.iconDiv}>
                <FaFacebook fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}