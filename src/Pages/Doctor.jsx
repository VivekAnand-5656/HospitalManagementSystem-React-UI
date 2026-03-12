import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';

const Doctor = () => {
  const { token } = useContext(AuthContext)
  const [doctorList, setDoctorList] = useState([]);

  const fetchDoctor = async () => {
    try {
      const resDoctor = await axios.get(
        "http://localhost:8080/api/doctors/doctor/allDoctors",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setDoctorList(resDoctor.data);
    } catch (error) {
      console.error(error)

    }
  }
  useEffect(() => {
    fetchDoctor();
  })

  return (
    <>
      <div className=' w-full h-full p-2 bg-[#9ac2c331] ' >
        {/* ---- Top Search Bar's ---- */}
        <div className=' w-full h-[10%] p-2 bg-[#ffffff] flex justify-around items-center rounded-2xl  ' >
          <input
            className=' w-[80%] h-full rounded p-1 outline-0 border-2 border-[#1404fa] '
            type="search" name="search" placeholder='Search Patients..., Appointments....' id="" />
          <div className=' w-[20%] h-full flex justify-center gap-2 text-[#1404fa] items-center '>
            <i className="fa-solid fa-bell cursor-pointer "></i>
            <i className="fa-regular fa-moon cursor-pointer "></i>
          </div>
        </div>
        {/* --------- Doctor Tables ------  */}
        <div>
          <h1 className='text-4xl font-bold' >All Doctors</h1>
          <table className=' w-full ' >
            <thead className='border rounded' >
              <tr className='border' >
                <th className='border' >S.No</th>
                <th className='border'>User Id</th>
                <th className='border'>Name</th> 
                <th className='border'>Email</th> 
                <th className='border'>Specialization</th> 
              </tr>
            </thead>
            <tbody>
              {
                doctorList.map((doctor, index) => (
                  <tr key={index} >
                    <td>{index+1}</td>
                    <td>{doctor.id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td> 
                    <td>{doctor.email}</td> 
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Doctor