import { FC } from 'react';
import './index.scss';
const Position: FC = () => {
    return (
        <div>
            <div className="font-bold text-30 w-srceen text-center mt-80 mb-10">Position 位置</div>
            <div className="position-wrapper bg-gray1 h-full relative flex flex-row ">
                <div className="position-item1 position-item">
                    <div className="font-bold text-25 w-srceen h-full text-center mb-10 flex flex-col  justify-center">
                        One: Fixed
                    </div>
                </div>
                <div className="position-item2 position-item">
                    <div className="font-bold text-25 w-srceen h-full text-center mb-10 flex flex-col  justify-center">
                        Two: Relative
                    </div>
                </div>
                <div className="position-item3 position-item">
                    <div className="font-bold text-25 w-srceen h-full text-center mb-10 flex flex-col  justify-center">
                        Three: Absolute
                    </div>
                </div>
                <div className="position-item4 position-item">
                    <div className="font-bold text-25 w-srceen h-full text-center mb-10 flex flex-col  justify-center">
                        Four: Sticky
                    </div>
                </div>
                <div className="position-item5 position-item">
                    <div className="font-bold text-25 w-srceen h-full text-center mb-10 flex flex-col  justify-center">
                        Five: Static
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Position;
