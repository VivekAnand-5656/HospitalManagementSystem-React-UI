import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import TotalCards from "../Components/TotalCards";
import PolarChart from "../Components/PolarChart";
import { useNavigate } from "react-router-dom";
import PatientAppointment from "./PatientAppointment";
// import { AuthContext } from "../context/AuthContext";

const PatientDashboard = () => {
    const { token, id,appointments,setAppointments } = useContext(AuthContext);
    const navigate = useNavigate();

    const [todayAppointments, setTodayAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [myappCount, setMyappCount] = useState(0);
    const [myDoctorCount, setMyDoctorCount] = useState(0);
    // -----------------------------------------------------
    const totalname0 = "Today Appointments"
    const totalname1 = "My Appointments"
    const totalname2 = "My Doctors"
    const totalname3 = "My Prescriptions" 

    // const patientId = 6; // later make dynamic: user.id

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8080/api/patients/patient/myappointments/${id}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setAppointments(res.data);
                setMyappCount(res.data.length)


            } catch (err) {
                console.error("Error fetching appointments", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);
    // --------- My doctors -------
    const [myDoctors, setMyDoctors] = useState([]);
    useEffect(() => {
        const uniqDoctors = [];
        appointments.forEach((appt) => {
            const exists = uniqDoctors.find(
                (doc) => doc.doctorId === appt.doctorId
            );
            if (!exists) {
                uniqDoctors.push({
                    doctorId: appt.doctorId,
                    doctorName: appt.doctorName
                });
            }
            setMyDoctors(uniqDoctors);
            setMyDoctorCount(uniqDoctors.length)
        });

    }, [appointments])
    // ----- Navigate to Appointment --------
    const [clickNavigate, setClickNavigate] = useState();
    if (clickNavigate === "patientappointment") {
        console.log(Date.now())
        return <PatientAppointment />
    }
    // ---------------------- Today Appointment------------
    // const today = new Date().toISOString().split("T")[0];
    const today = new Date().toISOString().split("T")[0];
    useEffect(() => {
        const setAp = () => {
            const localapp = [];
            appointments.forEach((app) => {
                if (app.appointmentDate === today) {
                    localapp.push(app)
                }
            });
            setTodayAppointments(localapp); 
        }
        setAp();

    }, [appointments])


    return (
        <div className='p-2 w-full h-full flex flex-col gap-3 overflow-auto '>
            {/* -------- Top Cards -------- */}
            <div className='w-full flex gap-3 justify-center'>
                <TotalCards name={totalname0} num={todayAppointments.length} />
                <TotalCards name={totalname1} num={myappCount} />
                <TotalCards name={totalname2} num={myDoctorCount} />
                <TotalCards name={totalname3} num={0} />
            </div>
            <div className='w-full h-full flex gap-3  '>
                {/* ------- Left Side ----- */}
                <div className='w-[75%] h-full flex flex-col gap-3'>

                    {/* ---- Today's Appointments ---- */}
                    <div className='bg-white rounded-lg shadow p-3'>
                        <div className='flex justify-between mb-2'>
                            <h1 className='text-xl font-bold'>Today's Appointments</h1>
                            <button
                                onClick={() => setClickNavigate("patientappointment")}
                                className='text-[#0612f1] font-semibold cursor-pointer '>View All</button>
                        </div>

                        <div className="max-h-75 overflow-auto">
                            {loading ? (
                                <p className="text-gray-500">Loading...</p>
                            ) : todayAppointments.length === 0 ? (
                                <p className="text-gray-500">No Appointments Found</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full  rounded-lg overflow-hidden">

                                        <thead className="bg-[#07275A] text-white text-[0.8rem] ">
                                            <tr>
                                                <th className="px-2 py-1 ">ID</th>
                                                <th className="px-2 py-1">Date</th>
                                                <th className="px-2 py-1">Time</th>
                                                <th className="px-2 py-1">Reason</th>
                                                <th className="px-2 py-1">Doctor</th>
                                                <th className="px-2 py-1">Department</th>
                                                <th className="px-2 py-1">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {todayAppointments.map((appt) => (
                                                <tr
                                                    key={appt.id}
                                                    className="text-center border-t hover:bg-[#07275A] hover:scale-101 hover:text-white cursor-pointer ease-linear transition-all text-[0.8rem]  "
                                                >
                                                    <td className="px-2 py-1">{appt.id}</td>
                                                    <td className="px-2 py-1">{appt.appointmentDate}</td>
                                                    <td className="px-2 py-1">{appt.appointmentTime}</td>
                                                    <td className="px-2 py-1">{appt.reason}</td>
                                                    <td className="px-2 py-1">{appt.doctorName}</td>
                                                    <td className="px-2 py-1">{appt.departments}</td>

                                                    <td className="p-3">
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-sm font-semibold
                          ${appt.appointmentStatus === "BOOKED"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-gray-100 text-gray-600"
                                                                }`}
                                                        >
                                                            {appt.appointmentStatus}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ---- Doctors ---- */}
                    <div className='bg-white rounded-lg shadow p-3'>
                        <h1 className='text-xl font-bold mb-2'>My Doctor's</h1>

                        <div className="max-h-75 p-2 overflow-auto flex flex-wrap gap-4 ">
                            {myDoctors.map((doc) => (
                                <div
                                    key={doc.doctorId}
                                    className="p-2 bg-[#07275A] shadow shadow-[#8f9ef2] rounded-lg cursor-pointer hover:scale-110 transition-all ease-linear  "
                                >
                                    <h3 className="font-semibold text-[#ffffff] ">{doc.doctorName}</h3>
                                    <p className="text-[#ffffff]">Doctor ID: {doc.doctorId}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* --------- Right Side ------- */}
                <div className='w-[25%] overflow-auto scroll-smooth h-full bg-white rounded-lg shadow p-3 flex flex-col gap-3'>
                    <h1>No Prescription</h1>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;