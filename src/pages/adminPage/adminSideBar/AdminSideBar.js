import React from 'react'
import './AdminSideBar.css'
import { Navbar } from '../../../components/navbar/Navbar'
import Accordion from 'react-bootstrap/Accordion';
import AccordionS from '../accordion/Accordion';
import { Logo } from '../../../components/logo/Logo';
import { NavLink } from 'react-router-dom';

export const AdminSideBar = () => {

  const items = [
    { title: 'Заголовок 1', content: 'Содержимое 1' },
    { title: 'Заголовок 2', content: 'Содержимое 2' },
    { title: 'Заголовок 3', content: 'Содержимое 3' },
  ];

  return (
    <div className='adminSideBar'>

      <div>
        <Logo />
      </div>

      <ul>
        <li><NavLink to="/admin/forum" activeClassName="active">Forum</NavLink></li>
        <li><NavLink to="/admin/learn" activeClassName="active">Learn</NavLink></li>
        <li><NavLink to="/admin/users" activeClassName="active">Users</NavLink></li>
      </ul>

      
    </div>
  )
}
