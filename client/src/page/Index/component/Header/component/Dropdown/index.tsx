import { FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import avatarIcon from '../../../../image/avatar.jpg';
import themeIcon from '../../../../image/theme.png';
import activeThemeIcon from '../../../../image/active-theme.png';
import ThemSwitcher from '../../../../../../component/ThemeSwitch';
import exitIcon from '../../../../image/exit.png';
import activeExitIcon from '../../../../image/active-exit.png';
import activeGotoIcon from '../../../../../../assert/image/dark-goto.png';
import gotoIcon from '../../../../../../assert/image/light-goto.png';
import { userLogout } from '../../../../../../service';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '@vechaiui/react';
const Dropdowm: FC = () => {
    const navigate = useNavigate();
    const message = useMessage();
    const logout = async () => {
        try {
            const { err_no, err_tips } = await userLogout();
            if (err_no === 0) {
                message({
                    message: '退出成功',
                    status: 'success',
                    position: 'top',
                });
                navigate('/login');
            } else {
                message({
                    message: err_tips || '退出失败，请重试~',
                    status: 'error',
                    position: 'top',
                });
            }
        } catch (error: any) {
            message({
                message: '退出失败，请重试~',
                status: 'error',
                position: 'top',
            });
        }
    };
    return (
        <div>
            <Menu as="div" className="relative text-left">
                <div>
                    <Menu.Button className=" bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <img src={avatarIcon} className="rounded-full w-11 h-11" alt="avatar" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-violet-500 text-white' : 'text-gray2'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <img
                                                src={activeThemeIcon}
                                                className="rounded-full w-4 h-4 mr-2"
                                                alt="theme"
                                            />
                                        ) : (
                                            <img
                                                src={themeIcon}
                                                className="rounded-full w-4 h-4 mr-2"
                                                alt="theme"
                                            />
                                        )}
                                        <ThemSwitcher />
                                        {active ? (
                                            <img
                                                src={activeGotoIcon}
                                                className="rounded-full w-4 h-4"
                                                alt="goto"
                                            />
                                        ) : (
                                            <img
                                                src={gotoIcon}
                                                className="rounded-full w-4 h-4"
                                                alt="goto"
                                            />
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={logout}
                                        className={`${
                                            active ? 'bg-violet-500 text-white' : 'text-gray2'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <img
                                                src={activeExitIcon}
                                                className="rounded-full w-4 h-4 mr-2"
                                                alt="exit"
                                            />
                                        ) : (
                                            <img
                                                src={exitIcon}
                                                className="rounded-full w-4 h-4 mr-2"
                                                alt="exit"
                                            />
                                        )}
                                        <div className="flex flex-row items-center flex-1 space-x-2">
                                            <span className="font-semibold">退出</span>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default Dropdowm;
