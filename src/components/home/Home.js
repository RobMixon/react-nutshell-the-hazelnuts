import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="homeContainer">
        <section className="homeHeader">
          <h1>Your Nushells</h1>
        </section>

        <section className="linkCards">

          <div className="messageLink-card">
            <Link className="nav-link" to="/messages">
              <div className="messageLink-contents" id="link-contents">
                <div className="messageLink-image">
                  <img className="homeLink" src="./messageIcon.png" alt="messages" />

                </div>
                <div className="messageLink-title">
                  <h3 className="linkTitle">Messages</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="articleLink-card">
            <Link className="nav-link" to="/articles">
              <div className="articleLink-contents" id="link-contents">
                <div className="articleLink-image">
                  <img className="homeLink" src="./articleIcon.png" alt="articles" />

                </div>
                <div className="articleLink-title">
                  <h3 className="linkTitle">Articles</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="eventLink-card">
            <Link className="nav-link" to="/events">
              <div className="eventLink-contents" id="link-contents">
                <div className="eventLink-image">
                  <img className="homeLink" src="./eventIcon.png" alt="events" />

                </div>
                <div className="eventLink-title">
                  <h3 className="linkTitle">Events</h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="taskLink-card">
            <Link className="nav-link" to="/tasks"> 
              <div className="taskLink-contents" id="link-contents">
                <div className="taskLink-image">
                  <img className="homeLink" src="./taskIcon.png" alt="tasks" />

                </div>
                <div className="taskLink-title">
                  <h3 className="linkTitle">Tasks</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;