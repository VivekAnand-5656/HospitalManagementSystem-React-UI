import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=' w-screen h-[10vh] bg-[#ffffff] shadow-2xl flex  justify-between items-center p-2  ' >
        <div className=' h-full w-[20%] flex justify-center items-center ' >
            <img src={logo} className=' w-[30%] h-full ' alt="" />
            <h1 className=' text-2xl font-bold uppercase ' >HosPitalCare</h1>
        </div>
        <ul className=' w-[50%] h-full flex justify-center items-center gap-3 ' >
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="/" >Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="dashboard" >DashBoard</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="doctors" >Doctors</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="patients" >Patients</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="appointments" >Appointments</NavLink></li>
            <li><NavLink className={({isActive}) => isActive?" text-[#180cff] font-semibold  ":" font-semibold " } to="reports" >Reports</NavLink></li> 
        </ul>
    </div>
  )
}

export default Navbar