import { Routes, Route } from 'react-router-dom';
import HomePage from './home.page';

const HomeRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default HomeRouter