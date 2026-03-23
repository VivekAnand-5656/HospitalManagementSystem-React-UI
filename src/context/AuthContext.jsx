import React, { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("token"));
    const [activePage, setActivePage] = useState('dashbadmindashboardoard')
    const [id, setId] = useState(() => localStorage.getItem("userId"));
    const [doctor, setDoctor] = useState(null);
    const [cardName, setCardName] = useState([]);
    const [todayAppointments, setTodayAppointments] = useState([]); // Today Appointments 
    const [allDoctors, setAllDoctors] = useState([])    // All Doctors 
    const [departments, setDepartments] = useState([])    // All Departments 
    const [allPatients, setAllPatients] = useState([])    // All Patients
    const [allAppointments, setAllAppointments] = useState([])   // All Appointments 
    const [curentUser, setCurentUser] = useState();
    const [signup, setSignup] = useState(false);    // Signup 
    const [roles, setRoles] = useState(() => {
        const storedRoles = localStorage.getItem("roles");
        return storedRoles ? JSON.parse(storedRoles) : [];
    });   // roles types
    // ---- Dashboard active Pages ----
    // ======== Patient Dashboard =====
    const [myappointments, setMyappointments] = useState([]);

    // -------- Patient Own Appointments --------
    const [appointments, setAppointments] = useState([]);


    // ---- set Cards Name of Totals ------
    const setCardsNames = (name) => {
        setCardName(name);
    }


    const userId = (u) => {
        setId(u);
        localStorage.setItem("userId", u);
    }
    const setDoctorInfo = (dtr) => {
        console.log("Setting Doctor :", dtr);

        setDoctor(dtr);
    }
    const login = (jwt, role) => {
        setToken(jwt)
        setIsLoggedIn(true);
        localStorage.setItem("token", jwt);
        if (role) {
            localStorage.setItem("roles", JSON.stringify(role));
            setRoles(role);
        } else {
            localStorage.removeItem("roles");
            setRoles([]);
        }
    }
    const logout = () => {
        setToken(null)
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("roles")
        setRoles([])
    }

    return (
        <AuthContext.Provider value={
            {
                token, isLoggedIn, login, logout, roles, setRoles, activePage, setActivePage, userId, id, doctor, setDoctorInfo,
                cardName, setCardsNames, todayAppointments, setTodayAppointments, allDoctors, setAllDoctors, departments, setDepartments,
                allPatients, setAllPatients, allAppointments, setAllAppointments, curentUser, setCurentUser,
                signup, setSignup, myappointments, setMyappointments,appointments,setAppointments
            }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;