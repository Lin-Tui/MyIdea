import React, { FC, useState } from 'react';
import LoginForm from './component/LoginForm';
import ResigerForm from './component/RegisterForm';
import './index.scss';
const Login: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    return (
        <div className="page-wrapper w-screen h-screen flex flex-col items-center justify-center">
            <div className=" bg-white p-10  rounded-md shadow-2xl">
                {isLogin ? <LoginForm /> : <ResigerForm />}
                <div
                    className="text-center w-full text-gray-400 text-12 mt-5"
                    onClick={() => {
                        setIsLogin(!isLogin);
                    }}
                >
                <button>{isLogin ? '注册' : '回到登录'}</button>
                </div>
            </div>
        </div>
    );
};
export default Login;
