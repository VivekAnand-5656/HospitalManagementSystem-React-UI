import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

const Navbar = () => {
  return (
    <div>
        <h1>HMS</h1>
        <ul>
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="/" >Home</NavLink></li> 
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="patients" >Patients</NavLink></li>
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="doctors" >Doctors</NavLink></li>
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="appointments" >Appointments</NavLink></li>
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="billing" >Billing</NavLink></li>  
            <li><NavLink className={({isActive})=> isActive?" text-[#F97316] border-b-2 border-b-[#F97316]  font-semibold py-1 px-2 rounded-[0.2rem] ":"font-semibold border-b-2 border-b-[#fff] py-1 px-2 rounded-[0.2rem] "} to="forms" >Forms</NavLink></li>   

        </ul>
        <div>
            <button><NavLink to="login" >Login</NavLink></button>
            <button><NavLink to="signup" >Signup</NavLink></button>
        </div>
    </div>
  )
}

export default Navbar