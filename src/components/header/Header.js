import React from 'react'
import './Header.css'
import { Button } from '../button/Button'
import { Navbar } from '../navbar/Navbar'
import { NavbarMobile } from '../navbarMobile/NavbarMobile'

export const Header = () => {
  return (
    <header className='header' id='header'>
        <Navbar />
        <NavbarMobile />
        <h1>Authism birge</h1>
        <p>Shavit Group is a leading real estate team with Century 21 GAVISH. Our main goal is to provide you with REAL value</p>
        <div className="btn_group">
            <Button title={'Readme'} className={'blue'} />
            <Button title={'Signin'} className={'white'} />
        </div>
    </header>
  )
}
