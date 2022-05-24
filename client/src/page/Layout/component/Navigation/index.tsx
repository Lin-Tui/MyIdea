import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { Icon, cx, ChevronUpIcon } from '@vechaiui/react';
import { menus, MenuItem } from '../../../../router/router.config';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { appActions } from '../../../../store/features/appSlice';
import { findParentPath } from '../../../../util';
const Navigation: FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const handleOnclick = (item: MenuItem, parentItem?: MenuItem) => {
        dispatch(
            appActions.setActiveNavMenu({
                activeNavMenu: {
                    path: item.path,
                    parentPath: parentItem?.path,
                },
            })
        );
    };
    return (
        <div className="flex pr-1 pl-2 pt-1 space-x-4 w-full h-full bg-fill dark:bg-fill shadow-navigation">
            <div className="w-full h-full">
                {menus.map((outItem, outIndex) => {
                    return (
                        <Disclosure>
                            {({ open }) => {
                                return outItem.children ? (
                                    <>
                                        <Disclosure.Button
                                            className={cx(
                                                'mt-1 mb-1 flex flex-row h-50 items-center justify-between w-full px-4 py-2  hover:bg-base dark:hover:bg-base focus:outline-none cursor-base hover:text-primary-500 dark:hover:text-primary-500 rounded-sm',
                                                findParentPath(location.pathname) === outItem.path
                                                    ? 'text-primary-500 dark:text-primary-500'
                                                    : ''
                                            )}
                                        >
                                            <div className="flex flex-row items-center">
                                                <img
                                                    src={outItem.icon}
                                                    alt={outItem.title}
                                                    className="h-5 w-5 mr-3"
                                                />
                                                <span className="font-semibold ">
                                                    {outItem.title}
                                                </span>
                                            </div>
                                            <span
                                                className={cx(
                                                    'w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-500 ',
                                                    open
                                                        ? 'bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15'
                                                        : 'bg-transparent'
                                                )}
                                            >
                                                <Icon
                                                    as={ChevronUpIcon}
                                                    label="chevron-up"
                                                    className={cx(
                                                        'w-4 h-4',
                                                        open ? 'transform rotate-180' : ''
                                                    )}
                                                />
                                            </span>
                                        </Disclosure.Button>

                                        <Disclosure.Panel className="w-full text-sm text-muted">
                                            {outItem.children.map((innerItem, innerIndex) => {
                                                return (
                                                    <Link to={innerItem.path}>
                                                        <div
                                                            className={cx(
                                                                'mb-1 mt-1 w-full h-50 pl-12 flex flex-row items-center rounded-sm  hover:bg-base dark:hover:bg-base hover:text-primary-500 dark:hover:text-primary-500',
                                                                location.pathname === innerItem.path
                                                                    ? 'text-primary-500 dark:text-primary-500 bg-base dark:bg-base'
                                                                    : ''
                                                            )}
                                                            onClick={() =>
                                                                handleOnclick(innerItem, outItem)
                                                            }
                                                        >
                                                            <span className="font-semibold mb-1 mt-1">
                                                                {innerItem.title}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </Disclosure.Panel>
                                    </>
                                ) : (
                                    <Link to={outItem.path} onClick={() => handleOnclick(outItem)}>
                                        <div
                                            className={cx(
                                                ' h-50  px-4 py-2 flex flex-row items-center rounded-sm w-full  hover:bg-base dark:hover:bg-base hover:text-primary-500 dark:hover:text-primary-500',
                                                location.pathname === outItem.path
                                                    ? 'text-primary-500 dark:text-primary-500 bg-base dark:bg-base'
                                                    : ''
                                            )}
                                        >
                                            <img
                                                src={outItem.icon}
                                                alt={outItem.title}
                                                className=" h-5 w-5 mr-3"
                                            />
                                            <span className="font-semibold">{outItem.title}</span>
                                        </div>
                                    </Link>
                                );
                            }}
                        </Disclosure>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
