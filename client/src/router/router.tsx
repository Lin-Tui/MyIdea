import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../component/PrivateRoute';
import Login from '../page/Login';
import Layout from '../page/Layout';
const getRouter = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateRoute component={Layout} />} />
        </Routes>
    </Router>
);

export default getRouter;
