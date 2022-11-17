import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  return (
    <Link to={`/products/${category.path} `}>
    <div className="flex flex-col items-center justify-center w-40 h-40 m-5 pb-2 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-200 bg-white">
        <img src={category.img} alt="" className="w-24 h-24 mt-5 object-contain" />
        <h1 className="text-base font-semibold mt-5 text-black">{category.name}</h1>
    </div>
    </Link>
  )
}

export default CategoryItem