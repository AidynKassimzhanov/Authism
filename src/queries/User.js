
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser, fetchUserAll, fetchUserCreate, fetchUserUpdate, fetchUserUpdateAdmin } from '../http/userAPI';

export const useUserMutations = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userUpdateAdminMutation = useMutation(fetchUserUpdateAdmin, {
        onSuccess: (data) => {
        console.log('Successful update User:', data);
        navigate("/admin/users"); // Перенаправляем на домашнюю страницу
        },
        onError: (error) => console.error('Login error:', error)
    });

    const userCreateMutation = useMutation(fetchUserCreate, {
        onSuccess: (data) => {
        console.log('Successful create User:', data);
        navigate("/admin/users"); // Перенаправляем на домашнюю страницу
        },
        onError: (error) => console.error('Login error:', error)
    });

    const userUpdateMutation = useMutation(fetchUserUpdate, {
        onSuccess: (data) => {
        console.log('Successful update User:', data);
        navigate("/admin/users"); // Перенаправляем на домашнюю страницу
        },
        onError: (error) => console.error('Login error:', error)
    });

    const userGetQuery = useQuery(fetchUser, {
        onSuccess: (data) => {
        console.log('Successful update User:', data);
        },
        onError: (error) => console.error('Login error:', error)
    });

    const userGetAllQuery = useQuery(fetchUserAll, {
        onSuccess: (data) => {
        console.log('Successful update User:', data);
        },
        onError: (error) => console.error('Login error:', error)
    });

    return {
        userUpdateAdminMutation,
        userCreateMutation,
        userUpdateMutation,
        userGetQuery,
        userGetAllQuery
    };
};
