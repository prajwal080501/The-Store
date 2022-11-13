import React from 'react'
import {products} from "../../data/data"
import ProductItem from "./ProductItem"
const Products = () => {
  return (
    <div>
        <div className="max-w-7xl h-fit mb-5 mt-0 mx-auto p-5 bg-transparent rounded">
            <div>
                <p className='text-2xl font-bold text-black'>Products</p>
                <div className="flex flex-wrap justify-center">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                    </div>
                    </div>
    </div>
  )
}

export default Products