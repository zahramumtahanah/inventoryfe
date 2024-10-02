import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BsBoxSeam } from 'react-icons/bs';
import { BiTransfer } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';

export const Dashboard = () => {
  const cards = [
    { label: 'Data Barang', color: 'bg-pink-400', icon: <BsBoxSeam /> },
    { label: 'Data Supplier', color: 'bg-blue-400', icon: <FaUsers /> },
    { label: <>Data Barang<br />Masuk</>, color: 'bg-purple-400', icon: <BiTransfer /> },
    { label: <>Data Barang <br />Keluar</>, color: 'bg-yellow-400', icon: <BiTransfer /> },
  ];

  return (
    <section className='w-full'>
      <Navbar />
      <hr className='border-black m-0' />
      <div className="p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-bold">Dashboard</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.color} text-white p-4 rounded-lg shadow-lg flex items-center h-40 cursor-pointer transition-transform transform hover:scale-110 duration-300 hover:shadow-2xl`}
              >
                <div className="text-center font-serif flex justify-between items-center w-full">
                  <div className="text-2xl ml-2">{card.label}</div>
                  <div className="text-4xl ml-3">{card.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
