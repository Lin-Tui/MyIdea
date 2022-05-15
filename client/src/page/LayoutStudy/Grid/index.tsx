import React, { FC } from 'react';
import './index.scss';
/**
 * 学习自：https://juejin.cn/post/6854573220306255880#heading-13
 */
const Grid: FC = () => {
    return (
        <div>
            <div className="font-bold text-30 w-srceen text-center mt-80 mb-80">Grid 布局</div>
            <div className="wrapper">
                <div className="one item">One</div>
                <div className="two item">Two</div>
                <div className="three item">Three</div>
                <div className="four item">Four</div>
                <div className="five item">Five</div>
                <div className="six item">Six</div>
                <div className="seven item">Seven</div>
                <div className="eight item">Eight</div>
            </div>
        </div>
    );
};
export default Grid;
