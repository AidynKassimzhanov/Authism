import React, { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../../consts'
import { useQuery, useMutation } from 'react-query';
import { fetchLogin } from '../../http/userAPI';
import { useDispatch, useSelector } from 'react-redux';

import { setIsAdmin, setIsAuth } from '../../store/mainReducer';

export const LoginPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isAuth } = useSelector(state => state.main) 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const loginMutation = useMutation(fetchLogin, {
    onSuccess: (data) => {
      // Выполняем действия после успешной авторизации
      dispatch(setIsAuth(true))
      if (data.user.Role.name === 'admin') {
        dispatch(setIsAdmin(true))
      }
      console.log('Successful login:', data);
      navigate(HOME_ROUTE); // Перенаправляем на домашнюю страницу
    },
    onError: (error) => {
      // Обработка ошибок авторизации
      console.error('Login error:', error);
      // Можно добавить сообщение об ошибке для пользователя
    }
  });
  // const{data, isLoading, error} = useQuery('signin', fetchLogin)

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginMutation.mutate(formData);
    // console.log(loginMutation);
  };

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className="loginImage">
          <img src="./img/loginImage.png" alt="" />
        </div>
        <div className="login">

          <img src="./img/Back.png" alt="" onClick={() => navigate(HOME_ROUTE)}/>
          <h2>Authorization</h2>

          <form action='' className="loginForm">
            <p>Email</p>
            <input 
              type="email" 
              name='email' 
              placeholder='TestEmail@gmail.com' 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <p>Password</p>
            <input 
              type="password" 
              name='password' 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder='Password' 
            />

            <button 
              onClick={handleLoginSubmit}
            >
              Authorization
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
