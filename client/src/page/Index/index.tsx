import React, { FC } from 'react';
import MenuRoutes from '../../router/menus';
import Header from './component/Header';
const Index: FC = () => {
    return (
        <div className="w-screen">
            <Header />
            <MenuRoutes />
        </div>
    );
};
export default Index;
