import { useState } from 'react'
import { BrowserRouter, Form, Outlet, Route, Router, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Patients from './Pages/Patients'
import Appointments from './Pages/Appointments'
import Billing from './Pages/Billing'
import Forms from './Pages/Forms'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import AuthProvider from './context/AuthContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/SideBar'
import DoctorDashboard from './Pages/DoctorDashboard'
import Report from './Pages/Report'
import Profile from './Pages/Profile'
import Doctor from './Pages/Doctor'

function App() {

  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            {/* Protected Route with Sidebar */}
            <Route path='dashboard' element={<DoctorDashboard />}>
              <Route index element={<Appointments />} />  {/* Default page */}
              <Route path='appointments' element={<Appointments />} />
              <Route path='patients' element={<Patients />} />
              <Route path='reports' element={<Report />} />
              <Route path='profile' element={<Profile />} />
              <Route path='doctors' element={<Doctor/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>

    // <ToastContainer autoClose={3000} />

  )
}

export default App

