import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { FaGear } from 'react-icons/fa6'
  

const Navbar = () => {

    return (
        <div>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <Logo />
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/routines'><li>Workouts & Routines</li></Link>
                        <Link to='/nutrition'><li>Nutrition</li></Link>
                        <Link to='/meditation'><li>Meditation</li></Link>
                        <Link to='/trackerstats'><li>Progress Tracker</li></Link>
                        <li>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                        <FaGear className="text-lg text-gray-600" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-48 p-4 bg-white shadow-lg rounded-lg">
                                    <ol className="flex flex-col space-y-2 font-medium text-gray-700">
                                        <li className="hover:text-blue-500 cursor-pointer">Login</li>
                                        <li className="hover:text-blue-500 cursor-pointer">Signup</li>
                                        <li className="hover:text-blue-500 cursor-pointer">Profile</li>
                                        <li className="hover:text-blue-500 cursor-pointer">Logout</li>
                                        <li className="hover:text-blue-500 cursor-pointer">Faq & Help</li>
                                    </ol>
                                </PopoverContent>
                            </Popover>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar