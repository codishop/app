import { Routes, Route } from 'react-router-dom';
import CustomerPage from './customer.page';
import CustomersPage from './customers.page';

const CustomersModule = () => {
    return (
        <Routes>
            <Route path="/" element={<CustomersPage />} />
            <Route path="/*" element={<CustomerPage />} />
        </Routes>
    );
};

export default CustomersModule