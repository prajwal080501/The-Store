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
                {
                    Array(product.rating)
                    .fill()
                    .map((_) => (

                        <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          
                          <path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l2.447 4.895 5.334.777a1 1 0 01.553 1.789l-3.83 3.763.896 5.306a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.39a1 1 0 01-1.447-1.105l.896-5.306L.553 8.225a1 1 0 01.553-1.789l5.334-.777L9.106 2.553A1 1 0 0110 2z" clipRule="evenodd" />
                    ))
                }
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