import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='w-full'>
        <div className="flex flex-col items-center justify-center w-48 h-82 md:w-48 md:h-fit m-5 pb-2 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 bg-white">
            <img src={product.img} alt="" className="w-[90%] h-[50%] mt-5 object-contain" />
            <h1 className="text-base font-extralight mt-5 text-black">{product.name}</h1>
            {/* add a descriprion */}
            <p className="text-sm text-center mt-5 px-4 font-extralight text-gray-500">{product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>
            {/* display rating */}
            <div className="flex items-center justify-center mt-5">
                {/* display star */}
                {product.rating.map((rate) => (
                    <svg className="h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">


                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5-9 5-9-5 9-5z" />  
                    </svg>
                ))}
            </div>
            <div className='flex justify-between w-full p-5 items-center'>
            <h1 className="text-sm font-semibold mt-5 text-black">${product.price}</h1>
            {/* add to cart button */}
            <button className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-2 py-1 rounded-md text-xs font-bold shadow-md mt-5">Add to cart</button>
            </div>
            </div>
    </div>
  )
}

export default ProductItem