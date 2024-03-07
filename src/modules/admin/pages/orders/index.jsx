import { Routes, Route } from 'react-router-dom';
import OrderPage from './order.page';
import OrdersPage from './orders.page';

const OrdersModule = () => {
    return (
            <Routes>
                <Route path="/" element={<OrdersPage />} />
                <Route path="/*" element={<OrderPage />} />
            </Routes>
    );
};

export default OrdersModule