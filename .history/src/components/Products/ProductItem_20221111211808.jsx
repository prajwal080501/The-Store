import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center w-48 h-fit m-5 pb-2 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 bg-white">
            <img src={product.img} alt="" className="w-32 h-32 mt-5 object-contain" />
            <h1 className="text-base font-semibold mt-5 text-black">{product.name}</h1>
            <h1 className="text-base font-semibold mt-5 text-black">${product.price}</h1>
            </div>
    </div>
  )
}

export default ProductItem