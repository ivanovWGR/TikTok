import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FollowButtonUserProfile.module.scss";
import firebase, { DataBase } from "../firebase";
import LoginBtnsModal from '../LoginBtnsModal'


export default function FollowButtonUserProfile ({ selectedUserId, isUserLoggedIn, currentUserId}) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [isModalShown, showModal] = useState(false)
    function bringModal() {
        showModal(true)
    }
    function closeModal() {
        showModal(false)
    }

  // let currentUser = "";
  // if (isUserLoggedIn) {
  //   currentUser = firebase.auth().currentUser.uid;
  // }

  useEffect(() => {
    if(currentUserId){
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
    }
    
  }, [isUserLoggedIn]);

  const toogleClick = () => {
    if(isUserLoggedIn){
      if (!currentAccount.includes(selectedUserId)) {
        DataBase.collection("users")
          .doc(currentUserId)
          .update({
            following: firebase.firestore.FieldValue.arrayUnion(selectedUserId),
          });
        
      } else {
        DataBase.collection("users")
          .doc(currentUserId)
          .update({
            following: firebase.firestore.FieldValue.arrayRemove(selectedUserId),
          });
      }
    }
  };
  if (!isUserLoggedIn) {
    return (
        <>
            <button className={styles.userPageBtn} onClick={bringModal} >
                Follow
    </button>
            <LoginBtnsModal closeModal={closeModal} isModalShown={isModalShown} onCancel={closeModal} />
        </>
    );
}

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