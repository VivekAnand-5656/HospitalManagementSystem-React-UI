
import React, { useContext, useState } from 'react'
import TotalCards from '../Components/TotalCards'
import { AuthContext } from '../context/AuthContext';

const AdminPatient = () => {
  const { allDoctors, departments, allPatients } = useContext(AuthContext);


  return (
    <>
      <div className='p-2 w-full h-full flex flex-col gap-2 '>

        {/* ---- Top Section ------- */}

        <div className=' w-full h-full flex flex-col gap-2 ' >
          {/* ----- TopBar ----- */}

          <div className=' w-full flex bg-[#ffffff] p-2 flex-wrap justify-between gap-3 items-center ' >
            <input type="search" name="" id="" placeholder='Search Patients.....'
              className=' w-[70%] border-2 border-[#bbbbbb] p-2 rounded-lg outline-0   ' />
            <select name="" id="" className=' font-bold p-2 ' >
              <option value="" selected >All Departments</option>
              {
                departments.map((dpts, index) => (
                  <option value={dpts} key={index} >{dpts}</option>
                ))
              }
            </select>
            <button className=' bg-green-500 text-white font-semibold p-2 rounded cursor-pointer ' >➕ Add Patients</button>

          </div>
          {/* ----------- Today's Appointments ----- */}

          <div className=' w-full h-full  flex justify-center gap-2  ' >

            {/* --------------- Doctors List --------- */}
            <div className="w-full h-full overflow-x-auto bg-white rounded-lg shadow p-2">
              <h1 className=' text-2xl font-bold ' >Doctor's</h1>

              <table className="w-full border-collapse  text-left text-[1rem]">

                <thead className="bg-[#0612f1] text-white text-[1rem] p-2  ">
                  <tr>
                    <th className="px-2 py-1">S.N.</th>
                    <th className="px-2 py-1">ID</th>
                    <th className="px-2 py-1">Name</th>
                    <th className="px-2 py-1">DOB</th>
                    <th className="px-2 py-1">Email</th>
                    <th className="px-2 py-1">Gender</th>
                    <th className="px-2 py-1">Created-At</th>
                    <th className="px-2 py-1">BloodGroup</th>
                    <th className="px-2 py-1">Action</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">

                  {allPatients.map((ptn, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-[#f3f4fb] transition"
                    >

                      <td className="px-2 py-2">{index + 1}</td>
                      <td className="px-2 py-2">{ptn.id}</td>
                      <td className="px-2 py-2">{ptn.name} AM</td>
                      <td className="px-2 py-2">{ptn.birthDate}</td>
                      <td className="px-2 py-2">{ptn.email}</td>
                      <td className="px-2 py-2">{ptn.gender}</td>
                      <td className="px-2 py-2">{ptn.createdAt}</td>
                      <td className="px-2 py-2">{ptn.bloodGroup}</td>
                      <td className="px-2 py-2 flex gap-2  ">
                        <button className=' bg-[#0a19f5] text-white font-semibold px-2 rounded cursor-pointer ' >👁️</button>
                        <button className=' bg-[#f50a0a] text-white font-semibold px-2 rounded cursor-pointer ' >🗑️</button>
                      </td>

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

export default AdminPatient