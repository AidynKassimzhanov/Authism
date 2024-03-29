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