import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const TopBar = () => {
  const {curentUser} = useContext(AuthContext);
  return ( 
    <>
    <div className=' w-full h-[10vh] bg-[#ffffff] shadow-2xl p-2 flex justify-between ' >
      <h1 className=' text-3xl font-bold  ' >Dashboard</h1>
        <div className=' cursor-pointer' >
            <h1 className=' font-semibold text-[#0707f8] ' >Vivek Anand</h1>
            <p>{curentUser}</p>
        </div>
    </div>
    </>
  )
}

export default TopBar