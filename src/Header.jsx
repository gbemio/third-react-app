import React from 'react'
import logo from './logo.svg'

const Header = () => {
  return (
    <header>
    <nav className='nav'>
        <img src={logo}  alt="" className='nav-logo'/>
        <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    
</header>
  )
}

export default Header
