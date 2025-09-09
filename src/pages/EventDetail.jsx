import React from 'react'
import { useParams, Link } from 'react-router-dom'
import events from '../data/events.json'
import '../styles/EventDetail.css'


export default function EventDetail(){
const { id } = useParams()
const ev = events.find(e => e.id === id) || {}
return (
<div className="event-detail">
<Link to="/events" className="back">← Back to Events</Link>
<h2>{ev.title}</h2>
<p className="meta">{ev.date} • {ev.time} • {ev.venue}</p>
<img src={ev.image} alt="" className="detail-img" />
<p>{ev.description}</p>
<div className="organizer">
<h4>Organizer</h4>
<p>{ev.department} Office</p>
</div>
</div>
)
}