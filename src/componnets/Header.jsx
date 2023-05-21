import React from 'react'
import { Link  } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './../styles/Header.scss'

function Header() {
  return (
    <nav> 
        <h1> Star and Star </h1>
      <main>
      <Link to = {"."} >Home</Link>
      <Link to = {"./About"} >About</Link>
      <Link to = {"./Contact"} >Contact</Link>
      <Link to = {"./brands"} >Brands</Link>
      <Link to = {"./Services"} >Servicest</Link>
      </main>
    </nav>
  )
}

export default Header