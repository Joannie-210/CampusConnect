import React from 'react'
import { Link } from 'react-router-dom'
import events from '../data/events.json'
import '../styles/Home.css'
import colimage1 from '../assets/colimage1.jpeg'


export default function Home(){
const upcoming = events.filter(e => new Date(e.date) >= new Date()).slice(0,6)
return (
  <>
<div className="home-page">
  <section className="hero">
   <div className="hero-text">
<h1>Welcome to CampusConnect!</h1>
<p>Stay Updated, Stay Involved — discover campus events and activities.</p>
<div className='btn-div'>
<Link to="/events" className="btn">
  Browse Events
  <span className="btn-icon">↗</span>
</Link>
<Link to="/events" className="btn-2">
  About us
  <span className="btn-icon2">↗</span>
</Link>
</div>
</div>
<img src={colimage1} alt="college students" className='banner-img'/>
</section>



</div>
<div className="highlights">
  <h2>Upcoming Highlights</h2>
  <p className="section-subtitle">
    Don’t miss out — here are the top events happening on campus.
  </p>

  <div className="cards">
    {upcoming.length > 0 ? (
      upcoming.map(ev => (
        <article key={ev.id} className="card">
          <img src={ev.image} alt={ev.title} className="card-img" />

          <div className="card-body">
            <h3>{ev.title}</h3>
            <p className="meta">
              {new Date(ev.date).toLocaleDateString()} • {ev.venue}
            </p>
            <p className="description">{ev.description}</p>
            <Link to={`/events/${ev.id}`} className="small-link">
              Learn more <span className="arrow">↗</span>
            </Link>
          </div>
        </article>
      ))
    ) : (
      <p className="no-events">No upcoming events. Check back soon!</p>
    )}
  </div>
</div>


</>
)
}