import React, { useState } from "react";
import UserCard from "./components/auth/UserCard";
import FriendList from "./components/friends/FriendList";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import "./Main.css"

const NutShell = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // const clearUser = () => {
  //   sessionStorage.clear()
  //   setHasUser(isAuthenticated())
  // }

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <header>
        <div className="site-title">
          <picture>
            <img src="./nutshell2logo.png" alt="logo" className="bannerLogo" />
          </picture>
        </div>
      </header>
      
        <ApplicationViews hasUser={hasUser} setUser={setUser} />

    </>
  );
};

export default NutShell;
