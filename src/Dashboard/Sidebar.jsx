import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    // const [activePage, setActivePage] = useState("admindashboard")
    const { activePage, setActivePage, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logingout = () => {
        logout();
        navigate("/")
        toast.success('Logout successfull ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    return (
        <>
            <div className=' w-[15%] bg-[#e2e7fd]  ' >
                <div className=' w-full h-[10%] bg-[#ffffff] flex justify-center items-center ' >
                    <h1 className=' text-2xl font-bold text-[#0612f1] ' >Hospital Care</h1>
                    <img src={logo} alt="" className=' w-[15%] h-[50%] justify-self-center  ' />
                </div>
                <p className=' bg-[#0612f1] text-white font-semibold text-center p-2 ' >Admin Dashboard </p>
                <ul className=' h-[50%] flex flex-col gap-3  ' >
                    <li className='w-full ' ><button
                        className={`${activePage === "admindashboard" ? "bg-[#1611a4] w-full p-2 font-semibold text-white cursor-pointer " : "w-full cursor-pointer p-2  "}`}
                        onClick={() => setActivePage("admindashboard")}
                    >Dashboard</button></li>
                    <li><button
                        className={`${activePage === "adminDoctor" ? "bg-[#1611a4] w-full p-2 font-semibold text-white cursor-pointer " : "w-full p-2 cursor-pointer  "}`}
                        onClick={() => setActivePage("adminDoctor")}
                    >Doctor</button></li>
                    <li><button
                        className={`${activePage === "adminPatient" ? "bg-[#1611a4] w-full p-2 font-semibold text-white cursor-pointer " : "w-full p-2 cursor-pointer  "}`}
                        onClick={() => setActivePage("adminPatient")}
                    >Patient</button></li>
                    <li><button
                        className={`${activePage === "adminAppointments" ? "bg-[#1611a4] w-full p-2 font-semibold text-white cursor-pointer " : "w-full p-2 cursor-pointer  "}`}
                        onClick={() => setActivePage("adminAppointments")}
                    >Appointments</button></li>
                    <li><button
                        className={`${activePage === "adminReports" ? "bg-[#1611a4] w-full p-2 font-semibold text-white cursor-pointer " : "w-full p-2 cursor-pointer  "}`}
                        onClick={() => setActivePage("adminReports")}
                    >Reports</button></li>
                </ul>
                <button
                    onClick={logingout}
                    className=' bg-[#1611a4] font-bold text-white w-full p-2 cursor-pointer  ' >Logout</button>
            </div>
        </>
    )
}

export default Sidebar