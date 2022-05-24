import { FC } from 'react';
import './index.scss';
const Position: FC = () => {
    return (
        <div className="w-full">
            <div className="font-bold text-30 w-full text-center mt-40 mb-50">Position 位置</div>
            <div className="position-wrapper bg-fill h-full relative flex flex-row shadow text-30 rounded-md">
                <div className="position-item1 position-item shadow">
                    <div className="w-full h-full text-center mb-10 flex flex-col  justify-center">
                        One: Fixed
                    </div>
                </div>
                <div className="position-item2 position-item shadow">
                    <div className="w-full h-full text-center mb-10 flex flex-col  justify-center">
                        Two: Relative
                    </div>
                </div>
                <div className="position-item3 position-item shadow">
                    <div className="w-full h-full text-center mb-10 flex flex-col  justify-center">
                        Three: Absolute
                    </div>
                </div>
                <div className="position-item4 position-item shadow">
                    <div className="w-full h-full text-center mb-10 flex flex-col  justify-center">
                        Four: Sticky
                    </div>
                </div>
                <div className="position-item5 position-item shadow">
                    <div className="w-full h-full text-center mb-10 flex flex-col  justify-center">
                        Five: Static
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Position;
