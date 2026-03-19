import React from 'react'

const TotalCards = ({ name,num }) => {
    return (
        <div className='h-15.5 bg-linear-to-r from-[#0b7f8c] to-[#0a5f69] 
    flex items-center justify-between p-5 rounded-xl text-white 
    cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 
    transition-all duration-300'>

            <div className='flex items-center gap-4'>
                <div className='bg-white/20 p-3 rounded-full'>
                    <i className="fa-solid fa-user-doctor text-2xl"></i>
                </div>

                <div>
                    <h1 className='text-[1.2rem] font-semibold tracking-wide'>{name}</h1>
                    <h2 className='text-sm font-bold'>{num}</h2>
                </div>
            </div>

        </div>
    )
}

export default TotalCards