import React, { useEffect, useState } from "react";
import { FollowingBtnUnactive } from "./Following/FollowingBtn";
import { FollowingBtnActive } from "./Following/FollowingBtn";
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


export default function ShowSidebar({ isUserLoggedIn, currentUserUid }) {
  const users = [];
  const account = [];
  const topAccount = [];
  const suggestedAcc = [];
  const [currentAccount, setCurrentAccount] = useState([]);
  const [yourTopAccounts, setYourTopAccounts] = useState([]);
  const [suggestedAccounts, SetSuggestedAccounts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isActiveForYou, activeForYou] = useState(true);
  const [isActiveFollowing, activeFollowing] = useState(true);
  function changeButtonStylesForYou() {
    activeForYou(!isActiveForYou);
    activeFollowing(isActiveForYou);
  }
  function changeButtonStylesFollowing() {
    activeForYou(isActiveFollowing);
    activeFollowing(!isActiveFollowing);
  }
  //get current user obj
  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserUid) {
            account.push(doc.data().following);
          }
        });
        setCurrentAccount(account);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },[]);

  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let user = { ...doc.data() };
          user.id = doc.id;
          if(currentUserUid){
            if (currentAccount[0].indexOf(doc.id) < 0  && doc.id !== currentUserUid) {
              suggestedAcc.push(user)
            } 
            if (currentAccount[0].indexOf(doc.id) >= 0  && doc.id !== currentUserUid)  {
              topAccount.push(user)
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
  },[currentUserUid]);

  return (
    <div id={styles.siderDiv}>
      <div>
        <div className={styles.sidebarButtons}>
          {isActiveForYou ? (
            <FollowingBtnUnactive
              img={forYouUnactive}
              description={"For You"}
              onClick={changeButtonStylesForYou}
            />
          ) : (
            <FollowingBtnActive
              img={forYouActive}
              description={"For You"}
              onClick={changeButtonStylesForYou}
            />
          )}

          {isActiveFollowing ? (
            <FollowingBtnUnactive
              img={followUnactive}
              description={"Following"}
              onClick={changeButtonStylesFollowing}
            />
          ) : (
            <FollowingBtnActive
              img={followActive}
              description={"Following"}
              onClick={changeButtonStylesFollowing}
            />
          )}
        </div>
        <div>{isUserLoggedIn ? null : <SidebarLoginBtutton />}</div>
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
