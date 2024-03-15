import React from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../../consts'

export const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className="loginImage">
          <img src="./img/loginImage.png" alt="" />
        </div>
        <div className="login">
          <img src="./img/Back.png" alt="" onClick={() => navigate(HOME_ROUTE)}/>
          <h2>Authorization</h2>
          <form action='' className="loginForm">
            <p>Email</p>
            <input type="email" name='email' placeholder='TestEmail@gmail.com' />
            <p>Password</p>
            <input type="password" name='password' placeholder='Password' />
            <button>Authorization</button>
          </form>
        </div>
      </div>
    </div>
  )
}
