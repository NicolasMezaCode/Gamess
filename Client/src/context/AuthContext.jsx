import React from 'react'
import {useState,useContext} from 'react'

const AuthContext=React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){

    const [currentUser,setCurrentUser]=useState()
    function signup(username,uid){
        const user={
            username,uid
        }
        setCurrentUser(current=>current=user)
        console.log("siuuuu",user)
    }
    const value={
        currentUser,signup
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}
