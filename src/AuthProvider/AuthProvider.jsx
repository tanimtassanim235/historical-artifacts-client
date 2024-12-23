import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';


export const AuthContext = createContext();
// const auth = getAuth();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [waiting, setWaiting] = useState(true);

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const sharedInfo = {
        signUpUser
    }
    return (
        <AuthContext.Provider value={sharedInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;