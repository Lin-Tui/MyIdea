import { FC, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import activeGotoIcon from '../../../../../../assert/image/dark-goto.png';
import gotoIcon from '../../../../../../assert/image/light-goto.png';
interface IProps {
    activeIcon: string;
    icon: string;
    hasGotoIcon?: boolean;
    children: ReactNode;
    onClick?: () => void;
}
const DropdowmItem: FC<IProps> = (props: IProps) => {
    const { activeIcon, icon, hasGotoIcon = false, onClick } = props;
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onClick={onClick}
                    className={`${
                        active ? 'bg-primary-500 text-white' : 'text-gray2'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                    {active ? (
                        <img src={activeIcon} className="rounded-full w-4 h-4 mr-2" alt="theme" />
                    ) : (
                        <img src={icon} className="rounded-full w-4 h-4 mr-2" alt="theme" />
                    )}
                    {props.children}
                    {hasGotoIcon &&
                        (active ? (
                            <img src={activeGotoIcon} className="rounded-full w-4 h-4" alt="goto" />
                        ) : (
                            <img src={gotoIcon} className="rounded-full w-4 h-4" alt="goto" />
                        ))}
                </button>
            )}
        </Menu.Item>
    );
};
export default DropdowmItem;
