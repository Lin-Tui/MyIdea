import React, { FC } from 'react';
import './index.scss';
/**
 * 学习自：https://juejin.cn/post/6854573220306255880#heading-13
 */
const Grid: FC = () => {
    return (
        <div className="w-full">
            <div className="font-bold text-30 w-full text-center mt-50 mb-50">Grid 布局</div>
            <div className="grip-wrapper bg-fill shadow rounded-md">
                <div className="grid-one grid-item shadow">One</div>
                <div className="grid-two grid-item shadow">Two</div>
                <div className="grid-three grid-item shadow">Three</div>
                <div className="grid-four grid-item shadow">Four</div>
                <div className="grid-five grid-item shadow">Five</div>
                <div className="grid-six grid-item shadow">Six</div>
                <div className="grid-seven grid-item shadow">Seven</div>
                <div className="grid-eight grid-item shadow">Eight</div>
            </div>
        </div>
    );
};
export default Grid;
