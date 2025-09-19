import { useState } from "react";
import gftoImage from "./assets/GTFO!.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      <h1>Need a Passport? Here's what to do!</h1>
      <div className="cards-container">
        <div className="card card2">
          <div className="card-content">
            <div className="main-text">
              If you've <span>gotten a passport before as an adult</span>
            </div>
            <div className="card-arrow">↓</div>
            <Link to="/Renew" className="route-button">
              Click here
            </Link>
          </div>
        </div>

        <div className="card card1">
          <div className="card-content">
            <div className="main-text">
              If you've <span> NEVER gotten a passport before as an adult</span>
            </div>
            <div className="card-arrow">↓</div>
            <Link to="/new" className="route-button">
              Click here
            </Link>
          </div>
        </div>

        <div className="card card5">
          <div className="card-content">
            {" "}
            <span className="main-text">
              {" "}
              If you've gotten a passport before as an adult but you're changing
              your name or gender marker
            </span>
            <div className="card-arrow">↓</div>
            <Link to="/change" className="route-button">
              Click here
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
