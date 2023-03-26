import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "../Navbar/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav className='nav-bar'>
        <ul>
          <li><a href="#">About me</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact Me</a></li>
          <li><a href="#">More Info</a></li>
        </ul>
      </nav>
    </div>
  )
}
