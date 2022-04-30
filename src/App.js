import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/manage-inventory" element={<ManageInventory />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
