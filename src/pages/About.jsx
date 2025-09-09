import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import event from "../assets/event.jpg";
const About = () => {
  return (
    <>
      <div className="About-Container">
        <div className="About-into">
          <h2 className="About-hearder">About CampusConnect</h2>
          <p className="about-intro">
            This portal centralizes event information for students, faculty and
            visitors or potential Sponsors. It showcases upcoming and past
            events, galleries, and contact details for organizers.
          </p>
          <div className="about-body-flex">
            <div className="about-CampusConnect-text">
              <p className="about-paragraph">
                CampusConnect is an official event for{" "}
                <a href="https://www.aptechglobaltraining.com" target="_blank">
                  <span>Aptech Global Learning</span>{" "}
                </a>
                Institute, Affiliated with{" "}
                <a href="https://www.mdx.ac.uk" target="_blank">
                  <span>MiddleSex University London</span>
                </a>
                , where you join current student on the first to third year of
                their course with computing degree.
              </p>
              <p className="about-paragraph">
                Our Platform Centralizes all <b>Technical Events</b> like
                (TechFest, Hackathon, or Robotics Championship),{" "}
                <b>Cultural Events</b> Such as (Annual Day, Music Nights, or
                Dance Competitions), and <b>Social Events</b> Such as(
                Inter-college Sports Meet, Blood Donation Drives, or Alumni Meet
                ) are hosted on campus.
              </p>
              <p className="about-paragraph">
                By Offering Detailed Schedules, Desciptions and Insights Into
                each events, CampusConnect ensures that
                students,faculty,alumni,and sponsors can stay fully aware or
                informed and actively engage in the campus life.
              </p>
              {/* for explore Events button to take you to the event site */}
              <Link to="/event" className="about-button">
                Explore Events
              </Link>
            </div>
            <div className="about-CampusConnect-image">
              <img src={event} alt="Event-image" />
              <div className="about-overlay">
                <Link to="/Gallery" className="overlay-text">
                  <p>View Gallery</p>
                </Link>
              </div>
            </div>
          </div>

          <section className="College-Overview">
            <div className="college-area">
              <h2>College Overview</h2>
              <p className="collage-Over-text">
                Aptech Global Learning Institute is Located at PortHarcourt
                Nigeria, is Affiliated with Middlesex University,London through
                an academic partnership for top-up degrees.Established in
                2005,it is recognized for their excellence technology education
                and innovation learning, One of the best University we have.
              </p>
              <p className="collage-Over-text">
                Our Campus are well equipped with modern libraries,
                collaborative learning spaces, and dedicated innovation hubs to
                support both technical and creative development.
              </p>
            </div>
                <div className="card-collage">
                    <div className="card-name-collage">Name</div>
                    <div className="card-location-collage">Location</div>
                    <div className="card-affiliated-collage">Affiliation</div>
                </div>
          </section>

          {/* <section className="key-events">
            <h3>Key Annual Events</h3>
            <ul>
              <li>TechFest — project exhibitions and hackathons</li>
              <li>Cultural Week — music, theatre and dance</li>
              <li>Sports Meet — athletics and team championships</li>
            </ul>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default About;
