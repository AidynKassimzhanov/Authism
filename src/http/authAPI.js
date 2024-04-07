import {$authHost, $host} from './index'

export const fetchLogin = async (formData) => {
    const {data} = await $host.post('/signin', formData)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    return data
}

export const fetchLogout = async () => {
    const {data} = await $authHost.get('/signout')
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return data
}

