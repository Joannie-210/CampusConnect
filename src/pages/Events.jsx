import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import eventsData from '../data/events.json'
import '../styles/Events.css'


export default function Events(){
const [q, setQ] = useState('')
const [filter, setFilter] = useState('All')
const [sort, setSort] = useState('date')


let items = eventsData.filter(e => (
e.title.toLowerCase().includes(q.toLowerCase()) || e.description.toLowerCase().includes(q.toLowerCase())
))
if(filter !== 'All') items = items.filter(e => e.category === filter)
if(sort === 'date') items = items.sort((a,b) => new Date(a.date) - new Date(b.date))
if(sort === 'name') items = items.sort((a,b) => a.title.localeCompare(b.title))


return (
<div className="events-page">
<h2>Event Catalog</h2>
<div className="controls">
  <input placeholder="Search events" value={q} onChange={e=>setQ(e.target.value)} />
    <select value={filter} onChange={e=>setFilter(e.target.value)}>
       <option>All</option>
       <option>Technical</option>
       <option>Cultural</option>
       <option>Sports</option>
    </select>
<select value={sort} onChange={e=>setSort(e.target.value)}>
<option value="date">Date</option>
<option value="name">Name</option>
</select>
</div>


<div className="event-list">
{items.map(ev => (
<article key={ev.id} className="event-card">
<img src={ev.image} alt="" />
<div className="info">
<h3>{ev.title}</h3>
<p className="meta">{new Date(ev.date).toLocaleDateString()} • {ev.time} • {ev.venue}</p>
<p>{ev.description}</p>
<div className="actions">
<Link to={`/events/${ev.id}`} className="btn-small">Details</Link>
<button className="btn-small ghost" onClick={()=>{
sessionStorage.setItem('bookmark_'+ev.id, JSON.stringify(ev))
alert('Bookmarked for this session')
}}>Bookmark</button>
</div>
</div>
</article>
))}
</div>
</div>
)
}