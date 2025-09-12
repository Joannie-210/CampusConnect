import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

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
    <>
    <header className={`nav-header ${showNavbar ? 'show' : 'hide'}`}>
      <div className="nav-inner">
       
        <div className="nav-left">
          <Link to="/" className="brand">
            Campus<i style={{ color: "#ffaa00" }}>Connect</i>
          </Link>
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

       
        <button 
          className="nav-toggle" 
          aria-label="toggle menu" 
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

    
      
    </header>
    <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button 
          className="menu-close" 
          aria-label="close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <Link to="/events" className="nav-btn" onClick={() => setMenuOpen(false)}>
          Signup <span className="nav-btn-icon">↗</span>
        </Link>
      </div>
    </>
  )
}
