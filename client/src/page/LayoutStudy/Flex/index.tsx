import { FC } from 'react';
import './index.scss';
const Flex: FC = () => {
    return (
        <div>
            <div className="font-bold text-30 w-srceen text-center mt-80 mb-80">Flex 布局</div>
            <div className="flex-wrapper bg-gray1">
                <div className="flex-one flex-item">One</div>
                <div className="flex-two flex-item">Two</div>
                <div className="flex-three flex-item">Three</div>
                <div className="flex-four flex-item">Four</div>
                <div className="flex-five flex-item">Five</div>
                <div className="flex-six flex-item">Six</div>
                <div className="flex-seven flex-item">Seven</div>
                <div className="flex-eight flex-item">Eight</div>
            </div>
        </div>
    );
};

export default Flex;
