import React, { useEffect, useState } from "react";
import { DataBase } from "../../firebase";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function SuggestionAccounts({ isUserLoggedIn, currentUserId }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [suggestedAccounts, SetSuggestedAccounts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

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
  }, [currentUserId]);

  useEffect(() => {
    const users = [];
    const suggestedAcc = [];
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let user = { ...doc.data() };
          user.id = doc.id;
          if (!currentAccount.includes(doc.id) && doc.id !== currentUserId) {
            suggestedAcc.push(user);
          }
          users.push(user);
        });
        SetSuggestedAccounts(suggestedAcc);
        setAllUsers(users);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentAccount, currentUserId]);

  const [isShowAll, showAll] = useState(true);
  function showAllUsers() {
    showAll(!isShowAll);
  }

  const numOfFirstUsersShow = 5;
  let userOne = [];
  if (!isUserLoggedIn) {
    userOne.push(allUsers);
  }

  if (isShowAll) {
    currentUserId
      ? (userOne = suggestedAccounts.slice(0, numOfFirstUsersShow))
      : (userOne = allUsers.slice(0, numOfFirstUsersShow));
  } else {
    currentUserId ? (userOne = suggestedAccounts) : (userOne = allUsers);
  }

  return (
    <div>
      <p>Suggested accounts</p>
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
