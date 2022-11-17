import React from 'react'

const Sidebar = ({isOpen, setIsOpen, handleOpen}) => {
    return (
        <div className={
           `
              ${isOpen ? 'w-[40vh] bg-red-400 h-screen absolute top-0 left-0' : 'hidden'}
           `
        }>
            <div className="px-1 py-3">
            <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
        </div>
    )
}

export default Sidebar