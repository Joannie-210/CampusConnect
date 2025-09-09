import React, {useState} from 'react'
import galleryData from '../data/events.json' // reuse images for demo
import '../styles/Gallery.css'


export default function Gallery(){
const [groupBy, setGroupBy] = useState('All')
const images = galleryData.filter(g => groupBy==='All' || g.category===groupBy)
return (
<div className="gallery-page">
<h2>Gallery</h2>
<div className="gallery-controls">
<select value={groupBy} onChange={e=>setGroupBy(e.target.value)}>
<option>All</option>
<option>Technical</option>
<option>Cultural</option>
<option>Sports</option>
</select>
</div>
<div className="grid">
{images.map(i=> (
<figure key={i.id} className="thumb">
<img src={i.image} alt={i.title} />
<figcaption>{i.title} — {i.date}</figcaption>
</figure>
))}
</div>
</div>
)
}