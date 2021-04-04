import React, { useEffect, useState } from "react";
import {FollowingBtnUnactive} from "./Following/FollowingBtn";
import {FollowingBtnActive} from "./Following/FollowingBtn";
import {ForYouBtnActive} from "./ForYou/ForYouBtn";
import {ForYouBtnUnactive} from "./ForYou/ForYouBtn";
import SidebarLoginBtutton from "./SidebarLogin/SidebarLoginBtn";
import SidebarFooter from "./SidebarFooter/sidebarFooter";
import styles from "./Sidebar.module.scss";
import SuggestionAccounts from "./SuggestedAccounts/SuggestedAccounts";
import YourTopAccounts from "./YourTopAccounts/YourTopAccounts";
import followUnactive from "../date/img/followUnactive.png";
import followActive from "../date/img/followActive.png";
import forYouActive from "../date/img/forYouActive.png";
import forYouUnactive from "../date/img/forYouUnactive.png";
import { DataBase } from "../firebase";
import {useLocation} from 'react-router-dom'



export default function ShowSidebar({ isUserLoggedIn, currentUserUid }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [yourTopAccounts, setYourTopAccounts] = useState([]);
  const [suggestedAccounts, SetSuggestedAccounts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const location = useLocation();

  // const [isActiveForYou, activeForYou] = useState(true);
  // const [isActiveFollowing, activeFollowing] = useState(true);

  // function changeButtonStylesForYou() {
  //   if (isActiveForYou) {
  //   activeForYou(!isActiveForYou);
  //   activeFollowing(isActiveForYou);
  //   }
  // }
  // function changeButtonStylesFollowing() {
  //   if(isActiveFollowing) {
  //     activeForYou(isActiveFollowing);
  //     activeFollowing(!isActiveFollowing);
  //   }
  // }
  //get current user obj
  useEffect(() => {
      DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserUid) {
            let res = {...doc.data()}
            setCurrentAccount([...res.following])
            console.log("current account", res)
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },[currentUserUid]);

  useEffect(() => {
    const users = [];
    const topAccount = [];
    const suggestedAcc = [];
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let user = { ...doc.data() };
          user.id = doc.id;
            if (currentAccount.includes(doc.id)) {
              topAccount.push(user)
             
            } else {
              if (doc.id !== currentUserUid) {
                suggestedAcc.push(user)
              }
            }
          users.push(user);
        });
        setYourTopAccounts(topAccount)
        SetSuggestedAccounts(suggestedAcc)
        setAllUsers(users)
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },[currentAccount, currentUserUid]);

  return (
    <div id={styles.siderDiv}>
      <div>
        <div className={styles.sidebarButtons}>
        {location.pathname === "/ForYouPage" ? (
            <ForYouBtnUnactive
              img={forYouActive}
              description={"For You"}
              // onClick={changeButtonStylesForYou}
            />
          ) : (
            <ForYouBtnActive
              img={forYouUnactive}
              description={"For You"}
              // onClick={changeButtonStylesForYou}
            />
          )}

          {location.pathname === "/FollowingPage" ? 
          (
            <FollowingBtnActive
              img={followActive}
              description={"Following"}
              // onClick={changeButtonStylesForYou}
            />
          ) : (
            <FollowingBtnUnactive
              img={followUnactive}
              description={"Following"}
              // onClick={changeButtonStylesForYou}
            />
          )}
        </div>
        <div>{!isUserLoggedIn && <SidebarLoginBtutton />  }</div>
      </div>
      <div className={styles.suggestedAccounts}>
        <SuggestionAccounts suggestedAcc={suggestedAccounts} allUsers = {allUsers} cuurentUser = {currentUserUid}/>
      </div>
      <div className={styles.yourTopAccounts}>
        <YourTopAccounts topAcc={yourTopAccounts} cuurentUser = {currentUserUid}/>
      </div>
      <div>
        <SidebarFooter />
      </div>
    </div>
  );
}
