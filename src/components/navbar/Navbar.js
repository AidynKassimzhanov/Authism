import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from '../../consts'

export const Navbar = (props) => {

  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className={`navbar ${props.className}`}>
        <div className="logo"></div>

        <div className="menu">
          <ul>
            <li><a href={HOME_ROUTE}>Home</a></li>
            <li><a href={FORUM_ROUTE}>Forum</a></li>
            <li><a href={LEARN_ROUTE}>Learn</a></li>
          </ul>
            
            
            
            
        </div>
        

        { isAuth 
          ? <a href="#">Profile</a>
          : <a href={LOGIN_ROUTE}>Authorization</a>
        }
        
    </div>
  )
}
