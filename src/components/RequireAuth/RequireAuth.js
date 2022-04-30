import React from 'react';
import useFirebase from './../../hooks/useFirebase';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { user } = useFirebase();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;