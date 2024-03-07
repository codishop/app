import { Routes, Route } from 'react-router-dom';
import CheckoutRouter from './pages/checkout';
import Layout from './components/layout';
import HomeRouter from './pages/home';
import React from 'react';

const ShopModule = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRouter />} />
            <Route path="/checkout" element={<CheckoutRouter />} />
        </Routes>
    );
};

export default ShopModule;
