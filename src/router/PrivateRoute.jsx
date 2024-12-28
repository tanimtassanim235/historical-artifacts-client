import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, setWaiting, waiting } = useContext(AuthContext)

    const location = useLocation();

    if (waiting) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children
    }
    return (
        <Navigate state={location.pathname} replace={true} to={"/login"}></Navigate>
    );
};

export default PrivateRoute;