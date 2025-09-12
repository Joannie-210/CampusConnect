import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import events from "../data/events.json";
import "../styles/Home.css";
import colimage1 from "../assets/uni.jpg";
import Testimonial from "../components/Testimonial";
import { Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function useCountdown(eventDate) {
  const calculateTimeLeft = () => {
    const diff = new Date(eventDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return timeLeft;
}

export default function Home() {
  const upcoming = events
    .filter((e) => new Date(e.date) >= new Date())
    .slice(0, 6);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text" data-aos="fade-right">
            <h1>
              Welcome to Campus
              <i style={{ fontStyle: "normal", color: "#ffaa00" }}>Connect!</i>
            </h1>
            <p>
              Stay Updated, Stay Involved — discover campus events and
              activities.
            </p>
            <div className="btn-div" data-aos="zoom-in" data-aos-delay="300">
              <Link to="/events" className="home-btn">
                Browse Events
                <span className="btn-icon">↗</span>
              </Link>
              <Link to="/about" className="home-btn-2">
                About us
                <span className="btn-icon2">↗</span>
              </Link>
            </div>
            <div className="alt-home-btn-div" data-aos="fade-up" data-aos-delay="500">
              <Link to="/events" className="alt-home-btn">
                Browse Events
              </Link>
              <Link to="/about" className="alt-home-btn-2">
                About us
              </Link>
            </div>
          </div>

          <div className="home-hero-image" data-aos="fade-up">
            <img
              src={colimage1}
              alt="college students"
              className="banner-img"
            />
          </div>
        </section>
      </div>

   
      <div className="highlights" data-aos="fade-up">
        <h2>Upcoming Highlights</h2>
        <p className="section-subtitle">
          Don’t miss out — here are the top events happening on campus.
        </p>

        <div className="cards">
          {upcoming.length > 0 ? (
            upcoming.map((ev, i) => {
              const { days, hours, minutes, seconds } = useCountdown(ev.date);
              return (
                <article
                  key={ev.id}
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 150}
                >
                  <img src={ev.image} alt={ev.title} className="card-img" />

                  <div className="card-body">
                    <h3>{ev.title}</h3>
                    <p className="meta">
                      {new Date(ev.date).toLocaleDateString()} • {ev.venue}
                    </p>
                    <p className="description">{ev.description}</p>

                    <p className="countdown">
                      <Clock size={16} style={{ marginRight: "6px" }} />
                      {days}d {hours}h {minutes}m {seconds}s
                    </p>

                    <Link to={`/events`} className="small-link">
                      Learn more <span className="arrow">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="no-events">No upcoming events. Check back soon!</p>
          )}
        </div>
        <p
          style={{
            color: "#ffaa00",
            textAlign: "center",
            marginTop: "7px",
          }}
        >
          Swipe left ⟶
        </p>
      </div>

      <section className="home-about" data-aos="fade-up">
        <div className="home-about-inner">
          <div className="home-about-text" data-aos="fade-right">
            <h2>About Us</h2>
            <p>
              CampusConnect is your one-stop hub for staying engaged with campus
              life. We make it easy to discover, track, and attend events that
              matter to you — from workshops and sports to cultural festivals
              and student meetups.
            </p>
            <Link to="/about" className="home-about-btn">
              Learn More →
            </Link>
          </div>
          <div className="home-about-image" data-aos="fade-left">
            <img src={colimage1} alt="students collaborating" />
          </div>
        </div>
      </section>

     
      <div data-aos="zoom-in">
        <Testimonial />
      </div>


      <section className="home-cta" data-aos="fade-up">
        <h2>Stay Connected, Stay Involved</h2>
        <p>
          Be the first to know about the latest campus happenings. Explore now
          and make the most of your college life.
        </p>
        <Link to="/events" className="home-cta-btn">
          View All Events →
        </Link>
      </section>
    </>
  );
}
