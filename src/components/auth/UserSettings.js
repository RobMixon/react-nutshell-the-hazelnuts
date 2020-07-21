import { useState, } from "react";

const UserSettings = (props) => {

  const isAuthenticated = () => sessionStorage.getItem("user") !== null;

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  const [hasUser, setHasUser] = useState(isAuthenticated(props));

  const setUser = user => {
    sessionStorage.setItem("user", JSON.stringify(user));
    setHasUser(isAuthenticated(props));
  }
};

export default UserSettings