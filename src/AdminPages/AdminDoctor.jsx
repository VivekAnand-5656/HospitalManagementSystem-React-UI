import React, { useContext, useState } from 'react'
import TotalCards from '../Components/TotalCards'
import { AuthContext } from '../context/AuthContext';

const AdminDoctor = () => {
  const { todayAppointments, allDoctors, departments, allPatients, allAppointments } = useContext(AuthContext);
  // ---------- Doctor Totals --------
  const aptName = "Today Appointments";
  const ptName = "Total Patients";
  const dtrName = "Total Doctors";
  const pndApName = "Pending Appointments";

  const [pendingAppointments, setPendingAppointments] = useState(0);
   
  let i =0;
  allAppointments.map((apt) => {
    if (apt.appointmentStatus === "PENDING") {
      setPendingAppointments(i++);
    }
  })
  
  

  return (
    <>
      <div className='p-2 w-full h-full flex flex-col gap-2 '>

        {/* ---- Top Section ------- */}

        <div className=' w-full h-full flex flex-col gap-2 ' >
          {/* ----- TopBar ----- */}

          <div className=' w-full flex flex-wrap justify-center gap-3 items-center ' >
            <TotalCards name={aptName} num={todayAppointments.length} />
            <TotalCards name={ptName} num={allPatients.length} />
            <TotalCards name={dtrName} num={allDoctors.length} />
            <TotalCards name={pndApName} num={pendingAppointments} />
          </div>
          {/* ----------- Today's Appointments ----- */}

          <div className=' w-full h-full  flex justify-center gap-2  ' >

            {/* --------------- Doctors List --------- */}
            <div className="w-[75%] h-full overflow-x-auto bg-white rounded-lg shadow p-2">
              <h1 className=' text-2xl font-bold ' >Doctor's</h1>

              <table className="w-full border-collapse  text-left text-[1rem]">

                <thead className="bg-[#07275A] text-white text-[1rem] p-2  ">
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

                  {allDoctors.map((dtr, index) => (
                    <tr
                      key={index}
                      className="text-center border-t hover:bg-[#07275A] hover:scale-101 hover:text-white cursor-pointer ease-linear transition-all text-[0.8rem]  "
                    >

                      <td className="px-2 py-2">{index + 1}</td>
                      <td className="px-2 py-2">{dtr.id}</td>
                      <td className="px-2 py-2">{dtr.name} AM</td>
                      <td className="px-2 py-2">{dtr.specialization}</td>
                      <td className="px-2 py-2">{dtr.email}</td>
                      <td className="px-2 py-2">{dtr.departments}</td>

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
            {/* ------- Right Side ---------- */}
            <div className=' w-[25%] h-full bg-[#ffffff] rounded p-2 flex flex-col gap-2 ' >
              <h1 className=' text-2xl font-bold  ' >Departments</h1>
              <div className="flex gap-3 flex-wrap">

                {
                  departments.map((dpts, index) => (
                    <div
                      key={index}
                      className="p-1.5 bg-[#fac400] text-white font-semibold rounded cursor-pointer hover:scale-110 transition-all ease-linear "
                    >
                      {dpts}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default AdminDoctor