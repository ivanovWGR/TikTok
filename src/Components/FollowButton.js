import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FollowButton.module.scss";
import firebase, { DataBase } from "../firebase";

export default function FollowButton({ addBy, USER_LOGGED_IN, currentUserId  }) {
  const [currentAccount, setCurrentAccount] = useState([]);

  // let currentUser = "";
  // if (USER_LOGGED_IN) {
  //   currentUser = firebase.auth().currentUser.uid;
  // }

  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserId) {
            let res = { ...doc.data() };
            setCurrentAccount([...res.following]);
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [USER_LOGGED_IN]);

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
      <Link to={"/login"}>
        <button className={styles.followButton} onClick={toogleClick}>
          Follow
        </button>
      </Link>
    );
  }
  if (!USER_LOGGED_IN || !currentAccount.includes(addBy)) {
    console.log("follow")
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
          Following
        </button>
      </Link>
    );
  }
}
