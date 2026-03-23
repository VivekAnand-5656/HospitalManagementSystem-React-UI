import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';

const Sidebar = () => {

    const { activePage, setActivePage, logout, roles } = useContext(AuthContext);
    const navigate = useNavigate();

    const logingout = () => {
        logout();
        navigate("/")
        toast.success('Logout successful', {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className='w-[15%] h-screen bg-[#07275A] text-white flex flex-col justify-between left-0 top-0'>

            {/* -------- Top Section -------- */}
            <div>

                {/* Logo */}
                <div className='w-full h-[70px] bg-[#ffffff] flex items-center justify-center gap-2'>
                    <h1 className='text-lg font-bold text-black'>Hospital Care</h1>
                    <img src={logo} alt="" className='w-[30px]' />
                </div>

                <p className='text-white font-semibold text-center py-2'>
                    {roles?.[0]} Dashboard
                </p>

                {/* Menu */}
                {

                    roles && roles.length === 0 ? (
                        <div className="text-white p-4">Loading...</div>
                    ) : roles.includes("ADMIN") ? (

                        // ✅ ADMIN
                        <ul className='flex flex-col gap-2 px-2'>
                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "admindashboard"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("admindashboard")}
                                >
                                    <i className="fa-solid fa-gauge mr-2"></i> Dashboard
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "adminDoctor"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("adminDoctor")}
                                >
                                    <i className="fa-solid fa-user-doctor mr-2"></i> Doctor
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "adminPatient"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("adminPatient")}
                                >
                                    <i class="fa-solid fa-bed"></i> Patients
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "adminAppointments"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("adminAppointments")}
                                >
                                    <i className="fa-solid fa-calendar-days mr-2"></i> Appointments
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "adminReports"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("adminReports")}
                                >
                                    <i className="fa-solid fa-calendar-days mr-2"></i> Reports
                                </button>
                            </li>
                        </ul>
                        

                    ) : roles.includes("PATIENT") ? (

                        // ✅ PATIENT
                        <ul className='flex flex-col gap-2 px-2'>
                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "patientdashboard"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer"
                                        }`}
                                    onClick={() => setActivePage("patientdashboard")}
                                >
                                    <i className="fa-solid fa-gauge mr-2"></i> Dashboard
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`w-full text-left p-2 rounded ${activePage === "patientappointment"
                                        ? "bg-white text-[#0903ae] font-semibold cursor-pointer"
                                        : "hover:bg-white hover:text-black text-white font-semibold cursor-pointer "
                                        }`}
                                    onClick={() => setActivePage("patientappointment")}
                                >
                                    <i className="fa-solid fa-calendar-days mr-2"></i> My Appointments
                                </button>
                            </li>
                        </ul>

                    ) : roles.includes("DOCTOR") ? (

                        // ✅ DOCTOR
                        <ul className='flex flex-col gap-2 px-2 text-white'>
                            <li className="p-2">Dashboard</li>
                            <li className="p-2">Appointments</li>
                        </ul>

                    ) : null

                }


            </div>

            {/* -------- Bottom Logout -------- */}
            <div className='p-2'>
                <button
                    onClick={logingout}
                    className='bg-[#ffffff] text-black w-full p-2 rounded hover:bg-[#010764] transition-all ease-in-out hover:text-white cursor-pointer'
                >
                    <i className="fa-solid fa-power-off mr-2"></i> Logout
                </button>
            </div>

        </div>
    )
}

export default Sidebar