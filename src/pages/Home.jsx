import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import events from '../data/events.json'
import '../styles/Home.css'
import colimage1 from '../assets/uni.jpg'

import { Clock } from "lucide-react";


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
    .filter(e => new Date(e.date) >= new Date())
    .slice(0, 6);

  return (
    <>
      <div className="home-page">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to CampusConnect!</h1>
            <p>
              Stay Updated, Stay Involved — discover campus events and activities.
            </p>
            <div className="btn-div">
              <Link to="/events" className="home-btn">
                Browse Events
                <span className="btn-icon">↗</span>
              </Link>
              <Link to="/events" className="home-btn-2">
                About us
                <span className="btn-icon2">↗</span>
              </Link>
            </div>
          </div>
          <div className='home-hero-image'>
          <img
            src={colimage1}
            alt="college students"
            className="banner-img"
          />
          </div>
        </section>
      </div>

      <div className="highlights">
        <h2>Upcoming Highlights</h2>
        <p className="section-subtitle">
          Don’t miss out — here are the top events happening on campus.
        </p>

        <div className="cards">
          {upcoming.length > 0 ? (
            upcoming.map(ev => {
              const { days, hours, minutes, seconds } = useCountdown(ev.date);
              return (
                <article key={ev.id} className="card">
                  <img src={ev.image} alt={ev.title} className="card-img" />

                  <div className="card-body">
                    <h3>{ev.title}</h3>
                    <p className="meta">
                      {new Date(ev.date).toLocaleDateString()} • {ev.venue}
                    </p>
                    <p className="description">{ev.description}</p>

                    {/* countdown */}
                    <p className="countdown">
                      <Clock size={16} style={{ marginRight: "6px" }} />
                      {days}d {hours}h {minutes}m {seconds}s
                    </p>

                    <Link to={`/events/${ev.id}`} className="small-link">
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
        <p style={{color: '#ffaa00', textAlign: "center", marginTop: "7px"}}>Swipe left ⟶ </p>
      </div>
            
      <section className="home-about">
        <div className="home-about-inner">
          <div className="home-about-text">
            <h2>About Us</h2>
            <p>
              CampusConnect is your one-stop hub for staying engaged with 
              campus life. We make it easy to discover, track, and attend 
              events that matter to you — from workshops and sports to 
              cultural festivals and student meetups.
            </p>
            <Link to="/about" className=" home-about-btn">
              Learn More →
            </Link>
          </div>
          <div className="home-about-image">
            <img src={colimage1} alt="students collaborating" />
          </div>
        </div>
      </section>

    </>
  );
}
