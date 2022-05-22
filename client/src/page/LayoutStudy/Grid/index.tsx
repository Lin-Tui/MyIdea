import React, { FC } from 'react';
import './index.scss';
/**
 * 学习自：https://juejin.cn/post/6854573220306255880#heading-13
 */
const Grid: FC = () => {
    return (
        <div className="w-full">
            <div className="font-bold text-30 w-full text-center mt-80 mb-80">Grid 布局</div>
            <div className="grip-wrapper bg-gray1">
                <div className="grid-one grid-item">One</div>
                <div className="grid-two grid-item">Two</div>
                <div className="grid-three grid-item">Three</div>
                <div className="grid-four grid-item">Four</div>
                <div className="grid-five grid-item">Five</div>
                <div className="grid-six grid-item">Six</div>
                <div className="grid-seven grid-item">Seven</div>
                <div className="grid-eight grid-item">Eight</div>
            </div>
        </div>
    );
};
export default Grid;
