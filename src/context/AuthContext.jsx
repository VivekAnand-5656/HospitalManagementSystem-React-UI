import React, { createContext, useContext } from 'react'
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useContext(false);
    const login=()=>{
        setIsLoggedIn(true);
    }

    const logout = ()=>{
        setIsLoggedIn(false);
    } 

  return ( 
    <AuthContext.Provider value={{isLoggedIn,login,logout}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;