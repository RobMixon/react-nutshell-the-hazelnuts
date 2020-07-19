import React from "react";
// import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/login');
  }

  return (
    <nav>
      <ul className="container">
        {props.hasUser
          ? <li>
              <Link className="nav-link" to="/"> 
              <span role="img" aria-label="home">&#x1F3E0;</span> 
              Home 
              </Link>
          </li>
          : null}
        {props.hasUser
          ? <li>
              <Link className="nav-link" to="/messages"> 
              <span role="img" aria-label="message">&#x1F4AC;</span> 
              Messages 
              </Link>
          </li>
          : null}
        {props.hasUser
          ? <li>
              <Link className="nav-link" to="/articles"> 
              <span role="img" aria-label="article">&#x1F4F0; </span>
              Articles 
              </Link>
          </li>
          : null}
        {props.hasUser
          ? <li>
              <Link className="nav-link" to="/events"> 
              <span role="img" aria-label="event">&#x1F4C5;</span> 
              Events 
              </Link>
            </li>
          : null}
        {props.hasUser
          ? <li>
              <Link className="nav-link" to="/tasks"> 
              <span role="img" aria-label="task">&#x1F4DD;</span> 
              Tasks 
              </Link>
          </li>
          : null}
        {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}> 
                <span role="img" aria-label="logout">&#x1F52A;</span> 
                Logout 
                </span>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
      </ul>
    </nav>
  );
};

export default NavBar;