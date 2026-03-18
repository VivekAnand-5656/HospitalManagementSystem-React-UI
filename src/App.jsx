
import { BrowserRouter, Form, Outlet, Route, Router, Routes } from 'react-router-dom'

import AuthProvider from './context/AuthContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import DashboardLayout from './Dashboard/DashboardLayout';
import AdminDoctor from './AdminPages/AdminDoctor';
import AdminPatient from './AdminPages/AdminPatient';
import AdminAppointments from './AdminPages/AdminAppointments';
import AdminReports from './AdminPages/AdminReports';


function App() {

  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            {/* ------------ Landing Page ------------- */}
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} /> 
            </Route>
            {/* --------- Dashboard ------- */}
            <Route path='admindashboard' element={<DashboardLayout/>} >
              <Route path='adminDoctor' element={<AdminDoctor/>} />
              <Route path='adminPatient' element={<AdminPatient/>} />
              <Route path='adminAppointments' element={<AdminAppointments/>} />
              <Route path='adminReports' element={<AdminReports/>} />
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

