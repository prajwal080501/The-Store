import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='w-full'>
        <div className="flex flex-col items-center justify-center w-48 h-82 md:w-48 md:h-fit m-5 pb-2 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 bg-white">
            <img src={product.img} alt="" className="w-[90%] h-[50%] mt-5 object-contain" />
            <h1 className="text-base font-extralight mt-5 text-black">{product.name}</h1>
            {/* add a descriprion */}
            <p className="text-sm text-center mt-5 px-4 font-extralight text-gray-500">{product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>
            <div className='flex justify-between'>
            <h1 className="text-base font-semibold mt-5 text-black">${product.price}</h1>
            {/* add to cart button */}
            <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-2 py-1 rounded-md text-sm font-bold shadow-md mt-5">Add to cart</button>
            </div>
            </div>
    </div>
  )
}

export default ProductItem