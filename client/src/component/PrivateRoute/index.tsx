import React, { FC, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
interface Props {
    component: ComponentType;
    [key: string]: any;
}
const isAuthenticated = true;
const PrivateRoute: FC<Props> = iProps => {
    const { component: Component } = iProps;
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
