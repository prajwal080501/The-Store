import React from 'react'

const Login = ({ modalOpen, handleModal, setModalOpen }) => {
  return (
    // create a simple modal 
    <div className=${
      modalOpen ? "fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center" : "hidden"
    }>
      <div className={
        `
          ${modalOpen ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-md' : 'hidden'}`
      }>
        <div className="flex justify-end">

          <svg onClick={handleModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-5 mr-5 text-gray-500 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="flex justify-center items-center h-full">

          <p className="text-gray-500 text-base font-semibold">The Pj Store Copyright &copy;</p>
        </div>
      </div>
    </div>

  )
}

export default Login