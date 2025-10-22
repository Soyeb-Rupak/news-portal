import React from 'react'
import { NavLink } from 'react-router'
import imagae from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='w-11/12 flex justify-between mx-auto mt-3'>

<div></div>
<div className='flex gap-3 items-center'>

<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/career">Career</NavLink>
</div>
<div className='flex gap-3 items-center'>
<img src={imagae} alt="User" />
    <button className='btn bg-primary text-white '>Login</button>
</div>

    </div>
  )
}

export default Navbar