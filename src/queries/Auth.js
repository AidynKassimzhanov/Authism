
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../consts';
import { setUser, clearUser } from '../store/mainReducer';
import { fetchLogin, fetchLogout, fetchRegister } from '../http/authAPI';

export const useAuthMutations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginMutation = useMutation(fetchLogin, {
    onSuccess: (data) => {
      dispatch(setUser(data.user));
      navigate(HOME_ROUTE);
    },
    onError: (error) => {
      console.error('Login error:', error);
    }
  });

  const logoutMutation = useMutation(fetchLogout, {
    onSuccess: () => {
      dispatch(clearUser());
      navigate(HOME_ROUTE);
    },
    onError: (error) => {
      console.error('Logout error:', error);
    }
  });

//   const registerMutation = useMutation(fetch, {
//     onSuccess: (data) => {
//       dispatch(setUser(data.user));
//       navigate(HOME_ROUTE);
//     },
//     onError: (error) => {
//       console.error('Register error:', error);
//     }
//   });

  return {
    loginMutation,
    logoutMutation,
    // registerMutation
  };
};
