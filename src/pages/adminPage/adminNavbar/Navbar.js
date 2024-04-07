import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_ROUTE, FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../../consts';

export const AdminNavbar = (props) => {

  const navigate = useNavigate()
  const {isAuth} = useSelector(state => state.main)
  const {isAdmin} = useSelector(state => state.main) || {}

  return (
    <div className={`adminNavbar ${props.className}`}>
        {/* <div className="logo"></div> */}

        <div className="menu">
          <ul>
            <li><Link to={HOME_ROUTE}>Home</Link></li>
            <li><Link to={FORUM_ROUTE}>Forum</Link></li>
            <li><Link to={LEARN_ROUTE}>Learn</Link></li>
            <li> {isAdmin && <Link to={ADMIN_ROUTE}>Admin</Link>} </li>
          </ul>
            
        </div>
        

        { isAuth 
          ? <div className='profile'> <Link to={PROFILE_ROUTE}>Profile</Link> {isAdmin && <div className='adminCaption'>Admin</div>} </div>
          : <Link to={LOGIN_ROUTE}>Authorization</Link>
        }
        
    </div>
  )
}
