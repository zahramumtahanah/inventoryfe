import React, { useState } from 'react';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import DataBarang from './components/DataBarang/DataBarang';
import DataSupplier from './components/DataSupplier/DataSupplier';
import BarangMasuk from './components/BarangMasuk/BarangMasuk';
import BarangKeluar from './components/BarangKeluar/BarangKeluar';

const App = () => {
  return (
    <main>
        <Login/>
        <div className='flex'>
          <Sidebar />
          <Dashboard />
        </div>
        <DataBarang />
        <DataSupplier />
        <BarangMasuk />
        <BarangKeluar />
    </main>
    
  );
}

export default App;
