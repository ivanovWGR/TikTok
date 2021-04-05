import React, { useEffect, useState } from "react";
import { DataBase } from "../../firebase";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function YourTopAccounts({ isUserLoggedIn, loggedInUserId }) {
  const [currentAccount, setCurrentAccount] = useState([]);
  const [yourTopAccounts, setYourTopAccounts] = useState([]);

  useEffect(() => {
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === loggedInUserId) {
            let res = { ...doc.data() };
            setCurrentAccount([...res.following]);
            console.log("current account", res);
          }
        });
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [loggedInUserId]);

  useEffect(() => {
    const topAccount = [];
    DataBase.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let user = { ...doc.data() };
          user.id = doc.id;
          if (currentAccount.includes(doc.id)) {
            topAccount.push(user);
          }
        });
        setYourTopAccounts(topAccount);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentAccount, loggedInUserId]);

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
  if (!isUserLoggedIn || yourTopAccounts.length < 1) {
    return (
      <div>
        <p>here you can see yours top accounts</p>
      </div>
    );
  }
  return (
    <div>
      <p>Your top accounts</p>
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
