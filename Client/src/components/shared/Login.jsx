import React from 'react'
import { useRef,useState,useEffect } from 'react'
import { loginUser } from '../../helpers/loginUser'
import  {useAuth} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate=useNavigate()
    const {loginUser}=useAuth()
    const inputEmail=useRef()
    const inputPassword=useRef()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        if(error !== ''){
            inputEmail.current.focus()
        }
    }, [error])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const user={
            email:inputEmail.current.value,
            password:inputPassword.current.value,
        }
        if(user.email && user.password !== '' && user.password.length >= 6){
            try{
                setError('')
                setLoading(true)
                console(await loginUser(user.email,user.password)) 
                await loginUser(user.email,user.password)
                
            }
            catch{
                setError('Failed to login, please try again.')
            }
        }
        else(
            setError('Failed to login, please try again.')
        )
    }

  return (
    <div className="mt-10 mb-10 flex flex-col justify-center items-center">
    <h3>Login</h3>
    {error && <p className='text-red-500'>{error}</p>}
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <label htmlFor="Email">Email</label>
        <input ref={inputEmail} type="email" placeholder='name@name.com' />
        <label htmlFor="Password">Password</label>
        <input ref={inputPassword} type="password" placeholder='6+ Characters' />
        <button disabled={loading} type='submit'>Log In</button>
    </form>
</div>
  )
}
