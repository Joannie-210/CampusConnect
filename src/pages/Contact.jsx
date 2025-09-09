import React from 'react'
import '../styles/Contact.css'


const contacts = [
{name:'Dr. A. Smith', role:'Event Coordinator', dept:'Computer Science', phone:'+234-800-111', email:'asmith@college.edu'},
{name:'Mary Johnson', role:'Student Lead', dept:'Cultural Club', phone:'+234-800-222', email:'mjohnson@college.edu'}
]


export default function Contact(){
return (
<div className="contact-page">
<h2>Contact</h2>
<div className="contacts">
{contacts.map(c=> (
<div key={c.email} className="contact-card">
<h3>{c.name}</h3>
<p>{c.role} — {c.dept}</p>
<p>Phone: {c.phone}</p>
<p>Email: {c.email}</p>
</div>
))}
</div>
<div className="map">
<iframe title="campus-map" src="https://www.google.com/maps/embed?pb=!1m18" loading="lazy"></iframe>
</div>
</div>
)
}