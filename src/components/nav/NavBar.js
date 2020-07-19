import React from "react";
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  // const handleLogout = () => {
  //   props.clearUser();
  //   props.history.push('/');
  // }

  return (
    <nav>
      <ul className="container">
        <li>
          <Link className="nav-link" to="/"> Home </Link>
        </li>
        <li>
          <Link className="nav-link" to="/messages"> &#x1F4AC; Messages </Link>
        </li>
        <li>
          <Link className="nav-link" to="/articles"> &#x1F4F0; Articles </Link>
        </li>
        <li>
          <Link className="nav-link" to="/events"> &#x1F4C5; Events </Link>
        </li>
        <li>
          <Link className="nav-link" to="/tasks"> &#x1F4DD; Tasks </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;