import React from 'react'
import {categories} from '../../data/data'

import CategoryItem from './CategoryItem';
const CategoryItem = () => {
  return (
    <div >
        <div className="flex flex-wrap justify-center">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
            
    </div>
  )
}

export default CategoryItem