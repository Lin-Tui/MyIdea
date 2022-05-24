import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { Icon, cx, ChevronUpIcon } from '@vechaiui/react';
import { menus, MenuItem } from '../../../../router/router.config';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../store';
import { useAppDispatch } from '../../../../store';
import { appActions } from '../../../../store/features/appSlice';
const Navigation: FC = () => {
    const dispatch = useAppDispatch();
    const app = useAppSelector(state => state.app);
    const { activeNavMenu } = app;
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
        <div className="flex pr-1 pl-2 pt-1 space-x-4 w-full h-full bg-fill dark:bg-fill ">
            <div className="w-full h-full">
                {menus.map((outItem, outIndex) => {
                    return (
                        <Disclosure>
                            {({ open }) => {
                                return outItem.children ? (
                                    <>
                                        <Disclosure.Button
                                            className={cx(
                                                'flex flex-row h-50 items-center justify-between w-full px-4 py-2  hover:bg-neutral-100 dark:hover:bg-neutral-100 focus:outline-none cursor-base hover:text-primary-500 dark:hover:text-primary-500 rounded-sm',
                                                activeNavMenu.parentPath === outItem.path
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
                                        <Disclosure.Panel className="w-full  h-50 text-sm text-muted hover:bg-neutral-100 dark:hover:bg-neutral-100 hover:text-primary-500 dark:hover:text-primary-500">
                                            {outItem.children.map((innerItem, innerIndex) => {
                                                return (
                                                    <Link
                                                        to={innerItem.path}
                                                        className={cx(
                                                            'w-full h-full pl-12 flex flex-row items-center rounded-sm',
                                                            activeNavMenu.path === innerItem.path
                                                                ? 'text-primary-500 dark:text-primary-500 bg-neutral-100 dark:bg-neutral-100 '
                                                                : ''
                                                        )}
                                                        onClick={() =>
                                                            handleOnclick(innerItem, outItem)
                                                        }
                                                    >
                                                        <span className="font-semibold">
                                                            {innerItem.title}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </Disclosure.Panel>
                                    </>
                                ) : (
                                    <Link to={outItem.path} onClick={() => handleOnclick(outItem)}>
                                        <div
                                            className={cx(
                                                ' h-50  px-4 py-2 flex flex-row items-center rounded-sm w-full  hover:bg-neutral-100 dark:hover:bg-neutral-100 hover:text-primary-500 dark:hover:text-primary-500',
                                                activeNavMenu.path === outItem.path
                                                    ? 'text-primary-500 dark:text-primary-500 bg-neutral-100 dark:bg-neutral-100 '
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
