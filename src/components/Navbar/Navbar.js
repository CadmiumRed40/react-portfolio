import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "../Navbar/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div id='Nav-links'>
        <ul>
          <a href=''>Skills</a>
        </ul>
        <ul>
          <a href=''>Projects</a>
        </ul>
        <ul>
          <a href=''>Contact Me</a>
        </ul>
        <ul>
          <a href=''>More Info</a>
        </ul>
        </div>
      </nav>
    </div>
  )
}
