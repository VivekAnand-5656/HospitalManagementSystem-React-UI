import React from 'react'
import doctorImg from '../assets/doctor.png'
import heart from '../assets/heart.png'
import hospital from '../assets/hospital.png'
import role1 from '../assets/admin.png'
import role2 from '../assets/user.png'

const Home = () => {
  return <>
    <div className=' w-full  h-screen  p-2 flex justify-center items-center ' >
      <div className=' w-[40%] ' >
        <h1 className=' text-5xl font-bold font-serif ' >Smart & Secure Hospital Management System</h1>
        <p className=' ' >Manage patients, doctors, appointments, and billing — all in one powerful platform.</p>
        <button className=' bg-[#2093C2] p-2 rounded font-bold text-white cursor-pointer ' >Get Started</button>
      </div>
      <img src={doctorImg} alt="" className=' h-full  ' />
      <img src={heart} alt="" className=' h-[80%] ' />
    </div>
    {/* ============= About Section ============== */}

    <h1 className='text-center font-bold text-3xl font-sans uppercase ' >About</h1>

    <div className="  w-full flex justify-around p-2 gap-5 ">
      <div className=" border-t-2 shadow-2xl border-b-2 w-[40%] bg-[#ffffff6c] p-5 rounded-2xl ">
        <ul className=' list-disc ' >
          <li>Hospital Management System ek modern web platform hai jo hospitals aur clinics ko apne daily operations efficiently manage karne me help karta hai. Is system ke through administrators, doctors aur users ek centralized platform par patients, appointments, medical records aur billing ko easily manage kar sakte hain.</li>
          <li>
            Ye system hospital workflow ko simplify karta hai aur manual paperwork ko reduce karta hai. Real-time data access aur organized information ki wajah se hospital staff better decisions le sakta hai aur patients ko faster service milti hai.
          </li>
        </ul>
      </div>
      <div className="w-[40%] flex justify-center items-center  border-t-2 ">
        <img src={hospital} alt="hospital" className=' ' />
      </div>
    </div>
    {/* ============= Key Features ============ */}
    <h1 className='text-center font-bold text-3xl font-sans uppercase ' >Key Features</h1>

    <div className='  w-full flex justify-around items-center p-2 flex-wrap gap-2 ' >
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Patient Management</h2>
        <p>Easily add, update, and manage patient records in a secure system.</p>
      </div>
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Doctor Management</h2>
        <p>Maintain detailed doctor profiles including specialization and availability.</p>
      </div>
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Appointment Scheduling</h2>
        <p>Schedule and manage appointments between doctors and patients efficiently.</p>
      </div>
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Billing & Records</h2>
        <p>Generate and manage patient billing and medical records digitally.</p>
      </div>
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Role Based Access</h2>
        <p>Separate access for administrators and users to ensure better security.</p>
      </div>
      <div className=" w-[30%] bg-[#ffffff65] rounded-2xl p-2 ">
        <h2 className=' text-2xl font-bold ' >Secure Data Storage</h2>
        <p>All hospital data is stored securely and organized for quick access.</p>
      </div>
    </div>
    {/* ================ How it Works ========== */}

    <h1 className='text-center font-bold text-3xl font-sans uppercase ' >How it works</h1>

    <div className="w-full flex justify-center items-center gap-10 p-10 flex-wrap">

      <div className="w-70 bg-white shadow-xl rounded-2xl p-6 text-center relative">

        <div className="absolute -top-5 left-[45%] bg-[#2093C2] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
          1
        </div>

        <h2 className="text-xl font-bold mt-5">Register or Login</h2>

        <p className="text-gray-600 mt-2">
          Create an account or login to access the hospital management system.
        </p>

      </div>


      <div className="w-70 bg-white shadow-xl rounded-2xl p-6 text-center relative">
        <div className="absolute -top-5 left-[45%] bg-[#2093C2] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
          2
        </div>
        <h2 className="text-xl font-bold mt-5">Choose Your Role</h2>
        <p className="text-gray-600 mt-2">
          Login as an administrator or user based on your role.
        </p>
      </div>
      <div className="w-70 bg-white shadow-xl rounded-2xl p-6 text-center relative">

        <div className="absolute -top-5 left-[45%] bg-[#2093C2] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
          3
        </div>

        <h2 className="text-xl font-bold mt-5">Manage Operations</h2>

        <p className="text-gray-600 mt-2">
          Easily manage patients, doctors, appointments and hospital records.
        </p>
      </div>
    </div>
    {/* ===== Role Sections ===== */} 

    <h1 className='text-center font-bold text-3xl font-sans uppercase mt-10'>
      Role Sections
    </h1>

    <div className='w-full flex justify-center items-stretch gap-10 p-10 flex-wrap'>

      {/* Admin Panel */}
      <div className='w-[350px] bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition duration-300'>

        <h1 className='text-2xl font-bold mb-3 text-[#2093C2]'>
          Admin Panel
        </h1>

        <img
          src={role1}
          alt="Admin Panel"
          className='h-[180px] object-contain mb-4'
        />

        <ul className='list-disc text-gray-700 space-y-2'>
          <li>Manage doctors and staff</li>
          <li>Manage patients</li>
          <li>Monitor appointments</li>
          <li>Generate reports</li>
        </ul>

      </div>


      {/* User Panel */}
      <div className='w-[350px] bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition duration-300'>

        <h1 className='text-2xl font-bold mb-3 text-[#2093C2]'>
          User Panel
        </h1>

        <img
          src={role2}
          alt="User Panel"
          className='h-[180px] object-contain mb-4'
        />

        <ul className='list-disc text-gray-700 space-y-2'>
          <li>Book appointments</li>
          <li>View doctor availability</li>
          <li>Access personal records</li>
          <li>Track appointment status</li>
        </ul>

      </div>

    </div>
    {/* ========== Benifit Section ======== */}

    <h1 className='text-center font-bold text-3xl font-sans uppercase mt-12'>
  Why Choose Our System
</h1>

<div className="w-full flex flex-wrap justify-center gap-8 p-10">

  <div className="w-[260px] min-h-[180px] bg-white shadow-xl rounded-xl p-5 flex flex-col">
    <h2 className="text-xl font-bold mb-2">Easy to Use Interface</h2>
    <p className="text-gray-600">
      Simple and intuitive interface that allows hospital staff to work efficiently without complex training.
    </p>
  </div>

  <div className="w-[260px] min-h-[180px] bg-white shadow-xl rounded-xl p-5 flex flex-col">
    <h2 className="text-xl font-bold mb-2">Secure Patient Records</h2>
    <p className="text-gray-600">
      Patient data is stored securely with proper access control to ensure privacy and safety.
    </p>
  </div>

  <div className="w-[260px] min-h-[180px] bg-white shadow-xl rounded-xl p-5 flex flex-col">
    <h2 className="text-xl font-bold mb-2">Fast Appointment Scheduling</h2>
    <p className="text-gray-600">
      Schedule doctor appointments quickly and manage patient queues efficiently.
    </p>
  </div>

  <div className="w-[260px] min-h-[180px] bg-white shadow-xl rounded-xl p-5 flex flex-col">
    <h2 className="text-xl font-bold mb-2">Centralized Hospital Data</h2>
    <p className="text-gray-600">
      All hospital information including doctors, patients and records is stored in one centralized system.
    </p>
  </div>

  <div className="w-[260px] min-h-[180px] bg-white shadow-xl rounded-xl p-5 flex flex-col">
    <h2 className="text-xl font-bold mb-2">Improved Workflow Efficiency</h2>
    <p className="text-gray-600">
      Automates hospital operations and reduces manual work to improve staff productivity.
    </p>
  </div>

</div>
{/* ============== Call To Action Section ============== */}

<div className="w-full flex flex-col items-center justify-center text-center p-12 bg-[#2093C2] text-white gap-5">

  <h1 className="text-4xl font-bold">
    Start Managing Your Hospital Efficiently
  </h1>

  <p className="text-lg max-w-[700px]">
    Join our Hospital Management System today and simplify healthcare operations.
  </p>

  <div className="flex gap-5 mt-4">
    
    <button className="bg-white text-[#2093C2] font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
      Get Started
    </button>

    <button className="border-2 border-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#2093C2] transition">
      Create Account
    </button>

  </div>

</div>


  </>
}

export default Home