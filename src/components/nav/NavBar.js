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
    <header>
      <h1 className="site-title">
        Nutshell
        <br />
        <small>A Website for Chit Chat and Pictures of what you ate last night.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          <li>
            <Link className="nav-link" to="/messages"> Messages </Link>
          </li>
          <li>
            <Link className="nav-link" to="/articles"> Articles </Link>
          </li>
          <li>
            <Link className="nav-link" to="/events"> Events </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tasks"> Tasks </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login"> Login </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;