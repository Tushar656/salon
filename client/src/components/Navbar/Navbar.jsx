import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbarWrapper'>
        <div className="navbarContainor">
            <div className="navLeft"><h2>Glance Salon</h2></div>
            <div className="navRight">
                <ul className='navIconList'>
                    <li className="navIcon">Home</li>
                    <li className="navIcon">About</li>
                    <li className="navIcon">Find a Location</li>
                    <li className="navIcon">Buy Products</li>
                    <li className="navIcon">Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
