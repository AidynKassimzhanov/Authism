import React, { useState } from 'react'
import './NavbarMobile.css'


export const NavbarMobile = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

  return (
    // <div className={"navbarMobile" + (isOpen ? " openBurger" : "")}>
    <div className="navbarMobile">
        <div className="logo"></div>


            <div className={`menu ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Learn</a></li>
                    <li>{ isAuth 
                        ? <a href="#">Profile</a>
                        : <a href="#">Authorization</a>
                    }</li>
                </ul>
                <p className="number">+1(702) 910 - 9163</p>
            </div>

        
        <div className="menu_btn" onClick={() => setIsOpen(!isOpen)} />       
        
    </div>
  )
}
