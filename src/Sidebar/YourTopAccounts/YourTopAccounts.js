import React, { useState } from "react";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function YourTopAccounts({topAcc, cuurentUser}) {
  
  const [isShowAll, showAll] = useState(true);
  function showAllUsers() {
    showAll(!isShowAll);
  }

  const numOfFirstUsersShow = 5;
  let userOne = [];

  if (isShowAll) {
    userOne = topAcc.slice(0, numOfFirstUsersShow);
  } else {
    userOne = topAcc;
  }

  if (!cuurentUser || topAcc.length < 0) {
    return(
      <div>
        <p>here you can see yours top accounts</p>
      </div>
    )
  }
 
  return (
    <div>
      <p>Your top accounts</p>
      {
        <div>
          {userOne.map((el) => (
            <UserItem key = {el.id} id = {el.id} img={el.photoUrl} userName={el.nickName} name={el.displayName} />
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
