import React from 'react'
import './LearnPage.css'
import { Filter } from './filter/Filter'
import { Navbar } from '../../components/navbar/Navbar'
import { LearnBlock } from './learnBlock/LearnBlock'
import { LearnItem } from './learnItem/LearnItem'
import { NavbarMobile } from '../../components/navbarMobile/NavbarMobile'

export const LearnPage = () => {
  return (
    <div className='learnPage'>
      <NavbarMobile className='learnNavbarMobile' />
      <div className="wrapper">
        <Navbar className='learnNavbar'/>
        
        <Filter />
        <LearnBlock />
      </div>
    </div>
  )
}
