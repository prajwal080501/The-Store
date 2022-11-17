import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../../data/data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="max-w-7xl h-fit mb-5 mt-0 mx-auto p-2 bg-transparent rounded">
        <div>
            <p className='text-2xl font-bold text-black'>Shop by categories</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center lg:space-x-0">
          
            {categories.map((category) => (
           
                <CategoryItem key={category.id} category={category} />
            ))}


        </div>  
    </div>
  )
}

export default Categories