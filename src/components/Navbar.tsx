import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'




export const Navbar = () => {

  const signOutUser = async ()=>{
      await signOut(auth)
      console.log('user logged out')
    }

    const [user] = useAuthState(auth) 

  return (
    <div className='navbar'>
        <div className="links">
            <Link className='lin' to='/'>Home</Link>
        {
          !user && (
            <Link to='/login' className='lin'>Login</Link>
          )
        }
        </div>
          {
            user && (
              <>
              <div className='user'>
          <p>{auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoURL || ''} alt='' height='20' width='20'/>
        </div>
        <button onClick={signOutUser}>Log out</button>
        </>
            )
          }
          
    </div>
  )
}
