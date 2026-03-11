import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import logo from '../assets/logo.png'
import loginImg from '../assets/login.png'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { toast, Bounce } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate();
  const { login,roles,userId} = useContext(AuthContext);


  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setUserData({
      ...userData, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: userData.email,
        password: userData.password
      }
      const response = await axios.post(
        "http://localhost:8080/api/auth/login", payload
      )
      

      const jwtToken = response.data.jwt;
      const userRole = response.data.roleTypes;
      const loginUserId = response.data.userId;
      userId(loginUserId); 
      // // --------- Set Doctor Info -------
      // const res = await axios.get(`http://localhost:8080/api/doctors/doctor/id/${loginUserId}`)
      // setDoctorInfo(res.data)

      // ----------- Role Sets ----------

      roles(userRole);
      console.log("User Role : ",userRole);
      console.log("User id : ",loginUserId); 
      // if(userRole === "ADMIN" ){
      //   roles(userRole);
      //   console.log("User Role : ",userRole.data);
      // } else if(userRole === "DOCTOR"){
      //   roles(userRole);
      //   console.log("User Role : ",userRole.data);
      // } else{
      //   roles(userRole);
      //   console.log("User Role : ",userRole.data);
      // }
      
      console.log("Response : ", response.data)
      login(jwtToken); 

      setUserData({
        email: "",
        password: ""
      })

       toast.success('Login Successfull ✅ ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      navigate("dashboard");

    } catch (error) {
      // console.error("Login error : ", error);
      toast.error('Invalid user name or password ❌', {
        position: "top-right",
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
   
 

  return <>
    <div className=' w-full h-screen p-2 flex justify-center items-center ' >
      <div className='w-[80%] h-full bg-[#ffffffb2] rounded-2xl flex justify-center items-center p-2 ' >
        <div className=' w-[60%] h-full bg-[#0329ff] rounded-2xl flex justify-center items-center ' >
          <img src={loginImg} alt=""
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