import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FollowButton.module.scss";
import firebase, { DataBase } from "../firebase";
import LoginBtnsModal from './LoginBtnsModal'


export default function FollowButton({ addBy, USER_LOGGED_IN, currentUserId }) {
    const [currentAccount, setCurrentAccount] = useState([]);
    const [isModalShown, showModal] = useState(false)
    function bringModal() {
        showModal(true)
    }
    function closeModal() {
        showModal(false)
    }


    useEffect(() => {        
        let mounted = true;
        if (currentUserId) {
            DataBase.collection("users")
                .get()
                .then((querySnapshot) => {
                    if (mounted) {
                        querySnapshot.forEach((doc) => {
                            if (doc.id === currentUserId) {
                                let res = { ...doc.data() }
                                setCurrentAccount([...res.following])
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });
        }
        return () => mounted = false;
    }, [USER_LOGGED_IN])

    const toogleClick = () => {
        if (USER_LOGGED_IN) {
            if (!currentAccount.includes(addBy)) {
                DataBase.collection("users")
                    .doc(currentUserId)
                    .update({
                        following: firebase.firestore.FieldValue.arrayUnion(addBy),
                    });
            } else {
                DataBase.collection("users")
                    .doc(currentUserId)
                    .update({
                        following: firebase.firestore.FieldValue.arrayRemove(addBy),
                    });
            }
        }
    };
    if (!USER_LOGGED_IN) {

        return (
            <>
                <button className={styles.followButton} onClick={bringModal} >
                    Follow
        </button>
                <LoginBtnsModal closeModal={closeModal} isModalShown={isModalShown} onCancel={closeModal} />
            </>
        );
    }
    if (!USER_LOGGED_IN || !currentAccount.includes(addBy)) {
        return (
            <Link to={"/FollowingPage"}>
                <button className={styles.followButton} onClick={toogleClick}>
                    Follow
        </button>
            </Link>
        );
    } else {
        return (
            <Link to={"/ForYouPage"}>
                <button className={styles.followingButton} onClick={toogleClick}>
                    Unfollow
        </button>
            </Link>
        );
    }
}
