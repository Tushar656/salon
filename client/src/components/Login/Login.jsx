import React from 'react'
import './Login.scss'

export default function Login() {
  return (
    // <div>Login</div>
    <>
    <div className='loginTop'><h2><i>Glance Salon</i></h2><h5><u className='underline'>Didn't have a account?</u></h5></div>
    <div className='loginMid'><h3>Who are you?</h3></div>
    <div className='login'>
      <div className='left'>
      <h3>A Salon Owner?</h3> 
      <form className='loginForm'>
        <label for="email" className='loginLabel'>Email:</label><br/>
        <input type="email" id="email" name="email" className='loginInput'/><br/>
        <label for="pass" className='loginLabel'>Password:</label><br/>
        <input type="password" id="pass" name="pass" className='loginInput'/><br/>
        <input type="submit" className='loginSubmit'></input>
      </form>
      </div>
      <div className='right'>
        <h3>A Customer?</h3>
        <form className='loginForm'>
        <label for="email" className='loginLabel'>Email:</label><br/>
        <input type="text" id="email" name="email" className='loginInput'/><br/>
        <label for="pass" className='loginLabel'>Password:</label><br/>
        <input type="password" id="pass" name="pass" className='loginInput'/><br/>
        <input type="submit" className='loginSubmit'></input>
      </form>
      </div>
    </div>
    </>
  )
}
