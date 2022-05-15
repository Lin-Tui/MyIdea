import React, { FC } from 'react';
import MenuRoutes from '../../router/menus';
import ThemSwitcher from '../../component/ThemeSwitch';
const Index: FC = () => {
    return (
        <div>
            {/* <ThemSwitcher /> */}
            <MenuRoutes />
        </div>
    );
};
export default Index;
