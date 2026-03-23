import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import { AuthContext } from '../context/AuthContext'
import DashboardHome from './DashboardHome';
import AdminDoctor from '../AdminPages/AdminDoctor';
import AdminPatient from '../AdminPages/AdminPatient';
import AdminAppointments from '../AdminPages/AdminAppointments';
import AdminReports from '../AdminPages/AdminReports';
import TopBar from './TopBar';
import PatientDashboard from '../PatientPages/PatientDashboard';
import PatientAppointment from '../PatientPages/PatientAppointment';

const DashboardLayout = () => {
    
    const {activePage} = useContext(AuthContext);
    const renderPage = () => {
        if (activePage === "admindashboard") return <DashboardHome />
        if (activePage === "adminDoctor") return <AdminDoctor />
        if (activePage === "adminPatient") return <AdminPatient />
        if (activePage === "adminAppointments") return <AdminAppointments />
        if (activePage === "adminReports") return <AdminReports />
        // ------------ Patient Dasboard ---------
        if (activePage === "patientdashboard") return <PatientDashboard/>
        if (activePage === "patientappointment") return <PatientAppointment/>
        // return <DashboardHome/>
    }
  return ( 
    <>
    <div className='bg-[#EEF1FA] w-screen h-screen flex justify-around  ' >
        <Sidebar/>
        <div className=' w-[85%] h-full flex flex-col overflow-scroll ' >
            <TopBar/>
            {renderPage()}
        </div>
    </div>
    </>
  )
}

export default DashboardLayout