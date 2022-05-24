import { FC } from 'react';
import './index.scss';
const Flex: FC = () => {
    return (
        <div className="w-full">
            <div className="font-bold text-30 text-center mt-50 mb-50">Flex 布局</div>
            <div className="flex-wrapper bg-fill shadow rounded-md">
                <div className="flex-one flex-item shadow">One</div>
                <div className="flex-two flex-item shadow">Two</div>
                <div className="flex-three flex-item shadow">Three</div>
                <div className="flex-four flex-item shadow">Four</div>
                <div className="flex-five flex-item shadow">Five</div>
                <div className="flex-six flex-item shadow">Six</div>
                <div className="flex-seven flex-item shadow">Seven</div>
                <div className="flex-eight flex-item shadow">Eight</div>
            </div>
        </div>
    );
};

export default Flex;
