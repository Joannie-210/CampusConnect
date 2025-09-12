import React, { useState } from 'react';
import galleryData from '../data/events.json'; 
import '../styles/Gallery.css';

export default function Gallery() {
  const [groupBy, setGroupBy] = useState('All');
  const images = galleryData.filter(
    (g) => groupBy === 'All' || g.category === groupBy
  );

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Our Gallery of Events</h2>

      <div className="gallery-controls">
        <select
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
          className="gallery-select"
        >
          <option>All</option>
          <option>Technical</option>
          <option>Cultural</option>
          <option>Sports</option>
          <option>Law</option>
          <option>Theatre Arts</option>
          <option>Trade Fair</option>
        </select>
      </div>

      <div className="gallery-grid">
        {images.map((i) => (
          <figure key={i.id} className="gallery-thumb">
            <img src={i.image} alt={i.title} />
            <figcaption>{i.title} — {i.date}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
