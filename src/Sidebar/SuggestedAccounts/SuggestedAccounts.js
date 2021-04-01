import React, { useState } from "react";
import SeeAllButton from "../seeAllButton/SeeAllButton";
import SeeLessButton from "../seeLessButton/SeeLessButton";
import UserItem from "../UserItem/UserItem";

export default function SuggestionAccounts() {
  const AllUsers = [
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka1",
      name: "Букетка Градинароваfadhddfhdhdsdgsjsdgjdgjs",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka2",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka3",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka4",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka5",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka6",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka7",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka8",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka9",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka10",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka91",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka91",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka911",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka912",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka913",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka914",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka915",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka916",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka917",
      name: "Букетка Градинарова",
    },
    {
      img:
        "https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1664152392432645~c5_720x720.jpeg?x-expires=1617267600&x-signature=kva9Qt5CiDSZXSJUpO%2B2%2FoAtfbM%3D",
      userName: "Stanka918",
      name: "Букетка Градинарова",
    },
  ];
  const [isShowAll, showAll] = useState(true);
  function showAllUsers() {
    showAll(!isShowAll);
  }

  const numOfFirstUsersShow = 5;
  let userOne = [];

  if (isShowAll) {
    userOne = AllUsers.slice(0, numOfFirstUsersShow);
  } else {
    userOne = AllUsers;
  }

  return (
    <div>
      <p>Suggested accounts</p>
      {
        <div>
          {userOne.map((el) => (
            <UserItem img={el.img} userName={el.userName} name={el.name} />
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
