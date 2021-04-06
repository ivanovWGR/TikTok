import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FollowButtonUserProfile.module.scss";
import firebase, { DataBase } from "../firebase";


export default function FollowButtonUserProfile ({ selectedUserId, isUserLoggedIn}) {
  const [currentAccount, setCurrentAccount] = useState([]);

  let currentUser = "";
  if (isUserLoggedIn) {
    currentUser = firebase.auth().currentUser.uid;
  }

  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUser) {
            let res = { ...doc.data() };
            setCurrentAccount([...res.following]);
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [isUserLoggedIn, currentUser]);

  const toogleClick = () => {
    if(isUserLoggedIn){
      if (!currentAccount.includes(selectedUserId)) {
        DataBase.collection("users")
          .doc(currentUser)
          .update({
            following: firebase.firestore.FieldValue.arrayUnion(selectedUserId),
          });
        
      } else {
        DataBase.collection("users")
          .doc(currentUser)
          .update({
            following: firebase.firestore.FieldValue.arrayRemove(selectedUserId),
          });
      }
    }
  };

  if (!isUserLoggedIn || !currentAccount.includes(selectedUserId)) {
      return (
        <Link to = {"/"}>
         <button className={styles.userPageBtn} onClick={toogleClick}>
          Follow
        </button>
        </Link>
      );
  } else {
    return (
      <Link to = {"/"}>
      <button className={styles.followingButton} onClick={toogleClick}>
        Following
      </button>
      </Link>
    );
  }
}