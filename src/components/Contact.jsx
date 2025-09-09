import React, { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form slide-up" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
