import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.STRIPE_PUBLIC_KEY;
const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();
  const cart = useSelector(state => state.cart)
  console.log(cart)

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const res = await axios.post("http://localhost:8000/api/checkout/payment", {
        token: stripeToken.id,
        amount: 500
      });
      console.log(res.data)
      navigate("/success")
    };


    stripeToken && makeRequest();
  }, [stripeToken, navigate]);


    
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row shadow-m lg:space-x-5 my-10">
          <div className=" w-[90%] mx-auto lg:mx-0 lg:w-3/4 bg-white mb-10 rounded-md shadow-md px-10 py-10 mt-5">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cart.quantity} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibolds text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {
              cart.products.map(product => (
                <div className="flex flex-col md:flex-row hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-full">
                    <div className="w-fit">
                      <img className="h-32 w-32 object-contain" src={product.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{product.title}</span>
                      {/* add product color */}
                      <p className="text-gray-400 text-xs">Size: {product.size}</p>
                      <p className="text-gray-400 text-xs">Color: {product.color}</p>
                      <span className="text-red-500 text-xs">Apple</span>
                      <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5 md:p-0">
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="mx-2 border text-center w-8" type="text" value="1" />

                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 mt-5 md:mt-0 font-semibold text-sm">&#8377; {product.price}</span>
                </div>
              ))
            }

            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">

              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-[90%] mx-auto lg:w-1/4 mt-10 lg:mt-5 px-8 py-10 bg-white mb-10 rounded-md shadow-md">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cart.quantity}</span>
              <span className="font-semibold text-sm">
                {/* rupee symbol */}
                &#8377; {cart.total}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - &#8377; 10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>&#8377; {cart.total}</span>
              </div>
              <StripeCheckout
              name="The Pj Store"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey="pk_test_51M3f5eSD394WB9ZdcogXU7SKsHEGJMlqB9RezFGTvvEaT2eLHNlEWZHtoAOw7TaxxiLIffX5y00T4CAPhRhJYO6u00HV084lEb"
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart