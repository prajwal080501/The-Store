import React from 'react'
import {categories} from '../../data/data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 bg-gray-100 rounded">
        <div>
            <p className='text-2xl font-bold text-black'>Shop by categories</p>
        </div>
        <div className="flex flex-wrap justify-center">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>  
    </div>
  )
}

export default Categories