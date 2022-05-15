import React, { FC, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../util/session';

interface Props {
    component: ComponentType;
    [key: string]: any;
}
const PrivateRoute: FC<Props> = iProps => {
    const { component: Component } = iProps;
    return isAuthenticated() ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
