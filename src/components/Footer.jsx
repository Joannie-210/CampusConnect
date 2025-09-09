import React from 'react'
import '../styles/Footer.css'


export default function Footer(){
return (
<footer className="site-footer">
<div className="footer-inner">
<p>© {new Date().getFullYear()} CampusConnect — Built for Aptech</p>
</div>
</footer>
)
}