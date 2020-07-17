import React, { useState } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";

const NutShell = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default NutShell;
