import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import Logo from '../assets/logo.png'

const SideBar = () => {
  const { isLoggedIn, logout, activePage,setActivePage } = useContext(AuthContext);
  const navigate = useNavigate();

  const pages = ["dashboard","appointments","patients","doctors","Reports"]

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success('Logged out Successfull', {
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

  return (
    <>
 
        {/* ------ Side Bar ------- */}
        <div className='  h-full   bg-[#ffffff] text-black font-semiboldj rounded ' >
          {isLoggedIn && (
            <>
            {/* ---- Logos ---- */}
            <div className=' w-full h-[15%] bg-[#ffffff] flex flex-col  justify-center items-center ' >
              <div className=' w-full h-full flex justify-center items-center ' >
                <img src={Logo} className=' w-[20%] h-[80%] ' alt="" />
              <h1 className=' text-2xl font-bold text-[#0838f5] ' >HospitalCare</h1>
              </div>
              <p>Doctor Dashboard</p>
            </div>

              {/* ----------- Links ------------- */}
              <div className='w-full bg-[#05134b] rounded-r-2xl h-full flex flex-col gap-2 text-white p-2 ' >
                <button
                  className=' bg-[#ffffff] text-[#0838f5] p-2 rounded cursor-pointer '
                ><i className="fa-solid fa-circle-user text-3xl "></i>
                </button>

                <div className=' flex flex-col  ' >
                  { pages.map(page =>(
                    <button 
                    key={page}
                    className={` cursor-pointer text-left p-2 rounded ${activePage === page ? 'bg-[#0526ff]' : ''}`}
                    onClick={()=>setActivePage(page)}
                    >
                      {page.charAt(0).toUpperCase()+page.slice(1)}
                    </button>
                  ))
                  
                  }
                </div>

                {/* <ul className=' w-full flex flex-col  gap-3 ' >
                  <li className=' w-full border-2 flex justify-between p-2 ' ><Link className={({ isActive }) => isActive ? " text-[#ffffff] font-semibold rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="/dashboard" >Dashboard</Link></li>
                  <li><Link className={({ isActive }) => isActive ? " text-[#0526ff] border-b-2 border-b-[#0526ff]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="patients" >Patients</Link></li>
                  <li><Link className={({ isActive }) => isActive ? " text-[#0526ff] border-b-2 border-b-[#0526ff]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="doctors" >Doctors</Link></li>
                  <li><Link className={({ isActive }) => isActive ? " text-[#0526ff] border-b-2 border-b-[#0526ff]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="appointments" >Appointments</Link></li>
                  <li><Link className={({ isActive }) => isActive ? " text-[#0526ff] border-b-2 border-b-[#0526ff]  font-semibold py-1 px-2 rounded-[0.2rem] " : "font-semibold  py-1 px-2 rounded-[0.2rem] "} to="reports" >Reports</Link></li> 
                </ul> */}
                {/* ---- Logout ----- */}
                <div>
                  {isLoggedIn && (
                    <>
                      <button className='font-semibold bg-[#0329ff] text-white px-2.5  py-1 rounded'
                        onClick={handleLogout}
                      > Logout
                      </button>
                    </>
                  )}
                </div>
              </div>

            </>
          )}
        </div> 



    </>
  )
}

export default SideBar