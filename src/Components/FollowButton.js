import React, { useEffect, useState } from 'react';
import styles from './FollowButton.module.scss';
import firebase, { DataBase } from '../firebase';

export default function FollowButton ({addBy, USER_LOGGED_IN, currentUserId }) {
    const [currentAccount, setCurrentAccount] = useState([]);

    // let currentUserId = "";
    //     if(USER_LOGGED_IN) {
    //         currentUserId = firebase.auth().currentUser.uid;
    //     }

    useEffect(() => {
        if(currentUserId){
            DataBase.collection("users")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id === currentUserId) {
                      let res = {...doc.data()}
                      setCurrentAccount([...res.following])
                    }
                });
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        
    },[USER_LOGGED_IN])

    const toogleClick = () => {
        if(USER_LOGGED_IN){
            console.log(currentAccount)
            if (currentAccount.includes(addBy)) {
                console.log("p")
            }else {
                console.log("p")
            }
        }
    }
    if (!USER_LOGGED_IN || !currentAccount.includes(addBy)){
        return (
            <button className={styles.followButton} onClick={toogleClick}>Follow</button>
        )
    } else {
        return (
            <button className={styles.followingButton} onClick={toogleClick}>Following</button>
        )
    }
}