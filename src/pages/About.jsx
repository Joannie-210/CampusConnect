import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

// Assets
import event from "../assets/AboutAssets/event.jpg";
import Aptech_Limited_Logo from "../assets/AboutAssets/Aptech_Limited_Logo.svg.png";
import middleSex from "../assets/AboutAssets/middleSex.jpg";
import years from "../assets/AboutAssets/years.jpg";
import Alumni from "../assets/AboutAssets/Alumni.webp";
import bestIT from "../assets/AboutAssets/bestIT.jpg";
import State from "../assets/AboutAssets/State-of-the-art labs.jpg";
import Partnership from "../assets/AboutAssets/Partnership.jpeg";
import Hackathon from "../assets/AboutAssets/Hackathon.jpg";
import Robotics from "../assets/AboutAssets/Robotics.jpeg";
import Dance from "../assets/AboutAssets/Dance competition.jpg";
import MusicNights from "../assets/AboutAssets/Music-Nights.jpg";
import international from "../assets/AboutAssets/international_day.jpg";
import AlumniMeet from "../assets/AboutAssets/AlumniMeet.jpg";
import BloodDonation from "../assets/AboutAssets/Blood-Donation.jpeg";
import Intercollege from "../assets/AboutAssets/Inter-college Sports.webp";
import aptechlocation from "../assets/AboutAssets/aptechlocation.webp";

/* ================== Data ================== */
const slides = [
  { img: Alumni, title: "About CampusConnect" },
  { img: event, title: "CampusConnect is an official event" },
  { img: Intercollege, title: "Stay Engaged" },
];

const aboutevents = [
  { id: 1, title: "Hackathon", description: "24-hour coding marathon where teams build innovative solutions.", image: Hackathon },
  { id: 2, title: "Robotics Championship", description: "Showcasing cutting-edge robotics in inter-college competitions.", image: Robotics },
  { id: 3, title: "Annual Day", description: "Celebration of 120+ nationalities in our vibrant community.", image: international },
  { id: 4, title: "Music Nights", description: "Bands, DJs, and professional artists lighting up the campus.", image: MusicNights },
  { id: 5, title: "Dance Competitions", description: "Energetic performances showcasing talent and teamwork.", image: Dance },
  { id: 6, title: "Sports Meet", description: "Athletes from Aptech and partners competing in various sports.", image: Intercollege },
  { id: 7, title: "Blood Donation", description: "Life-saving initiatives with hospitals and NGOs.", image: BloodDonation },
  { id: 8, title: "Alumni Meet", description: "Gathering of past graduates for mentorship and networking.", image: AlumniMeet },
];

const timelines = [
  { month: "Jan-Feb", title: "Sports Meet", description: "Competitions in football, basketball, and more." },
  { month: "Mar-Apr", title: "Hackathon", description: "24-hour coding challenge solving real-world problems." },
  { month: "May-Jun", title: "Cultural Day", description: "Performances, exhibitions, and celebrations of diversity." },
  { month: "Jul-Aug", title: "Blood Donation", description: "Students and staff contribute to life-saving causes." },
  { month: "Sep-Oct", title: "Tech & Robotics Expo", description: "Cutting-edge projects and inter-college robotics." },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-conta">

      {/* Hero Slider */}
      <div className="aboutus" data-aos="fade-up">
        <div
          className="about-usslider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="aboutSlide" key={i}>
              <img src={slide.img} alt={slide.title} />
              <div className="about-lay">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section className="about-overview" data-aos="fade-right">
        <header className="about-overview-header">
          <h2>College Overview</h2>
          <p>
            Aptech Global Learning Institute (Port Harcourt, Nigeria), affiliated with 
            <strong> Middlesex University, London</strong> since 2005. Renowned for 
            excellence in tech education and innovative learning.
          </p>
          <p>
            Our campus includes modern libraries, collaborative spaces, and 
            innovation hubs that support both technical and creative development.
          </p>
        </header>

        <div className="about-card-overview">
          {[
            { img: Aptech_Limited_Logo, title: "Aptech Institute", desc: "Excellence in global tech education" },
            { img: aptechlocation, title: "Location", desc: "MBM Plaza, Port Harcourt, Rivers State" },
            { img: middleSex, title: "Affiliation", desc: "Middlesex University, London" },
          ].map((card, i) => (
            <article
              key={i}
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              onClick={() => setModalImage(card.img)}
            >
              <div className="card-image">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                {card.desc && <p>{card.desc}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="about-highlights" data-aos="fade-up">
        <h2>
          Campus <i style={{ fontStyle: "normal", color: "#ffaa00" }}>Highlights</i> & Recognitions
        </h2>
        <p>Proudly recognized for academic excellence, innovation, and student life.</p>
        <ul>
          <li>Top 10 in Nigeria</li>
          <li>Global Partnerships</li>
          <li>Best IT Training Institute 2021</li>
          <li>15+ Years of Excellence</li>
          <li>10,000+ Alumni worldwide</li>
          <li>State-of-the-art labs & hubs</li>
        </ul>

        <div className="about-cards-hights">
          {[years, Partnership, bestIT, Alumni, State].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="highlight"
              data-aos="zoom-in-up"
              data-aos-delay={i * 200}
              onClick={() => setModalImage(img)}
            />
          ))}
        </div>

        {modalImage && (
          <div className="modal-overlay" onClick={() => setModalImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModalImage(null)}>✕</button>
              <img src={modalImage} alt="Enlarged view" />
            </div>
          </div>
        )}
      </section>

      {/* Events */}
      <section className="about-event" data-aos="fade-left">
        <header className="about-eventheader">
          <h2><i style={{ color: "#ffaa00", fontStyle: "normal" }}>Key</i> Annual Events</h2>
          <p>
            Our campus buzzes with Technical, Cultural, and Sports events each year. These highlights bring our community together.
          </p>
        </header>

        <div className="about-event-container">
          {aboutevents.map((ev, i) => (
            <div
              key={ev.id}
              className="AevenetCard"
              data-aos="flip-left"
              data-aos-delay={i * 100}
            >
              <img src={ev.image} alt={ev.title} />
              <div className="Aevent-lay">
                <h3>{ev.title}</h3>
                <p style={{ color: "#cdcdcd", textAlign: "left", fontSize: "14px", fontFamily: "sans-serif" }}>
                  {ev.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timelines */}
      <section className="about-timelines" data-aos="fade-up">
        <h2>Annual Timeline of Events</h2>
        <div className="acounttimelines">
          {timelines.map((t, i) => (
            <div
              key={i}
              className="about-timelines-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="about-timelines-month">{t.month}</div>
              <div className="about-timelines-content">
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-joinus" data-aos="zoom-in">
        <h2>Join Us and Be Part of the Excitement!</h2>
        <p>
          Explore, participate, and celebrate with us through competitions, cultural nights, and community drives.
        </p>
        <div className="join-btn">
          <button>
            <Link to="/events">Explore Events →</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
