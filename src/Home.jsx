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
            ...you'll need to fill out the
            <a href="https://eforms.state.gov/Forms/ds86_pdf.PDF">DS-86</a>
            If you want to use the form filler to fill it out online, use{" "}
            <a href="https://pptform.state.gov/PassportWizardMain.aspx">
              this link
            </a>
          </div>
          <div>
            {" "}
            <span>**RECOMMENDED**</span> Ideally, you'll actually want to apply
            online{" "}
            <a href="https://travel.state.gov/content/travel/en/passports/have-passport/renew-online.html">
              here
            </a>
            . There are some restrictions, but I recommend applying online if
            you can.
          </div>
          <div className="card-arrow">↓</div>
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
        <div className="card-arrow">↓</div>
      </div>

      <div className="card card4">
        <div className="card-content">
          You'll also need your <strong>supporting documents</strong>:
          <ul>
            <li>Your most recent U.S. passport</li>
            <li>Passport photo (2" x 2")</li>
            <li>Payment for fees</li>
          </ul>
          <em>
            Note: If your passport was damaged, lost, or stolen, you may need
            additional documents.
          </em>
        </div>
      </div>

      <div className="card card3">
        <div className="card-content">
          Next, you'll need to gather your <strong>supporting documents</strong>
          :
          <ul>
            <li>
              Proof of U.S. citizenship (
              <a
                href="https://docs.google.com/spreadsheets/d/1l3xQERijEXlgj_w8g6G62krdeLwqX2lpt09o35Sd3sI/edit?gid=857010838#gid=857010838"
                target="_blank"
                rel="noopener noreferrer"
              >
                birth certificate
              </a>
              , naturalization certificate, etc.)
            </li>
            <li>Photo identification (driver's license, military ID, etc.)</li>
            <li>Passport photo (2" x 2")</li>
            <li>Payment for fees</li>
          </ul>
        </div>
        <div className="card-arrow">↓</div>
      </div>

      <div className="card card7">
        <div className="card-content">
          Next, you'll need to gather your <strong>supporting documents</strong>
          :
          <ul>
            <li>
              Proof of U.S. citizenship (
              <a
                href="https://docs.google.com/spreadsheets/d/1l3xQERijEXlgj_w8g6G62krdeLwqX2lpt09o35Sd3sI/edit?gid=857010838#gid=857010838"
                target="_blank"
                rel="noopener noreferrer"
              >
                birth certificate
              </a>
              , naturalization certificate, etc.)
            </li>
            <li>Photo identification (driver's license, military ID, etc.)</li>
            <li>Passport photo (2" x 2")</li>
            <li>Payment for fees</li>
            <li>Supplementary documents (see below)</li>
          </ul>
        </div>
        <div className="card-arrow">↓</div>
      </div>

      <div className="card card6">
        <div className="card-content">
          <strong>Additional documents some people might need:</strong>
          <ul>
            <li>
              <a href="https://docs.google.com/spreadsheets/d/1chrp-sViyX6zzisFwULIWmFz1EU_lF9_7htXBLpmHo0/edit?gid=246470848#gid=246470848">
                Request marriage certificate
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1l3xQERijEXlgj_w8g6G62krdeLwqX2lpt09o35Sd3sI/edit?gid=857010838#gid=857010838"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request birth certificate
              </a>
            </li>
            <li>
              <a href="https://travel.state.gov/content/travel/en/passports/have-passport/change-correct.html">
                Name change request
              </a>
            </li>
            <li>
              <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html">
                Gender marker change request
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
