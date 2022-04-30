import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './../RequireAuth/RequireAuth';
import Home from './../../pages/Home/Home';
import Inventory from './../../pages/Inventory/Inventory';
import ManageInventory from './../../pages/ManageInventory/ManageInventory';
import AddItem from '../../pages/AddItem/AddItem';
import Register from './../../pages/Register/Register';
import Login from './../../pages/Login/Login';

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory/:id" element={
                <RequireAuth>
                    <Inventory />
                </RequireAuth>
            } />
            <Route path="/manage-inventory" element={
                <RequireAuth>
                    <ManageInventory />
                </RequireAuth>
            } />
            <Route path="/add-item" element={
                <RequireAuth>
                    <AddItem />
                </RequireAuth>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default ApplicationRoutes;