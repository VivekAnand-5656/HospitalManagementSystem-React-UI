

import React, { useContext, useState } from 'react'
import TotalCards from '../Components/TotalCards'
import { AuthContext } from '../context/AuthContext';

const AdminAppointments = () => {
  const { departments, allAppointments } = useContext(AuthContext);


  return (
    <>
      <div className='p-2 w-full h-full flex flex-col gap-2 '>

        {/* ---- Top Section ------- */}

        <div className=' w-full h-full flex flex-col gap-2 ' >
          {/* ----- TopBar ----- */}

          <div className=' w-full flex bg-[#ffffff] p-2 flex-wrap justify-between gap-3 items-center ' >
            <input type="search" name="search" id="" placeholder='Search Patients.....'
              className=' w-[60%] border-2 border-[#bbbbbb] p-2 rounded-lg outline-0   ' />
            <select name="" id="" className=' font-bold p-2 ' >
              <option value="" selected >All Departments</option>
              {
                departments.map((dpts, index) => (
                  <option value={dpts} key={index} >{dpts}</option>
                ))
              }
            </select>
            <button className=' bg-green-500 text-white font-semibold p-2 rounded cursor-pointer ' >➕ Add Appointments</button>

          </div>
          {/* ----------- Today's Appointments ----- */}

          <div className=' w-full h-full  flex justify-center gap-2  ' >

            {/* --------------- Doctors List --------- */}
            <div className="w-full h-full overflow-x-auto bg-white rounded-lg shadow p-2">
              <h1 className=' text-2xl font-bold ' >Doctor's</h1>

              <table className="w-full border-collapse  text-left text-[1rem]">

                <thead className="bg-[#07275A] text-white text-[0.9rem] p-2  ">                
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

                <tbody className="text-gray-700  ">

                  {allAppointments.map((aptn, index) => (
                    <tr
                      key={index}
                     className="text-center border-t hover:bg-[#07275A] hover:scale-101 hover:text-white cursor-pointer ease-linear transition-all text-[0.8rem]  "
                    >

                      <td className="px-2 py-2">{index + 1}</td>
                      <td className="px-2 py-2">{aptn.id}</td>
                      <td className="px-2 py-2">{aptn.appointmentTime}</td>
                      <td className="px-2 py-2">{aptn.appointmentDate} AM</td>
                      <td className="px-2 py-2">{aptn.reason}</td>
                      <td className="px-2 py-2">{aptn.doctorId}</td>
                      <td className="px-2 py-2">{aptn.patientId}</td>
                      <td className={(aptn.appointmentStatus === "CANCELLED" ? "text-[#ff0202] px-2 py-2 rounded-[0.3rem] font-semibold ":" text-[#058787] px-2 py-2 font-semibold  ")}>{aptn.appointmentStatus}</td>
                      

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
            {/* ------- Right Side ---------- */}
            {/* <div className=' w-[25%] h-full bg-[#ffffff] rounded p-2 flex flex-col gap-2 ' >
              <h1 className=' text-2xl font-bold  ' >Departments</h1>

            </div> */}
          </div>
        </div>


      </div>
    </>
  )
}

export default AdminAppointments