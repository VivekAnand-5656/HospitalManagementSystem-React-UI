import React, { useState } from 'react'
import signup from '../assets/signup.png'
import axios from "axios"
import { Link } from 'react-router-dom'


const Signup = () => { 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleTypes: ""
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        roleTypes: [formData.roleTypes]
      }
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        payload
      )
      console.log("Response : ", response.data);
      alert("User signup Successfully")
      setFormData({
        name: "",
        email: "",
        password: "",
        roleTypes: ""
      })

    } catch (error) {
      console.error("Signup error : ", error);
      alert("Signup Failed");
    }


  }


  return <>
    <div className=' w-full h-screen p-2 flex justify-center ' >
      <div className=' w-[80%] h-full flex justify-center items-center bg-[#ffffff]  rounded-4xl ' >
        <div className=' w-[50%] h-full flex justify-center items-center bg-[#0329ff] rounded-4xl p-2 ' >
          <img src={signup}
            className=' h-[70%] rounded-4xl  '
            alt="" />
        </div>
        {/* ======= Form ======== */}
        <div className=' w-[60%] h-full flex justify-center items-center bg-[#F2F6FF] ' >
          <form
            onSubmit={handleSubmit}
            className=' w-[70%] h-[60%] p-2 flex flex-col justify-center rounded-2xl gap-2  '
          >
            <h1 className=' text-3xl uppercase font-bold text-center ' >Create Account</h1>
            <label htmlFor="">Full Name</label>
            <input type="text" name='name' placeholder='Enter Full Name' required
              className=' bg-[#ffffff] shadow p-2  rounded outline-0  '
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder='Enter Email' required
              className=' bg-[#ffffff] shadow p-2  rounded outline-0  '
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder='Create Password' required
              className='bg-[#ffffff] shadow p-2  rounded outline-0 '
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="">Role</label>
            <select name="roleTypes"
              className=' bg-[#ffffff] shadow p-2  rounded outline-0 cursor-pointer '
              value={formData.roleTypes}
              onChange={handleChange}
            >
              <option value="">Select role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="PATIENT">PATIENT</option>
              <option value="DOCTOR">DOCTOR</option>
            </select>
            <button type='submit' className=' bg-[#0329ff] p-2 rounded text-white font-bold cursor-pointer ' >Sign Up</button>
            <p className='text-center' >already have an account ? 
              <Link className=' text-[#0329ff] ' to="/" >
              login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </>
}

export default Signup