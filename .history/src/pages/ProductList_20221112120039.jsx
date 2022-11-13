import React from 'react'
import Products from '../components/Products/Products'

const ProductList = () => {
    return (
        <div className="h-fit">
            {/* filters */}
            <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
                <div>
                    <p className='text-2xl font-bold text-black'>Filters</p>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm font-extralight text-black mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <div className="flex space-x-4 items-center justify-center mt-5">
                            <input type="text" placeholder="Search" className="w-[80%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200" />
                            <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default ProductList