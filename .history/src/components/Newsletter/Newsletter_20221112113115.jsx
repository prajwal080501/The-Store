import React from 'react'

const Newsletter = () => {
  return (
    // newsletter
    <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
        <div>
            <p className='text-2xl font-bold text-black'>Newsletter</p>
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-extralight text-black mt-5">Subscribe to our newsletter and get 10% off your first purchase</p>
                <div className="flex items-center justify-center mt-5">
                    <input type="text" placeholder="Enter your email" className="w-[80%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400" />
                    <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter