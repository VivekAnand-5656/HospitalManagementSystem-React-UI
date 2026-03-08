import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
import login from '../assets/login.png'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const {login} = useContext(AuthContext);

  const [userData,setUserData] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setUserData({
      ...userData,[e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const payload ={
        email: userData.email,
        password: userData.password
      }
      const response = await axios.post(
        "http://localhost:8080/api/auth/login", payload
      )
      console.log("Response : ",response.data)
      login();
      alert("Login Successfully")
      setUserData({
        email:"",
        password:""
      })
    } catch (error) {
      console.error("Login error : ",error);
      alert("Login Failed")
    }
  }

  return <>
    <div className=' w-full h-screen p-2 flex justify-center items-center ' >
      <div className='w-[80%] h-full bg-[#ffffffb2] rounded-2xl flex justify-center items-center p-2 ' >
        <div className=' w-[60%] h-full bg-[#0329ff] rounded-2xl flex justify-center items-center ' >
          <img src={login} alt=""
          className=' h-[70%] ' />
        </div>
        {/* ==== Login ==== */}
        <form 
        onSubmit={handleSubmit}
        className=' w-[40%] bg-[#F2F6FF] h-full rounded-2xl p-5 flex flex-col justify-center gap-2  '
         >
          <h1 className=' text-2xl uppercase font-bold text-center ' >Login</h1>
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder='Enter Email' required 
          onChange={handleChange}
          value={userData.email}
          className=' w-full bg-[#ffffff] shadow p-2 rounded outline-0  '
          />

          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder='Enter Password' required 
          onChange={handleChange}
          value={userData.password}
          className=' w-full bg-[#ffffff] shadow p-2 rounded outline-0  '
          />
          <a href="" className=' text-right text-[#0320ff] ' >Forgot Password</a>

          <button className=' bg-[#0329ff] p-2 rounded text-white font-bold  cursor-pointer ' 
          type='submit'  >Login</button>
          <p className='text-center' >don't have account ?<Link to="/signup" className="text-[#0601f5]">
    create account
  </Link> </p>
        </form>
      </div>

    </div>
  </>
}

export default Login