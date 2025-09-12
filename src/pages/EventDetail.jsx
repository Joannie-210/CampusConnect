import React from 'react'
import { useParams, Link } from 'react-router-dom'
import events from '../data/events.json'


export default function EventDetail(){
const { id } = useParams()
const ev = events.find(e=> e.id === Number(id))
if(!ev) return <div className="card">Event not found</div>
return (
<div className="deet-card">
<h2>{ev.title}</h2>
<img src={ev.image} alt={ev.title} style={{width:'100%',height:300,objectFit:'cover',borderRadius:8}} />
<p className="small">{new Date(ev.date).toLocaleString()} • {ev.venue}</p>
<p>{ev.desc}</p>
<p className="small">Organized by: {ev.department}</p>
<div style={{display:'flex',gap:8}}>
<button className="deet-btn" onClick={()=>{

const b = JSON.parse(sessionStorage.getItem('bookmarks')||'[]')
if(!b.includes(ev.id)){ b.push(ev.id); 
    sessionStorage.setItem('bookmarks', JSON.stringify(b)); 
    alert('Bookmarked for this session') } 
    else alert('Already bookmarked')
}}>Bookmark</button>
<Link to="/events" className="deet-btn" style={{background:'#6b7280'}}>Back to Events</Link>
</div>
</div>
)
}