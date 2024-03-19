import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_ROUTE, FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from '../../../consts';

export const AdminNavbar = (props) => {

  const navigate = useNavigate()
  const {isAuth} = useSelector(state => state.main)
  const {isAdmin} = useSelector(state => state.main) || {}

  return (
    <div className={`adminNavbar ${props.className}`}>
        {/* <div className="logo"></div> */}

        <div className="menu">
          <ul>
            <li><a href={HOME_ROUTE}>Home</a></li>
            <li><a href={FORUM_ROUTE}>Forum</a></li>
            <li><a href={LEARN_ROUTE}>Learn</a></li>
            <li> {isAdmin && <a href={ADMIN_ROUTE}>Admin</a>} </li>
          </ul>
            
        </div>
        

        { isAuth 
          ? <div className='profile'> <a href="#">Profile</a> {isAdmin && <div className='adminCaption'>Admin</div>} </div>
          : <a href={LOGIN_ROUTE}>Authorization</a>
        }
        
    </div>
  )
}
