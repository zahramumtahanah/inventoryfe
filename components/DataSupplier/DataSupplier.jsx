import React from 'react'
import { IoMdSearch } from "react-icons/io";

const DataSupplier = ({items}) => {
  return (
    <div className="data-barang">
        <div className="flex justify-between items-center ml-2 mb-16">
          <h1 className="text-4xl font-serif font-bold">Data Barang</h1>
        <div className='flex justify-end mr-2'>
            <button className='font-semibold p-2 hover:text-blue-500 rounded'>Dashboard</button>
             <button  className='font-semibold p-2 hover:text-blue-500 rounded'>Data Barang</button>
        </div>
        </div>
        <div className='flex justify-between items-center ml-2 mb-16'>
            <button className='text-white rounded-full px-5 py-1 bg-blue-400 font-semibold hover:scale-95 duration-300 hover:shadow-2xl'>Tambah Barang</button>
             <div className="relative group hidden sm:block mr-2">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
        </div>
      <div className="table-container">
        <form>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Nama Supplier</th>
              <th className="border border-gray-300 p-2">No Handphone</th>
              <th className="border border-gray-300 p-2">Alamat</th>
              <th className="border border-gray-300 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.namaSupplier}</td>
                  <td className="border border-gray-300 p-2">{item.noHandphone}</td>
                  <td className="border border-gray-300 p-2">{item.alamat}</td>
                  <td className="border border-gray-300 p-2">
                    <button 
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700" 
                      onClick={() => alert(`Mengedit ${item.namaSupplier}`)}>
                      Edit
                    </button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 ml-2" 
                      onClick={() => alert(`Menghapus ${item.namaSupplier}`)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-2">Tidak ada data tersedia</td>
              </tr>
            )}
          </tbody>
        </table>
        </form>
      </div>
    </div>
  )
}

export default DataSupplier