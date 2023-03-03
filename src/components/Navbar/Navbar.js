import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "../Navbar/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <a>Skills</a>
          <a href=''>Projects</a>
          <a href=''>Contact Me</a>
          <a href=''>More Info</a>
        </ul>
      </nav>
    </div>
  )
}
