import {$authHost, $host} from './index'

export const fetchLogin = async (formData) => {
    const {data} = await $host.post('/signin', formData)
    // console.log('adfas',data);
    localStorage.setItem('token', data.token)
    return data
}