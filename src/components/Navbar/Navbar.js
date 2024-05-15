import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt='' className='logo'/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>List Your Property</li>
        <li>Contact</li>
        <ul className='nav-right'>
        <li>EN</li>
        <li><button className='btn'>Login</button></li></ul>
      </ul>
    </nav>
  )
}

export default Navbar
