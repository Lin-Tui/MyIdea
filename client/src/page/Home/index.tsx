import React, { FC } from 'react';
const Home: FC = () => {
    return (
        <div className="w-full h-full">
            <iframe
                title="博客"
                src="https://lin-tui.github.io/"
                height={'100%'}
                width={'100%'}
                className="rounded-md"
            />
        </div>
    );
};
export default Home;
