import React from 'react'
import './Register.scss'

export default function Register() {
  return (
    // <div>Register</div>
    <>
    <div className='RegisterTop'><h2><i>Glance Salon</i></h2><h5><u className='underline'>Login</u></h5></div>
    <div className='RegisterMid'><h3>Who are you?</h3></div>
    <div className='Register'>
      <div className='left'>
      <h3>A Customer?</h3> 
      <form className='RegisterForm'>
        <label for="Name" className='RegisterLabel'>Name</label><br/>
        <input type="Name" id="Name" name="Name" className='RegisterInput'/><br/>
        <label for="Contact" className='RegisterLabel'>Contact number</label><br/>
        <input type="Contact" id="Contact" name="Contact" className='RegisterInput'/><br/>
        <label for="email" className='RegisterLabel'>Email:</label><br/>
        <input type="email" id="email" name="email" className='RegisterInput'/><br/>
        <label for="pass" className='RegisterLabel'>Password:</label><br/>
        <input type="password" id="pass" name="pass" className='RegisterInput'/><br/>
        <label for="repass" className='RegisterLabel'>Renter-password:</label><br/>
        <input type="password" id="repass" name="repass" className='RegisterInput'/><br/>
        <input type="submit" className='RegisterSubmit'></input>
      </form>
      </div>
      <div className='right'>
        <h3>A Salon Owner?</h3>
        <form className='RegisterForm'>
        <label for="SalonName" className='RegisterLabel'>Name of Salon</label><br/>
        <input type="SalonName" id="SalonName" name="SalonName" className='RegisterInput'/><br/>
        <label for="SalonContact" className='RegisterLabel'>Contact number</label><br/>
        <input type="SalonContact" id="SalonContact" name="SalonContact" className='RegisterInput'/><br/>
        <label for="SalonPin" className='RegisterLabel'>Pin Code</label><br/>
        <input type="SalonPin" id="SalonPin" name="SalonPin" className='RegisterInput'/><br/>
        <label for="Salonemail" className='RegisterLabel'>Email</label><br/>
        <input type="email" id="Salonemail" name="Salonemail" className='RegisterInput'/><br/>
        <label for="Salonpass" className='RegisterLabel'>Password:</label><br/>
        <input type="password" id="Salonpass" name="Salonpass" className='RegisterInput'/><br/>
        <label for="Salonrepass" className='RegisterLabel'>Renter-password:</label><br/>
        <input type="password" id="Salonrepass" name="Salonrepass" className='RegisterInput'/><br/>
        <input type="submit" className='RegisterSubmit'></input>
      </form>
      </div>
    </div>
    </>
  )
}
