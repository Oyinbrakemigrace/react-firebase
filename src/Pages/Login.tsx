import React from 'react'
import { auth, provider } from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const handleLogin = async ()=>{
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate('/')
    }

  return (
    <div>
        <p>Login with Google</p>
        <button onClick={handleLogin}>Click to Login with Google</button>
    </div>
  )
}
