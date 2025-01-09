import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className="flex-col items-center py-2 px-3">
      {/* Logo Section */}
      <div className="flex items-center gap-2  font-extrabold">
        <FaDumbbell className="text-yellow-400 text-4xl drop-shadow-lg" />
        <span className="text-yellow-400 text-3xl drop-shadow-lg">Forge</span>
        <span className="text-red-600 drop-shadow-lg text-3xl italic">Fitness</span>
      </div>
      
      {/* Subline Section */}
      <div className="text-gray-500 text-sm font-medium mt-2 italic">
        Together, We Forge Fitness
      </div>
    </div>
  )
}

export default Logo