import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
const auth= getAuth(app)
export const AuthContext= createContext();
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSingin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const updateUser=(updatedInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,updatedInfo)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,
            currentUser=>{
                setUser(currentUser)
                setLoading(false)
            })
            return ()=>{
                return unsubscribe()
            }
    },[])
    const authInfo={user ,loading,createUser,login,googleSingin,logOut,updateUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;