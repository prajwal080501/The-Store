import React from 'react'

const Singleproduct = () => {
    return (
        <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
            <div>
                <p className='text-2xl font-bold text-black'>Single Product</p>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col lg:flex-row space-x-10 items-center justify-araound mt-5">
                        <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="w-80 h-96 rounded-md shadow-md" />
                        <div className="flex flex-col space-y-4 mt-5 lg:mt-0">
                            <p className="text-2xl font-bold text-black">Denim Jumpsuit</p>
                            <p className="text-sm font-extralight text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            {/* add size and quantity */}
                            <div className="flex flex-col space-y-4 pb-5">
                                <div className="flex flex-row space-x-4 items-center justify-left">
                                    <select className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                                        <option value="1">Size</option>
                                        <option value="2">S</option>
                                        <option value="3">M</option>
                                        <option value="4">L</option>
                                        <option value="5">XL</option>
                                    </select>
                                    <select className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                                        <option value="1">Quantity</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="4">3</option>
                                        <option value="5">4</option>
                                    </select>
                                </div>
                                </div>
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