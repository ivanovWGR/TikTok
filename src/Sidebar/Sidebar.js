import React from "react";
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
import {useLocation} from 'react-router-dom'

export default function ShowSidebar({ isUserLoggedIn, loggedInUserId }) {
  const location = useLocation();
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
        <SuggestionAccounts isUserLoggedIn={isUserLoggedIn} loggedInUserId = {loggedInUserId}/>
      </div>
      <div className={styles.yourTopAccounts}>
        <YourTopAccounts isUserLoggedIn={isUserLoggedIn} loggedInUserId = {loggedInUserId}/>
      </div>
      <div>
        <SidebarFooter />
      </div>
    </div>
  );
}
