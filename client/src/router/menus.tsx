import React, { Suspense, ReactElement } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import PrivateRoute from '../component/PrivateRoute';
import { MenuItem, menus } from './router.config';

const MenuRoutes = () => {
    return (
        <Suspense fallback={<div></div>}>
            <Routes>
                {generateRoutes(menus)}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};
function generateRoutes(data: Array<MenuItem>, result: Array<ReactElement> = []) {
    data.forEach(item => {
        if (item.component) {
            result.push(
                <Route
                    key={item.path}
                    path={item.path}
                    element={<PrivateRoute component={item.component} />}
                />
            );
        }
        if (item.subs) {
            generateRoutes(item.subs, result);
        }
    });
    return result;
}

export default MenuRoutes;
