import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='w-full'>
        <div className="flex flex-col items-center justify-center w-48 h-82 md:w-48 md:h-fit m-5 pb-2 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 bg-white">
            <img src={product.img} alt="" className="w-[90%] h-[50%] mt-5 object-contain" />
            <h1 className="text-base font-extralight mt-5 text-black">{product.name}</h1>
            {/* add a descriprion */}
            <p className="text-sm text-center font-extralight text-gray-500">{product.description}</p>
            <h1 className="text-base font-semibold mt-5 text-black">${product.price}</h1>
            </div>
    </div>
  )
}

export default ProductItem