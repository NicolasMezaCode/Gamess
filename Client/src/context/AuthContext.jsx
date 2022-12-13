import React from 'react'
import {useState,useContext} from 'react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase'
import{useNavigate} from 'react-router-dom'


const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()
    const navigate=useNavigate()

    const readCookie=()=>{
        const user=Cookies.get('user')
        if(user){
            setCurrentUser(current=>current=JSON.parse(user))
            console.log(JSON.parse(user))
        }
    }
    useEffect(() => {
        readCookie()
    }, [])

    function signup(username,uid,photoId){
        const user={
            username,uid,photoId
        }
        setCurrentUser(current=>current=user)
        Cookies.set('user',JSON.stringify(user))
    }
    function loginUser(email,password){
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const userCred = userCredential.user;
                    const user={
                        username:userCred.displayName,
                        uid:userCred.uid,
                        photoId:userCred.photoURL,
                    }
                    Cookies.set('user',JSON.stringify(user))
                    setCurrentUser(current=>current=user)
                    navigate('/')
                    window.location.reload()
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode,errorMessage)
                });
        return auth
    }
    function logout(){
        Cookies.remove('user')
        navigate('/')
        window.location.reload()
        return auth.signOut()
    }

    const value={
        currentUser,signup,loginUser,logout
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}
