import React, { createContext, useContext, useState } from 'react';
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [token, setToken] = useState(()=> localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(()=> !!localStorage.getItem("token"));
    const [role, setRole] = useState([]);
    const [activePage,setActivePage] = useState('dashboard')
    const [id,setId] = useState(()=> localStorage.getItem("userId"));
    const [doctor,setDoctor] = useState(null);
    const [cardName,setCardName] = useState([]);

    // ---- set Cards Name of Totals ------
    const setCardsNames = (name)=>{
        setCardName(name);
    }


    const userId=(u)=>{
        setId(u); 
        localStorage.setItem("userId",u);
    }
    const setDoctorInfo=(dtr)=>{
        console.log("Setting Doctor :",dtr);
        
        setDoctor(dtr);
    }


    const login=(jwt)=>{
        setToken(jwt)
        setIsLoggedIn(true);
        localStorage.setItem("token",jwt);
    }

    const logout = ()=>{
        setToken(null)
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    } 

    const roles = (r)=>{
        setRole(r);
    }

  return ( 
    <AuthContext.Provider value={
        {token,isLoggedIn,login,logout,roles,activePage,setActivePage,userId,id,doctor,setDoctorInfo,
            cardName,setCardsNames
        }} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;