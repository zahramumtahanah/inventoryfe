import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='bg-white px-4 py-4 flex justify-between'>
        <div className='flex items-center'>
        <MdMenu className='text-4xl cursor-pointer flex justify-end'/>
        </div>
        <div className='flex items-center mr-5'>
        <FaUserCircle className='text-4xl cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar