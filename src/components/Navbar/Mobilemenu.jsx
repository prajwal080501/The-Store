import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'

const Mobilemenu = () => {
    const quantity = useSelector(state => state.cart.quantity)

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="w-full h-[60px] flex z-20 sticky top-0  justify-between items-center lg:hidden bg-gray-100 drop-shadow-md px-5 py-0 ">
            <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer hover:text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

            <h1 className='text-xl font-bold'>The <span className="text-3xl text-red-500">Pj</span> Store</h1>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen}/>
            <div title="Cart" className="relative flex items-center justify-center w-8 h-8 cursor-pointer  rounded-full text-black">
              <Link to="/cart">
              <AiOutlineShoppingCart className="w-8 h-8" />
              <p className="absolute text-xs bg-red-400 w-1/2 text-white  px-1 rounded-full absolute -top-1 right-0 font-bold">{quantity}</p>
              </Link>
            </div>
        </div>
    )
}

export default Mobilemenu