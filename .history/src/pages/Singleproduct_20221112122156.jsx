import React from 'react'

const Singleproduct = () => {
    return (
        <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
            <div>
                <p className='text-2xl font-bold text-black'>Single Product</p>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-extralight text-black mt-5">Subscribe to our newsletter and get 10% off your first purchase</p>
                    <div className="flex space-x-4 items-center justify-center mt-5">
                        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="w-80 h-96" />
                        <div className="flex flex-col space-y-4">
                            <p className="text-2xl font-bold text-black">Denim Jumpsuit</p>
                            <p className="text-sm font-extralight text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <p className="text-2xl font-bold text-black">$20</p>
                            <div className="flex space-x-4 items-center justify-center mt-5">
                                <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md">Add to Cart</button>
                                <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct