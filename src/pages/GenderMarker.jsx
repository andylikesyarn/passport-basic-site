import { Link } from "react-router-dom";
import "./GenderMarker.css";

function GenderMarker() {
  return (
    <div className="page-container">
      <h1>Sex Marker Changes</h1>

      <div className="content-section">
        <h2>Important Legal Updates</h2>
        <div className="alert-box">
          <p>
            <strong className="datestamp">
              THIS INFORMATION IS ACCURATE AS OF 22 SEPTEMBER 2025
            </strong>{" "}
            <br></br>
            <strong>Current Status (2025):</strong> Following Executive Order
            14168 and the court ruling in Orr v. Trump, there are specific
            procedures for changing sex markers on passports. The process now
            requires an attestation form.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>How to Request a Sex Marker Change</h2>
        <p>
          You are eligible to receive a passport with your sex marker of choice
          (M, F, or X) if you are a class member under the Orr v. Trump ruling.
          "Class members," in short refers to trans people, the beneficiaries of
          the lawsuit leveraged by several petitioners against Trump in
          opposition to{" "}
          <a href="https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/">
            {" "}
            the executive order
          </a>{" "}
          that limited the ability to change gender markers on passports.
        </p>

        <p>
          In order to get a gender marker changed if you are renewing a
          passport, you MUST submit your application with the attestation form{" "}
          <a href="https://travel.state.gov/content/dam/passports/forms-fees/Attestation%20Form.pdf">
            here
          </a>
          . If you are applying for a passport for the first time and all of
          your documentation lines up with the gender marker you are requesting
          AND you are requesting an M or F gender marker, it is likely not
          necessary to submit this attestation. If you are applying for a
          first-time passport and requesting an X or a gender marker other than
          the one on your supporting documents, you DO need to submit the
          attestation form.
        </p>

        <p>
          On some level, much of this process operates on discretion, meaning
          there are cases where some State Department employees could
          arbitrarily approve without proper documentation or deny with proper
          documentation: I've heard of BOTH of these happening, but would not
          count on arbitrary approval. I consider arbitrary denial is more
          likely, though I am often wrong.
        </p>

        <p>
          The reality of this scenario is that the rules change often. It is
          entirely possible based on recent developments that an application
          submitted today, 22 September, could be inadmissible by the time it
          reaches the state department. Additionally, submitting this
          information to the federal government means that you are{" "}
          <strong>
            directly giving the federal government a signed attestation that you
            are trans
          </strong>
          . Note also that an X gender marker is not admissible for all
          countries, and there are existing cases of READ IDs and passports with
          an X gender marker being deemed inadmissible for travel by the TSA. At
          the time of this writing, I would not advise folks request an X gender
          marker unless this is the ONLY condition under which you are willing
          to get a passport. If you can plausibly use the gender marker on your
          most recent passport, I do not recommend requesting a change.
        </p>
      </div>

      <div className="content-section">
        <h2>Gender Marker Process</h2>
        <p>
          <strong>Important:</strong> You must submit a completed "Attestation
          of Orr v. Trump Class Membership" form with your passport application.
          This form identifies you as a class member (aka, you are attesting
          that you are trans) and indicates which sex marker you want. However,
          the process differs slightly based upon what gender marker you want,
          as indicated below:
        </p>
        <div className="info-cards">
          <div className="info-card">
            <h4>M - Male</h4>
            <p>Check "M" on both the attestation and application form</p>
          </div>
          <div className="info-card">
            <h4>F - Female</h4>
            <p>Check "F" on both the attestation and application form</p>
          </div>
          <div className="info-card">
            <h4>X - Unspecified</h4>
            <p>
              Check "X" on attestation, but do NOT check "M" or "F" on
              application
            </p>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h2>Which Form Do I Need?</h2>
        <ul>
          <li>
            <strong>Form DS-11:</strong> First-time passport applicants or if
            you cannot renew by mail
          </li>
          <li>
            <strong>Form DS-82:</strong> Renewing an adult passport by mail (if
            eligible)
          </li>
          <li>
            <strong>Form DS-5504:</strong> Correcting an error on a passport
            issued within the last year at no charge
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Application Process</h2>
        <ol>
          <li>
            <strong>Download Forms:</strong> Get the appropriate passport
            application form (DS-11, DS-82, or DS-5504) and the Attestation of
            Orr v. Trump Class Membership form
            <ul>
              <li>
                If you're getting a first-time passport, check{" "}
                <Link to="/New">here</Link> for more details.
              </li>
              <li>
                If you're renewing your passport AND your current passport is
                MORE than a year old, check <Link to="/Renew">here</Link> for
                more details.
              </li>
              <li>
                If you're renewing and your current passport is LESS than a year
                old, check{" "}
                <a href="https://eforms.state.gov/Forms/ds5504_pdf.PDF">here</a>{" "}
                for more details. There is no charge from the Department of
                State if you are correcting a passport that is under a year old,
                but you may have to pay an appointment fee of $30 if you are
                submitting the form in person. I don't have a full explainer for
                this option yet.
              </li>
            </ul>
          </li>
          <li>
            <strong>Complete Attestation:</strong> Fill out the attestation form
            indicating your desired sex marker
          </li>
          <li>
            <strong>Complete Application:</strong> Fill out your passport
            application form
          </li>
          <li>
            <strong>Gather Documents:</strong> Collect required citizenship
            evidence, ID, and passport photo
          </li>
          <li>
            <strong>Submit Together:</strong> Send both the application and
            attestation form together
          </li>
          <li>
            <strong>Pay Fees:</strong> Include applicable passport fees
          </li>
        </ol>
      </div>

      <div className="content-section">
        <h2>Important Notes</h2>
        <div className="alert-box">
          <p>
            <strong>Attestation Required:</strong> If you submit an application
            without the attestation and the State Department determines you may
            be a class member, they will send you a letter requesting the
            attestation. You must submit it within 90 days.
          </p>
          <p>
            <strong>Technical Limitations:</strong> Due to current technical
            limitations, you cannot use the State Department's online form
            filler tool. You must download and complete PDF forms manually.
          </p>
          <p>
            <strong>International Travel:</strong> Many destinations only
            recognize male and female sex markers and do not have IT systems
            that can accept X sex markers. Check destination requirements before
            traveling with an X marker.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Need More Help?</h2>
        <div className="help-links">
          <Link to="/change" className="help-button">
            General Passport Changes Guide
          </Link>
          <Link to="/fees" className="help-button">
            Check Fees
          </Link>
          <Link to="/appointments" className="help-button">
            Find Passport Acceptance Facility
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Official Resources</h2>
        <ul>
          <li>
            <a
              href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official State Department Sex Marker Information
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms-fees/Attestation%20Form.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Attestation of Orr v. Trump Class Membership Form (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-11.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-11 (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-82.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-82 (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-5504.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-5504 (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GenderMarker;
