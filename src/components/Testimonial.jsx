import React from "react";
import "../styles/Testimonial.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Adeyemi",
    role: "Student Leader, Arts Faculty",
    text: "CampusConnect transformed how I stay informed about campus activities.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Okeke",
    role: "Tech Club President",
    text: "The platform elevated our club’s visibility on campus. Engagement has doubled!",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Fatima Hassan",
    role: "Medical Student",
    text: "It doesn’t just list events — it curates experiences aligned with my interests.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Sports Captain",
    text: "Finally, a platform that makes campus life easy to navigate and enjoy.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Students Are Saying</h2>

      <div className="testimonial-marquee">
        <div className="marquee-track">
          {testimonials.concat(testimonials).map((t, i) => (
            <div className="testimonial-card" key={i}>
              {/* Quote icon */}
              <Quote className="quote-icon" size={28} />

              <p className="testimonial-text">“{t.text}”</p>

              <div className="testimonial-footer">
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <div>
                  <h4 className="testimonial-name">{t.name}</h4>
                  <p className="testimonial-role">{t.role}</p>

                  {/* Rating stars */}
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <span
                        key={idx}
                        className={`star ${idx < t.rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
