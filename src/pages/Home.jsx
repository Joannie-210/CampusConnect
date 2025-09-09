import React from 'react'
import { Link } from 'react-router-dom'
import events from '../data/events.json'
import '../styles/Home.css'


export default function Home(){
const upcoming = events.filter(e => new Date(e.date) >= new Date()).slice(0,3)
return (
<div className="home-page">
  <section className="hero">
   <div className="hero-text">
<h1>Welcome to CampusConnect</h1>
<p>Stay Updated, Stay Involved — discover campus events and activities.</p>
<Link to="/events" className="btn">Browse Events</Link>
</div>
<div className="hero-banner" aria-hidden>
{/* banner area: could be slideshow */}
<div className="banner-placeholder">College Event Highlights</div>
</div>
</section>


<section className="highlights">
<h2>Upcoming Highlights</h2>
<div className="cards">
{upcoming.map(ev => (
<article key={ev.id} className="card">
<img src={ev.image} alt={ev.title} />
<div className="card-body">
<h3>{ev.title}</h3>
<p className="meta">{new Date(ev.date).toLocaleDateString()} • {ev.venue}</p>
<p>{ev.description}</p>
<Link to={`/events/${ev.id}`} className="small-link">Learn more</Link>
</div>
</article>
))}
</div>
</section>
</div>
)
}