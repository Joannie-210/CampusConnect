import React, { useState, useEffect } from "react";
import galleryData from "../data/events.json";
import "../styles/Gallery.css";

export default function Gallery() {
  const [groupBy, setGroupBy] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [transition, setTransition] = useState("");

  // ✅ Custom sorting: TechFest always above Theatre Arts, rest sorted by date
  const images = galleryData
    .filter((g) => groupBy === "All" || g.category === groupBy)
    .sort((a, b) => {
      // Special rule: TechFest 2025 always above Theatre Arts
      if (a.title === "TechFest 2025") return -1;
      if (b.title === "TechFest 2025") return 1;

      if (
        a.title === "Theatre Arts Students Presentation" &&
        b.title !== "TechFest 2025"
      )
        return 1;
      if (
        b.title === "Theatre Arts Students Presentation" &&
        a.title !== "TechFest 2025"
      )
        return -1;

      // For all others → sort by date (newest → oldest)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    setTransition("fade-left");
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setTransition("fade-right");
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <div className="gallery-page">
      <h2>Gallery</h2>

      <div className="gallery-layout">
        {/* Sidebar Filter */}
        <div className="gallery-controls">
          <label htmlFor="category-filter">Filter:</label>
          <select
            id="category-filter"
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
          >
            <option>All</option>
            <option>Technical</option>
            <option>Cultural</option>
            <option>Sports</option>
          </select>
        </div>

        {/* ✅ Gallery Grid with conditional "grid-large" class */}
        <div className={`grid ${groupBy !== "All" ? "grid-large" : ""}`}>
          {images.map((i, index) => {
            const isHighQuality = i.image.startsWith("http");
            const isCultural =
              i.title === "Cultural Week" ||
              i.title === "Theatre Arts Students Presentation";
            const className = isCultural
              ? "thumb cultural"
              : `thumb ${isHighQuality ? "high-quality" : "low-quality"}`;

            return (
              <figure
                key={i.id}
                className={className}
                onClick={() => openLightbox(index)}
              >
                <img src={i.image} alt={i.title} />
                <figcaption>
                  {i.title} — {i.date}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay active" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <span
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </span>
          <span
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#10095;
          </span>
          <img
            src={images[lightboxIndex].image}
            alt={images[lightboxIndex].title}
            className={`lightbox-img ${transition}`}
            onAnimationEnd={() => setTransition("")}
          />
        </div>
      )}
    </div>
  );
}
