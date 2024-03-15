import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from '../../consts'

export const Navbar = () => {

  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="navbar">
        <div className="logo"></div>

        <div className="menu">
            
            <a href={HOME_ROUTE}>Home</a>
            <a href={FORUM_ROUTE}>Forum</a>
            <a href={LEARN_ROUTE}>Learn</a>
        </div>
        

        { isAuth 
          ? <a href="#">Profile</a>
          : <a href={LOGIN_ROUTE}>Authorization</a>
        }
        
    </div>
  )
}
