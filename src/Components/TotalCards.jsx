import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const TotalCards = ({text,num}) => {
    const {cardName,setCardNames} = useContext(AuthContext);
  return (
    <div className=' bg-[#ffffff] w-[20%] p-2 rounded cursor-pointer ' >
        <h3 className=' text-[1.2rem] font-semibold '  >{text}</h3>
        <p className=' text-2xl font-semibold text-[#fd0303] ' >{num}</p>
        <p className=' text-[#ff8a04] ' >pending</p>
    </div>
  )
}

export default TotalCards