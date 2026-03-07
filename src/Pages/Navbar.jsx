import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=' bg-[#ffffff5c] w-full h-[15vh] p-2 flex justify-between ' >
      <div className=' h-full flex items-center ' >
        <img src={Logo}  className=' w-20  ' alt="" />
        <h1 className=' text-4xl font-bold ' >HMS</h1>
      </div>
      <ul className=' w-full flex justify-center items-center gap-3 ' >
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="/" >Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="patients" >Patients</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="doctors" >Doctors</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="appointments" >Appointments</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="billing" >Billing</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? " text-[#fffffe] border-b-2 border-b-[#fafafa]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="forms" >Forms</NavLink></li>

      </ul>
      <div className=' flex justify-center items-center gap-3 ' >
        <button><NavLink to="login" >Login</NavLink></button>
        <button><NavLink to="signup" >Signup</NavLink></button>
      </div>
    </div>
  )
}

export default Navbar