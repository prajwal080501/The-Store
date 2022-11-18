import React, { useEffect, useState } from 'react'
import { products } from "../../data/data"
import ProductItem from "./ProductItem"
import { Link } from 'react-router-dom';
import axios from "axios"
const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `https://thepjstore.herokuapp.com/api/products?category=${category}` : "https://thepjstore.herokuapp.com/api/products/random");
                setProducts(res.data);
                console.log(products);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        category && setFilteredProducts(
            products.filter((product) => Object.entries(filters).every(([key, value]) => product[key].includes(value)))
        );

    }, [products, category, filters]);


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.createdAt - a.createdAt));
        } else if (sort === "ascending") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else if (sort === "descending") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);
    return (

        <div className="max-w-7xl lg:w-[80%] bg-gray-100/20 shadow-sm h-fit place-content-evenly mb-5 mt-0 mx-auto p-5 rounded-md drop-shadow-md">
            <div>
                <p className='text-3xl font-bold text-black'>Products</p>
                <Link to="/singleproduct">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center place-content-center place-items-center">
                        {
                            category ? filteredProducts.map((product) => (
                                <Link to={`/singleproduct/${product._id}`}>
                                    <ProductItem key={product.id} product={product} />
                                </Link>
                            )) : products.map((product) => (
                                <Link to={`/singleproduct/${product._id}`}>
                                    <ProductItem key={product.id} product={product} />
                                </Link>
                            ))
                        }
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Products