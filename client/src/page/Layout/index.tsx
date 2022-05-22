import React, { FC } from 'react';
import MenuRoutes from '../../router/menus';
import Header from './component/Header';
import Navigation from './component/Navigation';
const Layout: FC = () => {
    return (
        <div className="w-screen h-screen grid  grid-cols-layout grid-rows-layout">
            <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                <Header />
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <Navigation />
            </div>
            <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                <MenuRoutes />
            </div>
        </div>
    );
};
export default Layout;
