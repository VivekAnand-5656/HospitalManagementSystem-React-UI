import React, { useContext, useEffect, useState } from 'react'
import TotalCards from '../Components/TotalCards'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const DashboardHome = () => {
    const { token } = useContext(AuthContext);
    // ---- Cards Names -----
    const [doctorname, setDoctorname] = useState("Total Doctor's")
    const [patientname, setPatientname] = useState("Total Patients")
    const [appointmentname, setAppointmentname] = useState("Total Appointments")
    const [departmentname, setDepartmentname] = useState("Total Departments")
    // ------------- Today's Appointments API Call ------------
    // ------------ API Datas ------------
    const [apoointmentApi, setApoointmentApi] = useState([]);
    const [doctorApi, setDoctorApi] = useState([]);
    // -------------------------------------------------------- 
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const [aptRes, dtrRes] = await Promise.all([
                    axios.get("http://localhost:8080/api/admin/todayAppointments",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    ),
                    axios.get("http://localhost:8080/api/admin/doctors",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                ]);
                setApoointmentApi(aptRes.data);
                setDoctorApi(dtrRes.data);
                console.log(aptRes)
                console.log(dtrRes)

            } catch (error) {
                console.log("Error : ", error)
            };
        };

        if (token) {
            fetchAppointments();
        }
    }, [token]);


    return (
        <>
            <div className='p-2 w-full flex flex-col gap-2 '>
                <h1 className=' text-3xl font-bold  ' >Dashboard</h1>
                <div className=' w-full flex gap-2 justify-center items-center '>
                    <TotalCards name={doctorname} />
                    <TotalCards name={patientname} />
                    <TotalCards name={appointmentname} />
                    <TotalCards name={appointmentname} />
                </div>
                {/* ----------- Today's Appointments ------------------ */}
                <div className=' w-full h-[65vh] flex justify-center  ' >
                    <div className=' w-[50%] h-auto flex  flex-col gap-2  p-2 ' >
                        <div className=' w-full flex justify-between ' >
                            <h1 className=' text-2xl font-bold ' >Today's Appointments</h1>
                            <button className=' text-[#0612f1] cursor-pointer font-semibold ' >View All</button>
                        </div>
                        <div className="w-full h-[50%]  overflow-x-auto scroll-auto bg-white rounded-lg shadow p-2">
                            {
                                apoointmentApi.length === 0 ? (
                                    <div className=' w-full h-full flex justify-center items-center ' >
                                        <p className=' text-2xl ' >No Appointments Found</p>
                                    </div>
                                ) : (
                                    <table className="w-full border-collapse  text-left text-[0.9rem]">

                                        <thead className="bg-[#0612f1] text-white text-[0.9rem] ">
                                            <tr>
                                                <th className="px-2 py-1">S.N.</th>
                                                <th className="px-2 py-1">ID</th>
                                                <th className="px-2 py-1">Apt-Time</th>
                                                <th className="px-2 py-1">Apt-Date</th>
                                                <th className="px-2 py-1">Reason</th>
                                                <th className="px-2 py-1">Doctor</th>
                                                <th className="px-2 py-1">Patient</th>
                                                <th className="px-2 py-1">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-gray-700">

                                            {apoointmentApi.map((apt, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-b hover:bg-gray-50 transition"
                                                >

                                                    <td className="px-2 py-1">{index + 1}</td>
                                                    <td className="px-2 py-1">{apt.id}</td>
                                                    <td className="px-2 py-1">{apt.appointmentTime} AM</td>
                                                    <td className="px-2 py-1">{apt.appointmentDate}</td>
                                                    <td className="px-2 py-1">{apt.reason}</td>
                                                    <td className="px-2 py-1">{apt.doctorId}</td>
                                                    <td className="px-2 py-1">{apt.patientId}</td>

                                                    <td className="px-2 py-1">
                                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                                                            {apt.appointmentStatus}
                                                        </span>
                                                    </td>

                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                )
                            }
                        </div>
                        {/* --------------- Doctors List --------- */}
                        <div className="w-full h-[50%] overflow-x-auto scroll-auto bg-white rounded-lg shadow p-2">
                            <h1 className=' text-2xl font-bold ' >Doctor's</h1>

                            <table className="w-full border-collapse  text-left text-[0.9rem]">

                                <thead className="bg-[#0612f1] text-white text-[0.9rem] ">
                                    <tr>
                                        <th className="px-2 py-1">S.N.</th>
                                        <th className="px-2 py-1">ID</th>
                                        <th className="px-2 py-1">Name</th>
                                        <th className="px-2 py-1">Specialization</th>
                                        <th className="px-2 py-1">Email</th>
                                        <th className="px-2 py-1">Departments</th>
                                    </tr>
                                </thead>

                                <tbody className="text-gray-700">

                                    {doctorApi.map((dtr, index) => (
                                        <tr
                                            key={index}
                                            className="border-b hover:bg-gray-50 transition"
                                        >

                                            <td className="px-2 py-1">{index + 1}</td>
                                            <td className="px-2 py-1">{dtr.id}</td>
                                            <td className="px-2 py-1">{dtr.name} AM</td>
                                            <td className="px-2 py-1">{dtr.specialization}</td>
                                            <td className="px-2 py-1">{dtr.email}</td>
                                            <td className="px-2 py-1">{dtr.departments}</td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>

                    </div>
                    {/* ------- Right Side ---------- */}
                    <div className=' w-full bg-[#ffffff] rounded p-2 ' >
                        <h1 className=' text-2xl font-bold  ' >Quick Actions</h1>
                        <div className=' w-full h-[90%] flex gap-2 flex-wrap p-2 text-center justify-center ' >
                            <div
                                className=' w-[20%] h-[40%] bg-[#EDF0F9]  rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out  ' >
                                <i className="fa-solid fa-user-doctor text-5xl text-[#060ef6] "></i>
                                <h1 className=' font-semibold ' >Add Doctor</h1>
                            </div>
                            <div className=' w-[20%] h-[40%] bg-[#d0f8d0] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out  ' >
                                <i className="fa-solid fa-bed text-5xl text-[#1f9804] "></i>
                                <h1>Add Patient</h1>
                            </div>
                            <div className=' w-[20%] h-[40%] bg-[#fdefdd] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out  ' >
                                <i className="fa-solid fa-book-medical text-5xl text-[#f68a06]"></i>
                                <h1>Create Appointments</h1>
                            </div>
                            <div className=' w-[20%] h-[40%] bg-[#e4fdfb] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out  ' >
                                <i className="fa-brands fa-dashcube text-5xl text-[#058d89]"></i>
                                <h1>Generate Report</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome