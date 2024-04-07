import React, { useState } from 'react'
import './NavbarMobile.css'
import { ADMIN_ROUTE, FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../../consts'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavbarMobile = (props) => {

    const {isAuth} = useSelector(state => state.main)
    const {isAdmin} = useSelector(state => state.main) || {}
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`navbarMobile ${props.className}`}>
    {/* <div className="navbarMobile"> */}
        <div className="logo"></div>


            <div className={`menu ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li><Link to={HOME_ROUTE}>Home</Link></li>
                    <li><Link to={FORUM_ROUTE}>Forum</Link></li>
                    <li><Link to={LEARN_ROUTE}>Learn</Link></li>
                    <li> { isAdmin && <a href={ADMIN_ROUTE}>Admin</a> } </li>
                    <li>{ isAuth 
                        ? <Link to={PROFILE_ROUTE}>Profile</Link>
                        : <Link to={LOGIN_ROUTE}>Authorization</Link>
                    }</li>
                </ul>
                <p className="number">+1(702) 910 - 9163</p>
            </div>

        
        <div className="menu_btn" onClick={() => setIsOpen(!isOpen)} />       
        
    </div>
  )
}
