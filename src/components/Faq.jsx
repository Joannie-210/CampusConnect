import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/About.css";
const faqData = [
  {
    question: "How do I register for an event?",
    answer: "Click the 'Register' button on the event card or in the event table, fill out your details, and submit the form."
  },
  {
    question: "Can I view past events?",
    answer: "Yes, past events are listed in the 'Past Events' section on the Events page."
  },
  {
    question: "Where can I find event details?",
    answer: "Click the 'More Details' button on any event card or the 'Details' button in the table view to see full event information."
  },
  {
    question: "Who can participate in campus events?",
    answer: "Most events are open to all students, but some may be restricted to specific departments or clubs. Check the event details for eligibility."
  },
  {
    question: "How do I contact the organizers?",
    answer: "Organizer contact information is usually provided in the event details. If not, reach out via the campus help desk."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((item, idx) => (
          <li key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleIndex(idx)}
              aria-expanded={openIndex === idx}
            >
              {item.question}
              {openIndex === idx ? (
                <FaChevronUp style={{ marginLeft: 8 }} />
              ) : (
                <FaChevronDown style={{ marginLeft: 8 }} />
              )}
            </button>
            {openIndex === idx && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;