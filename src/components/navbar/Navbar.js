import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, FORUM_ROUTE, HOME_ROUTE, LEARN_ROUTE, LOGIN_ROUTE } from '../../consts'
import { useDispatch, useSelector } from 'react-redux';
import { MdLogout } from "react-icons/md";
import { setIsAdmin, setIsAuth } from '../../store/mainReducer';
import { useMutation } from 'react-query';
import { fetchLogout } from '../../http/authAPI';

export const Navbar = (props) => {

  const { isAuth, isAdmin } = useSelector(state => state.main) 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutMutation = useMutation(fetchLogout, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(setIsAuth(false))
      dispatch(setIsAdmin(false))
      navigate(HOME_ROUTE); // Перенаправляем на домашнюю страницу
    },
    onError: (error) => {
      console.error('Login error:', error);
    }
  });

  const handleLogout = (event) => {
    event.preventDefault();
    logoutMutation.mutate();
    // console.log(loginMutation);
  };


  return (
    <div className={`navbar ${props.className}`}>
        <div className="logo"></div>

        <div className="menu">
          <ul>
            <li><Link to={HOME_ROUTE}>Home</Link></li>
            <li><Link to={FORUM_ROUTE}>Forum</Link></li>
            <li><Link to={LEARN_ROUTE}>Learn</Link></li>
            <li> {isAdmin && <Link to={ADMIN_ROUTE}>Admin</Link>} </li>
          </ul>
            
        </div>
        

        { isAuth 
          ? <div className='profile_block'>
              <div className='profile'> 
                <Link to="#">Profile</Link> 
                {isAdmin && <div className='adminCaption'>Admin</div>} 
              </div>
              <MdLogout className='logout' onClick={handleLogout}/>
            </div>
          : <Link to={LOGIN_ROUTE}>Authorization</Link>
        }
        
    </div>
  )
}
