import React from 'react'
import { MdOutlineDashboard} from "react-icons/md";
import { FaUser } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="w-80 bg-white h-full px-4 py-3">
      <div className='my-2 mb-4'>
        <h1 className='ml-5 text-2xl text-black font-bold'><i>r a a ns Inventory</i></h1>
      </div>
      <hr className='border-black m-0'/>
      <ul className='mt-3 text-black font-bold'> 
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Dashboard
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Data Barang
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Data Supplier
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Barang Masuk
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Barang Keluar
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Laporan Barang Masuk
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <MdOutlineDashboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
          Laporan Barang Keluar
          </a>
        </li>
        <li className='mb-2 rounded hover:text-blue-600 hover:shadow hover:bg-blue-200 py-2'>
          <a href="" className='px-3'>
          <FaUser className='inline-block w-6 h-6 mr-2 -mt-2'/>
          User Management
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar