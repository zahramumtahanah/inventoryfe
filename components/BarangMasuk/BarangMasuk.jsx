import React from 'react'
import { IoMdSearch } from "react-icons/io";

const BarangMasuk = ({items}) => {
  return (
    <div className="data-barang">
        <div className="flex justify-between items-center ml-2 mb-16">
          <h1 className="text-4xl font-serif font-bold">Barang Masuk</h1>
        <div className='flex justify-end mr-2'>
            <button className='font-semibold p-2 hover:text-blue-500 rounded'>Dashboard</button>
             <button  className='font-semibold p-2 hover:text-blue-500 rounded'>Barang Masuk</button>
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
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Tanggal Masuk</th>
              <th className="border border-gray-300 p-2">Kode</th>
              <th className="border border-gray-300 p-2">Nama Barang</th>
              <th className="border border-gray-300 p-2">Supplier</th>
              <th className="border border-gray-300 p-2">Stok</th>
              <th className="border border-gray-300 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.tanggalMasuk}</td>
                  <td className="border border-gray-300 p-2">{item.kode}</td>
                  <td className="border border-gray-300 p-2">{item.namaBarang}</td>
                  <td className="border border-gray-300 p-2">{item.supplier}</td>
                  <td className="border border-gray-300 p-2">{item.stok}</td>
                  <td className="border border-gray-300 p-2">
                    <button 
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700" 
                      onClick={() => alert(`Mengedit ${item.namaBarang}`)}>
                      Edit
                    </button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 ml-2" 
                      onClick={() => alert(`Menghapus ${item.namaBarang}`)}>
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
      </div>
    </div>
  )
}

export default BarangMasuk