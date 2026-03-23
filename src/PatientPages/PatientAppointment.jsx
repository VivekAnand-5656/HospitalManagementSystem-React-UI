import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import TotalCards from '../Components/TotalCards';

const PatientAppointment = () => {
  const { departments, appointments } = useContext(AuthContext);
  return (
    <>
      <div className='p-1 w-full h-full flex flex-col gap-2 '>
        <div className='w-full flex gap-3 justify-between'>
          <TotalCards name={"Total Appointments"} num={appointments.length} />
        </div>
        <div className=' w-full h-full flex flex-col gap-2 ' >
          <div className=' w-full h-10 flex bg-[#ffffff] rounded-lg flex-wrap justify-between gap-3 items-center ' >
            <input type="search" name="search" id="" placeholder='Search Patients.....'
              className=' w-[50%] h-full border-2 border-[#bbbbbb] p-2 rounded-lg outline-0   ' />
            <select name="" id="" className=' font-bold p-2 rounded cursor-pointer outline-0 hover:bg-[#07275A] hover:text-white ' >
              <option value="" selected >All Departments</option>
              {
                departments.map((dpts, index) => (
                  <option className=' hover:bg-[#4ded12] ' value={dpts} key={index} >{dpts}</option>
                ))
              }
            </select>
            <button className=' bg-green-500 text-white font-semibold p-2 rounded cursor-pointer ' >➕ Add Patients</button>

          </div>
          {/* -------------- Table ------------- */}
          <div className="max-h-75 overflow-auto">
            {!appointments ? (
              <p className="text-gray-500">Loading...</p>
            ) : appointments.length === 0 ? (
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
                    {appointments.map((appt) => (
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
      </div>
    </>
  )
}

export default PatientAppointment