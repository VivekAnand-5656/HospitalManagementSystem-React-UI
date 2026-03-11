import React, { useContext } from 'react'
import SideBar from './SideBar'
import { AuthContext } from '../context/AuthContext'
import Report from './Report';
import Doctor from './Doctor';
import Patients from './Patients';
import Appointments from './Appointments';
import Profile from './Profile';
import DashboardHome from './DashboardHome';

const DoctorDashboard = () => {
    const { activePage } = useContext(AuthContext);

    const renderPage = () => {
        switch (activePage) {  
            case 'dashboard': return <DashboardHome />;
            case 'appointments': return <Appointments />;
            case 'patients': return <Patients />;
            case 'doctors': return <Doctor />;
            case 'reports': return <Report />;
            case 'profile': return <Profile />;
            default: return <Appointments />;
        }
    }
    return (
        <>
            <main className=' w-full border h-screen flex gap-2  ' >
                {/* -------- SideBar ------- */}
                <aside className=' w-[15%] h-full ' >
                    <SideBar />
                </aside>
                <div className=' w-[85%] ' >
                     {renderPage()}
                </div>
            </main>
        </>

    )
}

export default DoctorDashboard