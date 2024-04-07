import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ProfilePage.css'
import '../adminPage/AdminPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserMutations } from '../../queries/User';

export const ProfilePage = () => {
    const userRedux = useSelector(state => state.main.user)
    // const dispatch = useDispatch()
    const [user, setUser] = useState({})
    
    const navigate = useNavigate()
    const { userUpdateMutation } = useUserMutations()


    useEffect(() => {
        setUser(userRedux);
    }, [userRedux]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    };   


    const handleSubmit = (e) => {
        e.preventDefault();
        userUpdateMutation.mutate(user)
    };

    return (
        <div className='ProfilePage adminBlank'>

            <div className="wrapper">

                <h2> Profile User </h2>

                <form action="" onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        name="first_name" 
                        value={user.first_name} 
                        onChange={handleChange} 
                    />
                    
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        value={user.last_name} 
                        onChange={handleChange} 
                    />

                    <label>Login:</label>
                    <input 
                        type="text" 
                        name="login" 
                        value={user.login} 
                        onChange={handleChange} 
                    />

                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                    />

                    <label>Birthday:</label>
                    <input 
                        type="date" 
                        name="birthday" 
                        pattern="\d{4}-\d{2}-\d{2}" 
                        value={user.birthday} 
                        onChange={handleChange} 
                    />

                    <label>Phone Number:</label>
                    <input 
                        type="tel" 
                        name="phone_number" 
                        value={user.phone_number} 
                        onChange={handleChange} 
                    />

                    <div className="button_group">
                        <button type="submit">Сохранить изменения</button>
                        <button type="button" onClick={() => navigate("/admin/users")} className='cancel'>Назад</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
