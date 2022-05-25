import { FC } from 'react';
const Footer: FC = () => {
    return (
        <div className="w-full text-center">
            <a
                target={'_blank'}
                href="https://github.com/Lin-Tui/MyIdea"
                className="text-blue-500"
                rel="noreferrer"
            >
                MyIdea&nbsp;
            </a>
            ©2022 Created by LinTui
        </div>
    );
};
export default Footer;
