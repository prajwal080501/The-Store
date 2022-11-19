import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from "react-redux"
const Singleproduct = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`/api/products/find/${id}`);
                setProduct(res.data);
                console.log(product);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        type === "dec" ? setQuantity(quantity > 1 ? quantity - 1 : 1) : setQuantity(quantity + 1);
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, size, color }));
    }
    return (
        <div className="w-[90%] bg-gray-100/20 shadow-sm  h-fit mb-5 mt-5 mx-auto p-5 rounded-md drop-shadow-md">
            <div>
                <p className='text-2xl font-bold text-black'>Single Product</p>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col lg:flex-row space-x-10 items-center justify-around mt-5">
                        <img src={product.image} alt="" className="w-80 h-96 rounded-md object-contain" />
                        <div className="flex flex-col space-y-4 mt-5 lg:mt-0">
                            <p className="text-2xl font-bold text-black">{product.title}</p>
                            <p className="text-sm font-extralight text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            {/* add size and quantity */}
                            <div className="flex flex-col space-y-4 pb-5">
                                <div className="flex flex-row space-x-4 items-center justify-left">
                                    <select onChange={(e) => setSize(e.target.value)} className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                                        {product.size && product.size.map((size) => (
                                            <option value={size}>{size}</option>
                                        ))}
                                    </select>

                                    {/* add product description */}

                                    <select onChange={(e) => setColor(e.target.value)} className="w-[20%] h-10 px-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-red-400 duration-200 mt-5">
                                        {product.color && product.color.map((color) => (
                                            <option value={color}>{color}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* desc */}
                                <p className="text-sm bg-white p-5 text-center rounded-md pt-5 w-1/2 font-extralight text-gray-500">{product.description}</p>
                            </div>
                            {/* create a quantity counter */}
                            <div className="flex flex-row space-x-4 items-center justify-left">
                                <button onClick={() => handleQuantity("dec")} className="w-10 h-10 text-white bg-red-400 text-lg hover:bg-red-500  rounded-md focus:outline-none duration-200">
                                    -
                                </button>
                                <p className="text-lg font-bold text-black">{quantity}</p>
                                <button onClick={() => handleQuantity("inc")} className="w-10 text-white h-10 bg-red-400 hover:bg-red-500 text-lg rounded-md focus:outline-none  duration-200">
                                    +
                                </button>
                            </div>
                            <p className="text-2xl font-bold text-black">${product.price}</p>
                            <div className="flex space-x-4 items-center justify-center mt-5">
                                <button onClick={handleClick} className="bg-red-400 hover:bg-red-500 duration-200 active:shadow-sm active:scale-95 text-white px-4 py-2 rounded-md text-lg font-bold shadow-md">Add to Cart</button>
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