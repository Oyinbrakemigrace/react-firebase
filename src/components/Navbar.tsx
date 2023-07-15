import React from 'react'
import {Link} from 'react-router-dom'



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Link className='lin' to='/'>Home</Link>
        <Link to='/login' className='lin'>Login</Link>
        <Link to='/' className='lin'>Logout</Link>

        </div>
    </div>
  )
}
