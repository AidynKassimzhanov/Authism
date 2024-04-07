import {$authHost, $host} from './index'

export const fetchUserAll = async () => {
    const {data} = await $authHost.get('/users')
    return data
}

export const fetchUser = async (id) => {
    const {data} = await $authHost.get(`/users/${id}`)
    return data
}

export const fetchDeleteUser = async (id) => {
    const {data} = await $authHost.get(`/users/delete/${id}`)
    return data
}

export const fetchUserUpdateAdmin = async ({id, userData}) => {
    const {data} = await $authHost.put(`/users/update/admin/${id}`, userData)
    return data
}


export const fetchUserUpdate = async (userData) => {
    const {data} = await $authHost.put(`/users/update`, userData)
    return data
}

export const fetchUserCreate = async (userData) => {
    const {data} = await $authHost.post('/signup', userData)
    // console.log(data);
    return data
}