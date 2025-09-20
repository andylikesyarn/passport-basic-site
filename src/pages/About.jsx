import { useState } from "react";
import gftoImage from "../assets/GTFO!.png";
import "../Home.css";
import andysFaceImage from "../assets/andys-face.png";

function About() {
  return (
    <div className="about-page">
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      <h1>About QTS Passport Guide</h1>

      <div className="change-cards-container">
        <div className="card">
          <div className="card-content">
            <h3>What is GTFO?</h3>
            <p>
              <strong>
                This site is maintained by Andy Stowers Forest, founder of QT
                Support Services, an org dedicated to helping trans, queer, and
                other folks GTFO of the US.
              </strong>{" "}
              <img></img>
              I'm currently a Founder-in-Residence in the{" "}
              <a href="https://bubble.io/immerse">Bubble Immerse program</a>,
              and built this site for GTFO workshops hosted in conjunction with{" "}
              <a href="https://themultiverse.school/">the Multiverse School.</a>{" "}
              If you want to follow me, you can find me on{" "}
              <a href="https://www.instagram.com/andysforest/">Instagram</a> or{" "}
              <a href="https://www.linkedin.com/in/andyforest/">LinkedIn</a>.
            </p>
            <div className="container-about">
              {" "}
              <img src={andysFaceImage} className="andys-face"></img>
              <p>
                <strong>
                  {" "}
                  If you want to support to my work and make passports more
                  accessible to more people, you can donate on Venmo at
                  @qt-services on CashApp at $andysforest, or{" "}
                  <a href="buymeacoffee.com/stowersanda">buy me a coffee</a>.
                </strong>
                <br></br>
                <br></br>
                If you find any errors on this site, dm me on Insta or LinkedIn!
                Thanks for reading this, and I hope you're able to get to where
                you want to go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
