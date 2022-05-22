import React, { FC } from 'react';
import Grid from './Grid';
import Flex from './Flex';
import Position from './Position';
const LayoutStudy: FC = () => {
    return (
        <div className="w-full">
            <Position />
            <Flex />
            <Grid />
        </div>
    );
};
export default LayoutStudy;
