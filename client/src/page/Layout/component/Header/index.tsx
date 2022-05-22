import { FC } from 'react';
// import { useAppSelector } from '../../../../store/index';
import messageIcon from '../../image/message.png';
import './index.scss';
import Dropdowm from './component/Dropdown';
const Header: FC = () => {
    // const user = useAppSelector(state => state.user);
    return (
        <div className="header-wrapper w-screen   flex flex-row justify-between items-center pl-10 pr-10 bg-fill">
            <div className="w-100 text-25 font-bold text-center">MyIdea</div>
            <div className="w-100 h-full flex flex-row justify-between items-center">
                <img src={messageIcon} className=" h-8 w-8" />
                <Dropdowm />
            </div>
        </div>
    );
};
export default Header;
