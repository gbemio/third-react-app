import React from 'react'
import logo from './logo.svg'

const Header = () => {
  return (
    <header>
    <nav>
        <img src={logo} width="40px"alt="" />
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
</header>
  )
}

export default Header
