import React from 'react'
import { useRef } from 'react'
import { createUser } from '../../helpers/createUser'
import  {useAuth} from '../../context/AuthContext'
import { useState } from 'react'
import { useEffect } from 'react'
export default function SignUp() {
    const {signup}=useAuth()
    const inputName=useRef()
    const inputEmail=useRef()
    const inputPassword=useRef()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        if(error !== ''){
            inputName.current.focus()
        }
    }, [error])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user={
            username:inputName.current.value,
            email:inputEmail.current.value,
            password:inputPassword.current.value
        }
            if(user.username && user.email && user.password !== '' && user.password.length >= 6){
                setError('')
                setLoading(true)
                await createUser(user)
                await signup(user)
            }
            else(
                setError('Failed to create an account')
            )
        setLoading(false)

    }
  return (
    <div className="mt-10 mb-10 flex flex-col justify-center items-center">
        <h3>Sign Up</h3>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
            <label htmlFor="Name">Name</label>
            <input ref={inputName} type="text"  placeholder='Your username' />
            <label htmlFor="Email">Email</label>
            <input ref={inputEmail} type="email" placeholder='name@name.com' />
            <label htmlFor="Password">Password</label>
            <input ref={inputPassword} type="password" placeholder='6+ Characters' />
            <button disabled={loading} type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
