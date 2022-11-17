import React, { useState } from 'react'
import Products from '../components/Products/Products'
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    const location = useLocation();
    console.log(location)
    const category = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    

    console.log(category)
    console.log(filters);
    console.log(sort);

    return (
        <div className="h-fit">
            {/* filters */}
            <div className="w-[80%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
                <div>
                    <p className='text-2xl font-bold text-black'>Filters</p>
                    <div className="flex flex-row space-x-4 items-center justify-left">
                        <select name="color" onChange={handleFilters} className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                            <option value="Color" disabled>Color</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                        </select>
                        <select name="size" onChange={handleFilters} className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                            <option value="Size" disabled selected>Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <select onChange={e=> setSort(e.target.value)} name="price" className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                            <option value="Price" disabled selected>Price</option>
                            <option value="newest">Newest</option>
                            <option value="ascending">Price Asc</option>
                            <option value="descending">Price Desc</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products category={category} filters={filters} sort={sort}/>
        </div>
    )
}

export default ProductList