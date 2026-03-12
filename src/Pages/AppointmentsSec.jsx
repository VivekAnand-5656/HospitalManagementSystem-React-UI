import React from 'react'
import Appointments from './Appointments'

const AppointmentsSec = () => {
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
        <Appointments/>

    </div>
    </>
  )
}

export default AppointmentsSec