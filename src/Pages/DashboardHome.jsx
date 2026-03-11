import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import TotalCards from '../Components/totalCards';
import Appointments from './Appointments';

const DashboardHome = () => {
    const { id, setDoctorInfo, doctor, token } = useContext(AuthContext);
    const [pnum, setPnum] = useState(0);
    const [prnum, setPrnum] = useState(0);
    const [dnum, setDnum] = useState(0);
    // Ye dummy data hai, tum API ya state se fetch kar sakte ho
    // const totals =["totalPatients","totalPrescriptions","totalAppointments"]
    const text1 = "TotalPatients"
    const text2 = "TotalPrescriptions"
    const text3 = "TotalDoctors"
    const fetchPatientNum = async () => {
        try {
            // ----- Patient ----
            const resPatient = await axios.get(
                "http://localhost:8080/api/doctors/doctor/allPatientNum",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            // console.log("Total Patients Num :- ",resPatient.data);
            setPnum(resPatient.data);
            // ---- Doctor ----
            const resDoctor = await axios.get(
                "http://localhost:8080/api/doctors/doctor/allDoctorNum",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setDnum(resDoctor.data)

            // ---- Appintment ----
            const resAppointment = await axios.get(
                "http://localhost:8080/api/doctors/doctor/allAppointmentNum",
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setPrnum(resAppointment.data);

        } catch (error) {
            console.log("Data nhi mila bhai ");

        }
    }
    useEffect(()=>{
        fetchPatientNum();
    })





    //   ------ Fetch Doctor -----
    const fetchDoctor = async () => {
        try {
            console.log("Fetching Doctor with : ", id)
            const response = await axios.get(
                `http://localhost:8080/api/doctors/doctor/id/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`  // your JWT
                }
            }
            );
            console.log("Id ye hai  : ", id)
            console.log("User API Data : ", response.data)

            setDoctorInfo(response.data);

        } catch (error) {
            console.log("FULL ERROR :", error);
            console.log("ERROR RESPONSE :", error.response);
            console.log("ERROR STATUS :", error?.response?.status);
        }
    }
    useEffect(() => {
        if (id !== null && id !== undefined) {
            fetchDoctor();
        }

    }, [id]);

    return (
        <>
            <div className=' w-full h-full p-2 bg-[#9ac2c331] ' >
                {/* ---- Top Navbar ---- */}
                <div className=' w-full h-[10%] p-2 bg-[#ffffff] flex justify-around items-center rounded-2xl  ' >
                    <input
                        className=' w-[80%] h-full rounded p-1 outline-0 border-2 border-[#1404fa] '
                        type="search" name="search" placeholder='Search Patients..., Appointments....' id="" />
                    <div className=' w-[20%] h-full flex justify-center gap-2 text-[#1404fa] items-center '>
                        <i className="fa-solid fa-bell cursor-pointer "></i>
                        <i className="fa-regular fa-moon cursor-pointer "></i>
                    </div>
                </div>
                {/* ----- Heading ------- */}
                <div className=' w-full  ' >
                    {doctor ? (
                        <h1 className='text-4xl font-bold'>Welcome, {doctor.name} 👋</h1>
                    ) : (
                        <h1 className='text-4xl font-bold'>Loading...</h1>
                    )}
                    <p>Here's your today's overview & schedule.</p>
                </div>
                {/* ----- all totals contents ----- */}
                <div className=' w-full flex justify-self-start gap-3 items-center p-2 ' >
                    <TotalCards text={text1} num={pnum} />
                    <TotalCards text={text2} num={prnum} />
                    <TotalCards text={text3} num={dnum} />

                </div>
                {/* -------------- Appointments ----- */}
                <Appointments/>

                {/* ----------------------------------- */}
            </div>
        </>
    );
};

export default DashboardHome;