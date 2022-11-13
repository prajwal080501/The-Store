import React from 'react'

const Slider = () => {
  return (
    // create a image carousel tailwindcss wt=ith overflow-scroll

    <div className="flex overflow-scroll">
      <div className="w-1/2 h-64 bg-red-500">1</div>
      <div className="w-1/2 h-64 bg-blue-500">2</div>
      <div className="w-1/2 h-64 bg-green-500">3</div>
      <div className="w-1/2 h-64 bg-yellow-500">4</div>
      <div className="w-1/2 h-64 bg-pink-500">5</div>
      <div className="w-1/2 h-64 bg-purple-500">6</div>
    </div>
  )
}

export default Slider