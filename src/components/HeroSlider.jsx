import React, { useState, useEffect } from "react";
import "../styles/HeroSlider.css";

const slides = [
  { id: 1, text: "Modern Living Spaces", img: "https://picsum.photos/1200/600?1" },
  { id: 2, text: "Elegant Interiors", img: "https://picsum.photos/1200/600?2" },
  { id: 3, text: "Timeless Designs", img: "https://picsum.photos/1200/600?3" },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <img src={slides[index].img} alt={slides[index].text} />
      <div className="overlay">
        <h1 className="fade-in">{slides[index].text}</h1>
      </div>
    </div>
  );
}

export default HeroSlider;
