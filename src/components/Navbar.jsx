import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import Camp from '../assets/camplogo.webp'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
    
      setShowNavbar(false)
    } else {
      
      setShowNavbar(true)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header className={`nav-header ${showNavbar ? 'show' : 'hide'}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand">CampusConnect</Link>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link to="/events" className="nav-btn">
          Signup
          <span className="nav-btn-icon">↗</span>
        </Link>
        <button className="nav-toggle" aria-label="toggle menu">☰</button>
      </div>
    </header>
  )
}
