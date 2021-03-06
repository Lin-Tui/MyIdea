import React, { FC, useEffect, useState } from 'react';
import LoginForm from './component/LoginForm';
import ResigerForm from './component/RegisterForm';
import { userIsLogin } from '../../service';
import { useMessage } from '@vechaiui/react';
import { useNavigate } from 'react-router-dom';

import './index.scss';
const Login: FC = () => {
    const message = useMessage();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const navigate = useNavigate();
    const hasLogin = async () => {
        const { err_no, err_tips, data } = await userIsLogin();
        if (err_no === 0 && data?.isLogin) {
            message({
                message: err_tips,
                status: 'success',
                position: 'top',
            });
            navigate('/home');
        }
    };
    useEffect(() => {
        hasLogin();
    });
    return (
        <div className="page-wrapper w-screen h-screen flex flex-col items-center justify-center">
            <div className=" bg-fill p-10  rounded-md shadow-2xl drak:bg-fill">
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
