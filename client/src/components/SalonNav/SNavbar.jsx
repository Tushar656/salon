import React from 'react'
import './Navbar.scss'

export default function SNavbar() {
  return (
    <div className='SnavbarWrapper'>
        <div className="navbarContainor">
            <div className="navLeft">Glance Salon</div>
            <div className="navRight">
                <ul className='navIconList'>
                    <li className="navIcon">Home</li>
                    <li className="navIcon">Services</li>
                    <li className="navIcon">Appointments</li>
                    <li className="navIcon">Profile</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
