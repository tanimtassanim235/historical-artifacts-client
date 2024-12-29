import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://history-server-zeta.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                // console.log('log out the user');
                logOut()
                    .then(() => {
                        // console.log('log out user');
                        navigate('/login')
                    })
                    .catch(error => {
                        // console.log(error);
                    })
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;