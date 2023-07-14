import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../config/firebaseConfig'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <div>
            <p>{auth.currentUser?.displayName}</p>
            {/* <div>
                <img src={auth.currentUser?.photoURL || ''} width='100' height='100' alt="" />
            </div> */}
        </div>
    </div>
  )
}
