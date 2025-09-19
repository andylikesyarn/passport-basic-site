import { useState } from "react";
import gftoImage from "../assets/GTFO!.png";
import "../Home.css";

function Appointments() {
  return (
    <div className="appointments-page">
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      <h1>Passport Appointments</h1>

      <div className="change-cards-container">
        <div className="card">
          <div className="card-content">
            <h3>Where to Apply for Your Passport</h3>
            <p>
              You can apply for a U.S. passport at several types of locations:
            </p>
            <ul>
              <li>
                <strong>Post Offices:</strong> Most USPS locations accept
                passport applications
              </li>
              <li>
                <strong>Passport Agencies:</strong> Regional agencies for
                expedited service
              </li>
              <li>
                <strong>Passport Acceptance Facilities:</strong> Libraries,
                courthouses, and government offices
              </li>
              <li>
                <strong>Clerks of Court:</strong> County and municipal court
                offices
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Do You Need an Appointment?</h3>
            <p>
              <strong>For Most Applications:</strong> Walk-ins are typically
              accepted at most passport acceptance facilities, though wait times
              may vary.
            </p>
            <p>
              <strong>Appointments Recommended For:</strong>
            </p>
            <ul>
              <li>Passport agencies (appointments usually required)</li>
              <li>Busy locations during peak travel seasons</li>
              <li>Complex applications (name changes, corrections)</li>
              <li>Child passport applications</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>How to Schedule an Appointment</h3>
            <p>
              <strong>Online:</strong> Use the official State Department
              appointment system at{" "}
              <a
                href="https://passportappointment.travel.state.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                passportappointment.travel.state.gov
              </a>
            </p>
            <p>
              <strong>By Phone:</strong> Call the National Passport Information
              Center at <strong>1-877-487-2778</strong> or{" "}
              <strong>1-888-874-7793</strong> (TDD/TTY)
            </p>
            <p>
              <strong>Local Facilities:</strong> Contact your local post office
              or acceptance facility directly to check their appointment
              policies.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>What to Bring to Your Appointment</h3>
            <ul>
              <li>
                Completed passport application form (DS-11 for new applicants,
                DS-82 for renewals)
              </li>
              <li>
                Proof of U.S. citizenship (birth certificate, previous passport,
                etc.)
              </li>
              <li>
                Photo identification (driver's license, military ID, etc.)
              </li>
              <li>Passport photo (2" x 2")</li>
              <li>
                Payment for fees (check, money order, or credit/debit card -
                varies by location)
              </li>
              <li>Any additional documents for name changes or corrections</li>
            </ul>
            <p>
              <em>
                Note: Bring original documents and photocopies. Originals will
                be returned to you.
              </em>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Find Passport Acceptance Facilities Near You</h3>
            <p>
              Use the official State Department facility search tool to find
              locations that accept passport applications in your area:
            </p>
            <p>
              <a
                href="https://iafdb.travel.state.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="route-button"
              >
                Find Locations Near You
              </a>
            </p>
            <p>
              You can search by ZIP code, city, or state to find the most
              convenient location with current hours and contact information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
