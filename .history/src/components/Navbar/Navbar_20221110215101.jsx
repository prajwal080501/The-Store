import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
const Navbar = () => {
  return (

    <div className="h-[60px] text-black">
      <div className="py-2.5 px-5 flex justify-between">
        <div className="flex-1 flex items-center">
          <div className='text-xl text-gray-600  cursor-pointer'>
            EN
          </div>
          <div className="flex items-center space-x-8">
            <input className="bg-gray-100 px-2 py-3 rounded-md outline-none" type="text" placeholder="Search the market" />
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
        </div>
        <div className="flex-1">Center</div>
        <div className="flex-1">Right</div>
      </div>
    </div>
  )
}

export default Navbar