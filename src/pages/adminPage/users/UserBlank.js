import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../AdminPage.css'
import { useUserMutations } from '../../../queries/User';

// import axios from 'axios'; // Предполагается, что вы используете axios для взаимодействия с сервером

const UserBlank = () => {
    
    const [userData, setUserData] = useState({
        id: '',
        first_name: '',
        last_name: '',
        login: '',
        email: '',
        password: '',
        birthday: '',
        avatar_url: '',
        phone_number: '',
        is_active: false,
        status: 'loading',
        likes: 0,
        blocked: false
    });
    const [create, setCreate] = useState(true)

    const location = useLocation();
    let data = location.state?.data;
    const navigate = useNavigate()
    const { userCreateMutation, userUpdateAdminMutation} = useUserMutations();

    useEffect(() => {
        if (data) {
            const birthday = new Date(data.birthday);
            const formattedBirthday = birthday.toISOString().split('T')[0];
            data.birthday = formattedBirthday
            setUserData(data)
            setCreate(false)
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (create) {
            userCreateMutation.mutate(userData)
        } else {
            console.log(userData);
            userUpdateAdminMutation.mutate({id: data.id, userData})
        }
        
       
        
    };

    return (
        <div className='adminBlank'>
            <h2>Редактировать пользователя</h2>
            <form action='' onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="first_name" value={userData.first_name} onChange={handleChange} />

                <label>Last Name:</label>
                <input type="text" name="last_name" value={userData.last_name} onChange={handleChange} />

                <label>Login:</label>
                <input type="text" name="login" value={userData.login} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} />

                <label>Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />

                <label>Birthday:</label>
                <input type="date" name="birthday" value="2017-06-01" pattern="\d{4}-\d{2}-\d{2}" value={userData.birthday} onChange={handleChange} />

                <label>Phone Number:</label>
                <input 
                    type="tel" 
                    name="phone_number" 
                    value={userData.phone_number} 
                    onChange={handleChange} 
                />

                
                {/*<label>Avatar URL:</label>
                <input type="text" name="avatar_url" value={userData.avatar_url} onChange={handleChange} />

                <label>Is Active:</label>
                <input type="checkbox" name="is_active" checked={userData.is_active} onChange={handleChange} />

                <label>Status:</label>
                <input type="text" name="status" value={userData.status} onChange={handleChange} />

                <label>Likes:</label>
                <input type="number" name="likes" value={userData.likes} onChange={handleChange} />

                <label>Blocked:</label>
                <input type="checkbox" name="blocked" checked={userData.blocked} onChange={handleChange} /> */}

                <button type="submit">Сохранить изменения</button>
            </form>
        </div>
    );
};

export default UserBlank;