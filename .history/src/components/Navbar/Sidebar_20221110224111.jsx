import React from 'react'

const Sidebar = ({isOpen, setIsOpen, handleOpen}) => {
    return (
        <div className={
           `
              ${isOpen ? 'w-[40vh] bg-red-400 h-screen absolute top-0 left-0' : 'hidden'}
           `
        }>
            <div className=" py-8">
            <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <div>
                <ul className="text-white text-2xl font-bold mt-10">
                    <li className="py-5 px-5 hover:bg-red-500 cursor-pointer">Home</li>
                    <li className="py-5 px-5 hover:bg-red-500 cursor-pointer">About</li>
                    <li className="py-5 px-5 hover:bg-red-500 cursor-pointer">Contact</li>
                </ul>

                <div className="flex justify-center mt-10">
                    <button className="bg-white text-red-400 px-5 py-2 rounded-md">Login</button>
                    </div>
            </div>
            </div>

            {/* branding */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-400">
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-white text-2xl font-bold">The <span className="text-3xl text-white">Pj</span> Store</h1>
                    </div>

                    </div>
                    
        </div>
    )
}

export default Sidebar