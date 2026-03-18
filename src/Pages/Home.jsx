import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AdminLogin from '../AuthPages/AdminLogin';
import DoctorLogin from '../AuthPages/DoctorLogin';
import PatientLogin from '../AuthPages/PatientLogin';

const Home = () => {
    // --------------- Login Navigation --------
    const [activeLogin, setActiveLogin] = useState("adminlogin");
    const renderLogin = () => {
        if (activeLogin === "adminlogin") {
            return <AdminLogin />
        }
        if (activeLogin === "doctorlogin") {
            return <DoctorLogin />
        }
        if (activeLogin === "patientlogin") {
            return <PatientLogin />
        }
    }
    // .--------------------------------------
    return (
        <>
            <div className='background-gradient min-w-screen h-[90vh] flex justify-between items-center ' >
                {/* --- Headings --- */}
                <div className=' w-[35%] h-full flex flex-col justify-center gap-2 p-2  ' >
                    <h1 className=' text-7xl font-bold   ' >Hopital Care System</h1>
                    <p className=' font-semibold ' >Moder Healthcare Solution to Manage Your Hospital Efficiently</p>
                </div>
                <div className='w-[60%] h-full flex flex-col justify-center items-center  p-2 ' >
                    <div className=' w-[50%] h-[80%] p-2 shadow-2xl rounded-2xl flex flex-col items-center gap-2 bg-[#ffffff] ' >
                        <div className=' w-full flex flex-col justify-center items-center ' >
                            <h1 className=' font-bold text-3xl ' >Welcome Back</h1>
                            <p className=' font-semibold  ' >Login to your account</p>
                        </div>
                        <div className='  rounded flex justify-center gap-2  '>
                            <button
                                onClick={() => setActiveLogin("adminlogin")}
                                className={`px-3 py-1 rounded ${activeLogin === "adminlogin" ? "bg-blue-600 text-white" : "border cursor-pointer"}`}
                            >
                                Admin
                            </button>
                            <button
                                onClick={() => setActiveLogin("doctorlogin")}
                                className={`px-3 py-1 rounded ${activeLogin === "doctorlogin" ? "bg-blue-600 text-white" : "border cursor-pointer "}`}
                            >
                                Doctor
                            </button>
                            <button
                                onClick={() => setActiveLogin("patientlogin")}
                                className={`px-3 py-1 rounded ${activeLogin === "patientlogin" ? "bg-blue-600 text-white" : "border cursor-pointer"}`}
                            >
                                Patient
                            </button>
                        </div>
                        {/* ----- Render Login Pages ----- */}
                        <div className=' w-full h-full ' >
                            {
                                renderLogin()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home