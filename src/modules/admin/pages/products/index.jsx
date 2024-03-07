import { Routes, Route } from 'react-router-dom';
import ProductPage from "./product.page";
import ProductsPage from "./products.page";

const ProductsModule = () => {
    return (
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/:id" element={<ProductPage />} />
            </Routes>
    );
};

export default ProductsModule