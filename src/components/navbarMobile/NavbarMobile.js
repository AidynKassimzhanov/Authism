import React, { useState } from 'react'
import './NavbarMobile.css'
import { FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from '../../consts'

export const NavbarMobile = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

  return (
    // <div className={"navbarMobile" + (isOpen ? " openBurger" : "")}>
    <div className="navbarMobile">
        <div className="logo"></div>


            <div className={`menu ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li><a href={HOME_ROUTE}>Home</a></li>
                    <li><a href={FORUM_ROUTE}>Forum</a></li>
                    <li><a href={LEARN_ROUTE}>Learn</a></li>
                    <li>{ isAuth 
                        ? <a href="#">Profile</a>
                        : <a href={LOGIN_ROUTE}>Authorization</a>
                    }</li>
                </ul>
                <p className="number">+1(702) 910 - 9163</p>
            </div>

        
        <div className="menu_btn" onClick={() => setIsOpen(!isOpen)} />       
        
    </div>
  )
}
