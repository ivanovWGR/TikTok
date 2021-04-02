import styles from "../Login.module.css"
import {FaApple} from 'react-icons/fa'

export default function UseTwitter({text, shouldLogin, hideModal}) {
    

    const onCreateUser = () => {
//         var provider = new firebase.auth.GithubAuthProvider();
//         firebase
//   .auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     var token = credential.accessToken;

//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });



 // Close the modal here....
    }

    const onLoginUser = () => {
        // logvash go

        // close the modal here as well.... hideModal()
    }

    return (
        <div className={styles.choiceWrapper} onClick={shouldLogin ? onLoginUser : onCreateUser}>
            <div className={styles.iconDiv}>
                <FaApple />
            </div>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
        </div>
    )
}