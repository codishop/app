import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import React from 'react';
import DashboardPage from './pages/dashboard';
import ProductsModule from './pages/products';
import OrdersModule from './pages/orders';
import CustomersModule from './pages/customers';

const AdminModule = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/customers/*" element={<CustomersModule />} />
                <Route path="/products/*" element={<ProductsModule />} />
                <Route path="/orders/*" element={<OrdersModule />} />
            </Routes>
        </Layout>
    );
};

export default AdminModule;
