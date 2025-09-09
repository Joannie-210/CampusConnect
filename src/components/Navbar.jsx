import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'


export default function Navbar(){
return (
<header className="nav-header">
<div className="nav-inner">
<Link to="/" className="brand">CampusConnect</Link>
<nav className="nav-links">
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/events">Events</NavLink>
<NavLink to="/gallery">Gallery</NavLink>
<NavLink to="/feedback">Feedback</NavLink>
<NavLink to="/contact">Contact</NavLink>
</nav>
<button className="nav-toggle" aria-label="toggle menu">☰</button>
</div>
</header>
)
}