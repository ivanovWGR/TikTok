import React, { useState } from "react";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function SuggestionAccounts({suggestedAcc, allUsers, cuurentUser}) {

  const [isShowAll, showAll] = useState(true);
  function showAllUsers() {
    showAll(!isShowAll);
  }

  const numOfFirstUsersShow = 5;
  let userOne = [];
  if (!cuurentUser) {
    userOne.push(allUsers)
  } 

  if (isShowAll) {
    cuurentUser? userOne = suggestedAcc.slice(0, numOfFirstUsersShow): userOne = allUsers.slice(0, numOfFirstUsersShow)    
 
  } else {
    cuurentUser? userOne = suggestedAcc: userOne = allUsers
  }
 
  return (
    <div>
      <p>Suggested accounts</p>
      {
        <div>
          {userOne.map((el) => (
            <UserItem key = {el.id} id = {el.id} img={el.photoURL} userName={el.nickName} name={el.displayName} />
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
