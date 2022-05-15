import React, { FC } from 'react';
import { useAppSelector } from '../../store/index';

const Home: FC = () => {
    const user = useAppSelector(state => state.user);
    return <div>{user.username}</div>;
};
export default Home;
