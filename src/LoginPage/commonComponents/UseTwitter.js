import styles from "../Login.module.css"
import { FaTwitter } from 'react-icons/fa'
import firebase from '../../firebase'

export default function UseTwitter({ text, shouldLogin, hideModal }) {
    const onCreateUser = () => {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                var token = credential.accessToken;
                var secret = credential.secret;
                // The signed-in user info.
                var user = result.user;
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
    }

    const onLoginUser = () => {       // logvash go

        // close the modal here as well.... hideModal()
    }


    return (
        <div className={styles.choiceWrapper} onClick={shouldLogin ? onLoginUser : onCreateUser}>
            <div className={styles.iconDiv}>
                <FaTwitter fill="#3b5998" />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}