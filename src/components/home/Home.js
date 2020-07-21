import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="homeContainer">
        <div className="homeContainer-contents">
        <section className="homeHeader">
          <h1>Your Nutshells</h1>
        </section>

        <section className="linkCards">

          <div className="messageLink-card">
            <Link className="nav-link" to="/messages">
              <div className="messageLink-contents" id="link-contents">
                <h1>MESSAGES</h1>
             
              </div>
            </Link>
          </div>

          <div className="articleLink-card">
            <Link className="nav-link" to="/articles">
              <div className="articleLink-contents" id="link-contents">
                <h1>ARTICLES</h1>              
              </div>
            </Link>
          </div>

          <div className="eventLink-card">
            <Link className="nav-link" to="/events">
              <div className="eventLink-contents" id="link-contents">
                  <h1>EVENTS</h1>
              </div>
            </Link>
          </div>

          <div className="taskLink-card">
            <Link className="nav-link" to="/tasks"> 
              <div className="taskLink-contents" id="link-contents">
                <h1>TASKS</h1>
              </div>
            </Link>
          </div>
        </section>
        </div>
      </main>
    </>
  );
};

export default Home;