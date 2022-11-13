import React from 'react'

const Navbar = () => {
  return (

    <div className="h-[60px] text-black">
      <div className="py-2.5 px-5 flex justify-between">
        <div className="flex-1">
          <div className='text-xl text-gray-400  cursor-pointer'>
            EN
          </div>
        </div>
        <div className="flex-1">Center</div>
        <div className="flex-1">Right</div>
      </div>
    </div>
  )
}

export default Navbar