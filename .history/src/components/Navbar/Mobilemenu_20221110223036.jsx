import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Mobilemenu = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="w-full h-[60px] flex justify-between items-center lg:hidden bg-white p-5 ">
            <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

            <h1 className='text-2xl'>The Pj Store</h1>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen}/>
        </div>
    )
}

export default Mobilemenu