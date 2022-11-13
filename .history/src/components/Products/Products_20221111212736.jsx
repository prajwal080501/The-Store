import React from 'react'
import { products } from "../../data/data"
import ProductItem from "./ProductItem"
const Products = () => {
    return (
      
            <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
                <div>
                    <p className='text-2xl font-bold text-black'>Products</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

    )
}

export default Products