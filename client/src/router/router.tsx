import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../component/PrivateRoute';
import Login from '../page/Login';
import Index from '../page/Index';

const getRouter = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateRoute component={Index} />} />
        </Routes>
    </Router>
);

export default getRouter;
