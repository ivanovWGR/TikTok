import React, { useState } from "react";
import { FollowingBtnUnactive } from "./Following/FollowingBtn";
import { FollowingBtnActive } from "./Following/FollowingBtn";
import SidebarLoginBtutton from "./SidebarLogin/SidebarLoginBtn";
import SidebarFooter from "./SidebarFooter/sidebarFooter";
import styles from "./Sidebar.module.css";
import SuggestionAccounts from "./SuggestedAccounts/SuggestedAccounts";
import YourTopAccounts from "./YourTopAccounts/YourTopAccounts";
import followUnactive from "../date/img/followUnactive.png";
import followActive from "../date/img/followActive.png";
import forYouActive from "../date/img/forYouActive.png";
import forYouUnactive from "../date/img/forYouUnactive.png";

export default function ShowSidebar({ isUserLoggedIn }) {
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
  return (
    <div className={styles.siderConteiner}>
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
        <SuggestionAccounts />
      </div>
      <div className={styles.yourTopAccounts}>
        <YourTopAccounts />
      </div>
      <div>
        <SidebarFooter />
      </div>
    </div>
  );
}
