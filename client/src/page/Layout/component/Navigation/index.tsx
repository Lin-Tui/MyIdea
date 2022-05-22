import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { Icon, cx, ChevronUpIcon } from '@vechaiui/react';
import { menus } from '../../../../router/router.config';
import { Link } from 'react-router-dom';
const Navigation: FC = () => {
    return (
        <div className="flex pr-1 pl-2 pt-1 space-x-4 w-full h-full bg-fill dark:bg-fill ">
            <div className="w-full h-full">
                {menus.map((outItem, outIndex) => {
                    return (
                        <Disclosure>
                            {({ open }) => {
                                return outItem.children ? (
                                    <>
                                        <Disclosure.Button className="flex flex-row h-50 items-center justify-between w-full px-4 py-2  hover:bg-neutral-100 dark:hover:bg-neutral-100 focus:outline-none cursor-base hover:text-primary-500 dark:hover:text-primary-500 rounded-sm">
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
                                        <Disclosure.Panel className="flex flex-row items-center w-full pl-12 h-50 text-sm text-muted hover:bg-neutral-100 dark:hover:bg-neutral-100 hover:text-primary-500 dark:hover:text-primary-500">
                                            {outItem.children.map((innerItem, innerIndex) => {
                                                return (
                                                    <Link to={innerItem.path}>
                                                        <span className="font-semibold">
                                                            {innerItem.title}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </Disclosure.Panel>
                                    </>
                                ) : (
                                    <Link to={outItem.path}>
                                        <div className=" h-50  px-4 py-2 flex flex-row items-center rounded-sm w-full  hover:bg-neutral-100 dark:hover:bg-neutral-100 hover:text-primary-500 dark:hover:text-primary-500">
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
