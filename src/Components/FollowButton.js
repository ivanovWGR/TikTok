import React, { useEffect, useState } from 'react';
import styles from './FollowButton.module.scss';
import firebase, { DataBase } from '../firebase';

export default function FollowButton ({addBy, USER_LOGGED_IN}) {
    const [currentAccount, setCurrentAccount] = useState([]);

    let currentUser = "";
        if(USER_LOGGED_IN) {
            currentUser = firebase.auth().currentUser.uid;
        }

    useEffect(() => {
        DataBase.collection("users")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id === currentUser) {
                  let res = {...doc.data()}
                  setCurrentAccount([...res.following])
                }
            });
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
    },[USER_LOGGED_IN, currentUser])

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