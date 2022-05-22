import React, { FC } from 'react';
import MenuRoutes from '../../router/menus';
import Header from './component/Header';
const Layout: FC = () => {
    return (
        <div className="w-screen">
            <Header />
            <MenuRoutes />
        </div>
    );
};
export default Layout;
