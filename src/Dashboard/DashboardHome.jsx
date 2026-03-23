import React, { useContext, useEffect, useState } from 'react'
import TotalCards from '../Components/TotalCards'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext' 
import PolarChart from '../Components/PolarChart'

const DashboardHome = () => {

    const {
        token,
        todayAppointments, setTodayAppointments,
        allDoctors, setAllDoctors,
        setDepartments, 
        setAllPatients, allPatients,
        allAppointments, setAllAppointments
    } = useContext(AuthContext);

    const [doctorname] = useState("Total Doctor's")
    const [patientname] = useState("Total Patients")
    const [appointmentname] = useState("Total Appointments")

    // -------- API CALL --------
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aptRes, dtrRes, dprtRes, pntsRes, allAppntRes] = await Promise.all([
                    axios.get("http://localhost:8080/api/admin/todayAppointments", {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get("http://localhost:8080/api/admin/doctors", {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get("http://localhost:8080/api/admin/departments", {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get("http://localhost:8080/api/admin/patients", {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get("http://localhost:8080/api/admin/appointments", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                setTodayAppointments(aptRes.data);
                setAllDoctors(dtrRes.data);
                setDepartments(dprtRes.data);
                setAllPatients(pntsRes.data);
                setAllAppointments(allAppntRes.data);

            } catch (error) {
                console.log("Error:", error);
            }
        };

        if (token) fetchData();
    }, [token]);

    return (
        <div className='p-2 w-full h-full flex flex-col gap-3 overflow-auto '>

            {/* -------- Top Cards -------- */}
            <div className='w-full flex gap-3 justify-center'>
                <TotalCards name={doctorname} num={allDoctors.length} />
                <TotalCards name={patientname} num={allPatients.length} />
                <TotalCards name={appointmentname} num={allAppointments.length} />
            </div>

            {/* -------- Main Section -------- */}
            <div className='w-full h-full flex gap-3  '>

                {/* -------- LEFT SIDE -------- */}
                <div className='w-[75%] h-full flex flex-col gap-3'>

                    {/* ---- Today's Appointments ---- */}
                    <div className='bg-white rounded-lg shadow p-3'>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-xl font-bold'>Today's Appointments</h1>
                            <button className='text-[#0612f1] font-semibold'>View All</button>
                        </div>

                        <div className="max-h-[300px] overflow-auto">
                            {
                                todayAppointments.length === 0 ? (
                                    <div className='h-[150px] flex justify-center items-center'>
                                        <p>No Appointments Found</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-[#07275A] text-white">
                                            <tr>
                                                <th className="p-2">S.N.</th>
                                                <th className="p-2">ID</th>
                                                <th className="p-2">Time</th>
                                                <th className="p-2">Date</th>
                                                <th className="p-2">Reason</th>
                                                <th className="p-2">Doctor</th>
                                                <th className="p-2">Patient</th>
                                                <th className="p-2">Status</th> 
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {todayAppointments.map((apt, i) => (
                                                <tr key={i} 
                                                className="text-center border-t hover:bg-[#07275A] hover:scale-101 hover:text-white cursor-pointer ease-linear transition-all text-[0.8rem]  " >
                                                    <td className="p-2">{i + 1}</td>
                                                    <td className="p-2">{apt.id}</td>
                                                    <td className="p-2">{apt.appointmentTime} AM</td>
                                                    <td className="p-2">{apt.appointmentDate}</td>
                                                    <td className="p-2">{apt.reason}</td>
                                                    <td className="p-2">{apt.doctorId}</td>
                                                    <td className="p-2">{apt.patientId}</td>
                                                    <td className="p-2">
                                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
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
                    </div>

                    {/* ---- Doctors ---- */}
                    <div className='bg-white rounded-lg shadow p-3'>
                        <h1 className='text-xl font-bold mb-2'>Doctor's</h1>

                        <div className="max-h-[300px] overflow-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#07275A] text-white">
                                    <tr>
                                        <th className="p-2">S.N.</th>
                                        <th className="p-2">ID</th>
                                        <th className="p-2">Name</th>
                                        <th className="p-2">Specialization</th>
                                        <th className="p-2">Email</th>
                                        <th className="p-2">Department</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {allDoctors.map((dtr, i) => (
                                        <tr key={i} 
                                        className="text-center border-t hover:bg-[#07275A] hover:scale-101 hover:text-white cursor-pointer ease-linear transition-all text-[0.8rem]  " >
                                            <td className="p-2">{i + 1}</td>
                                            <td className="p-2">{dtr.id}</td>
                                            <td className="p-2">{dtr.name}</td>
                                            <td className="p-2">{dtr.specialization}</td>
                                            <td className="p-2">{dtr.email}</td>
                                            <td className="p-2">{dtr.departments}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* -------- RIGHT SIDE (Quick Actions) -------- */}
                <div className='w-[25%] overflow-auto scroll-smooth h-full bg-white rounded-lg shadow p-3 flex flex-col gap-3'>
                    <PolarChart 
                    dr={allDoctors}
                    pt={allPatients}
                    ap={allAppointments}
                     />
                    <h1 className='text-xl font-bold'>Quick Actions</h1>         
                    <div className='flex flex-wrap gap-3'>

                        <div className='w-full bg-[#EDF0F9] rounded-xl flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition'>
                            <i className="fa-solid fa-user-doctor text-2xl text-[#060ef6]"></i>
                            <p className='text-xs font-semibold mt-1'>Add Doctor</p>
                        </div>

                        <div className='w-full bg-[#d0f8d0] rounded-xl flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition'>
                            <i className="fa-solid fa-bed text-3xl text-[#1f9804]"></i>
                            <p className='text-xs font-semibold mt-1'>Add Patient</p>
                        </div>

                        <div className='w-full bg-[#fdefdd] rounded-xl flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition'>
                            <i className="fa-solid fa-book-medical text-3xl text-[#f68a06]"></i>
                            <p className='text-xs font-semibold mt-1'>Appointments</p>
                        </div>

                        <div className='w-full bg-[#e4fdfb] rounded-xl flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition'>
                            <i className="fa-brands fa-dashcube text-3xl text-[#058d89]"></i>
                            <p className='text-xs font-semibold mt-1'>Reports</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardHome