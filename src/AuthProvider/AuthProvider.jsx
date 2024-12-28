import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
// const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [waiting, setWaiting] = useState(true);

    const signUpUser = (email, password) => {
        setWaiting(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setWaiting(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setWaiting(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (updatedInfo) => {
        setWaiting(true)
        return updateProfile(auth.currentUser, updatedInfo)
    }

    const logOut = () => {
        // setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const UnSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setWaiting(false)
        });
        return () => {
            UnSub();
        }
    }, [auth.currentUser])

    const sharedInfo = {
        signUpUser,
        signIn,
        googleSignIn,
        setUser,
        logOut,
        updateUserProfile,
        user,
        waiting,
        setWaiting
    }


    return (
        <AuthContext.Provider value={sharedInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;