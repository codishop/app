import { Routes, Route } from 'react-router-dom';
import CheckoutPage from './checkout.page';

const CheckoutRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<CheckoutPage />} />
        </Routes>
    );
};

export default CheckoutRouter