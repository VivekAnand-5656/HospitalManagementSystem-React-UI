import React from 'react'

const TotalCards = ({ name,num }) => {
    return (
        <div className='h-15.5 bg-[#07275A]
    flex items-center justify-between p-5 rounded-xl text-[#f2f2f2] 
    cursor-pointer shadow hover:shadow hover:scale-105 
    transition-all duration-300'>

            <div className='flex items-center   gap-4'>
                <div className='bg-white/20 p-3 rounded-full'>
                    <i className="fa-solid fa-user-doctor text-2xl"></i>
                </div>

                <div>
                    <h1 className='text-[1rem] font-semibold tracking-wide'>{name}</h1>
                    <h2 className='text-sm font-bold'>{num}</h2>
                </div>
            </div>

        </div>
    )
}

export default TotalCards