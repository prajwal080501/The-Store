import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-40 m-5 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
        <img src={category.img} alt="" className="w-24 h-24 mt-5 object-contain" />
        <h1 className="text-4xl font-bold mt-24 text-black">{category.title}</h1>
    </div>
  )
}

export default CategoryItem