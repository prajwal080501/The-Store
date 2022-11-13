import React from 'react'

const Slider = () => {
  return (
    <div className="w-full h-[80px] flex  justify-between items-center lg:hidden bg-gray-100 drop-shadow-md p-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer hover:text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>

        <h1 className='text-2xl font-bold'>The <span className="text-3xl text-red-500">Pj</span> Store</h1>
    </div>
  )
}

export default Slider