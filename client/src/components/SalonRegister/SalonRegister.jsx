import React from 'react'
import './SalonRegister.scss'
import Login from './Login'

export default function SalonRegister() {
  return (
    <div className='OwnSalon'>
        <div className="upperSection">
            <div className="wrapper">
                <h1 className="head">CHANGE YOUR LIFE AND YOUR COMMUNITY FOR A MORE BEAUTIFUL WORLD</h1>
                <h3 className="subHead">Our franchise community consists of boutique hair salons that focus on supporting the well-being of our customers, employees, and community through better business practices.</h3>
            </div>
        </div>

        <div className="lower">
            <Login/>
        </div>
    </div>
  )
}
