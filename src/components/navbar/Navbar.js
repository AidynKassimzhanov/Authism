import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {

    const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="navbar">
        <div className="logo"></div>

        <div className="menu">
            <a href="#">Home</a>
            <a href="#">Forum</a>
            <a href="#">Learn</a>
        </div>
        

        { isAuth 
          ? <a href="#">Profile</a>
          : <a href="#">Authorization</a>
        }
        
    </div>
  )
}
