import React, { useEffect, useState } from "react";
import { DataBase } from "../../firebase";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function YourTopAccounts({ USER_LOGGED_IN, currentUserId }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [yourTopAccounts, setYourTopAccounts] = useState([]);

  useEffect(() => {    
    let mounted = true;
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        if(mounted){
        querySnapshot.forEach((doc) => {
          if (doc.id === currentUserId) {
            let res = { ...doc.data() };
            setCurrentAccount([...res.following]);
          }
        });
      }})
      .catch((error) => {
        console.log("Error getting document:", error);
      });
      return () => mounted = false;
  }, [currentUserId]);

  useEffect(() => {    
    const topAccount = [];
    let mounted = true;
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        if(mounted){
        querySnapshot.forEach((doc) => {
          let user = { ...doc.data() };
          user.id = doc.id;
          if (currentAccount.includes(doc.id)) {
            topAccount.push(user);
          }
        });
        setYourTopAccounts(topAccount);
      }})
      .catch((error) => {
        console.log("Error getting document:", error);
      });
      return ()=> mounted = false
  }, [currentAccount, currentUserId]);

  const [isShowAll, showAll] = useState(true);
  function showAllUsers() {
    showAll(!isShowAll);
  }

  const numOfFirstUsersShow = 5;
  let userOne = [];

  if (isShowAll) {
    userOne = yourTopAccounts.slice(0, numOfFirstUsersShow);
  } else {
    userOne = yourTopAccounts;
  }
  if (!currentUserId || yourTopAccounts.length < 1) {
    return (
      <div>
        <p>here you can see your following accounts</p>
      </div>
    );
  }
  return (
    <div>
      <p>Your following accounts</p>
      {
        <div>
          {userOne.map((el) => (
            <UserItem
              key={el.id}
              id={el.id}
              img={el.photoUrl}
              userName={el.nickName}
              name={el.displayName}
            />
          ))}
        </div>
      }
      <div>
        {isShowAll ? (
          <SeeAllButton onClick={showAllUsers} />
        ) : (
          <SeeLessButton onClick={showAllUsers} />
        )}
      </div>
    </div>
  );
}
