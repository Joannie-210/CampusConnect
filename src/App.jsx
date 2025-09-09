import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Gallery from './pages/Gallery'
import Feedback from './pages/Feedback'
import Contact from './pages/Contact'


export default function App(){
return (
<div className="app-root">
<Navbar />
<main className="main-content">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/events" element={<Events/>} />
<Route path="/events/:id" element={<EventDetail/>} />
<Route path="/gallery" element={<Gallery/>} />
<Route path="/feedback" element={<Feedback/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
)
}