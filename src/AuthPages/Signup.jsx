import React, { useEffect, useState } from 'react'
import AdminLogin from './AdminLogin';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';

const Signup = () => {
  const [navilogin, setNavilogin] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleTypes: ""
  });
  if (navilogin === "login") {
    return <AdminLogin />
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSignup = async (e) => { 
    e.preventDefault();
    try {
      const payload ={
        ...formData,roleTypes:[formData.roleTypes]
      };
      const signupRes = await axios.post("http://localhost:8080/api/auth/signup", payload)
      console.log("Data : ", signupRes.data.name)

      toast.success('Signup Successfully ', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setFormData({
        name: "",
        email: "",
        password: "",
        roleTypes: ""
      })
      setNavilogin("login");
    } catch (error) {
      toast.error(`Error : ${error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <form
        onSubmit={handleSignup}
        className='bg-[#ffffff] w-full flex flex-col p-2 justify-around gap-1 '>
        {/* <label htmlFor="">Enter Name</label> */}
        <input type="text" name='name' placeholder='Enter Name' required
          value={formData.name}
          onChange={handleChange}
          className=' outline-0 p-1 border border-[#7c7878] rounded ' />
        {/* <label htmlFor="">Enter Email</label> */}
        <input type="email" name="email" placeholder='Enter Email' required id=""
          value={formData.email}
          onChange={handleChange}
          className=' outline-0 p-1 border border-[#7c7878] rounded ' />
        {/* <label htmlFor="">Enter Password</label> */}
        <input type="password" name="password" placeholder='Enter Password' required id=""
          value={formData.password}
          onChange={handleChange}
          className=' outline-0 p-1 border border-[#7c7878] rounded ' />
        {/* <label htmlFor="">Enter RoleTypes</label> */}
        <select name="roleTypes" id=""
          value={formData.roleTypes}
          onChange={handleChange}
          className=' outline-0 p-1 border border-[#7c7878] rounded '>
          <option value="">Select Roles</option>
          <option value="ADMIN">ADMIN</option>
          <option value="DOCTOR">DOCTOR</option>
          <option value="PATIENT">PATIENT</option>
        </select>
        <button
          type='submit'
          className='w-full font-semibold rounded cursor-pointer p-1 bg-[#0411f8] text-white'>Register</button>
        {/* <p>Already have an account ? <span className='text-[#1605ff] cursor-pointer'
        onClick={navig} >Login here</span></p> */}
      </form>
    </>
  )
}

export default Signup