import React, { FC, useState } from 'react';
import { FormControl, FormErrorMessage, Input, Button, useMessage } from '@vechaiui/react';
import { userLogin } from '../../../../service';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store/index';
import { userActions } from '../../../../store/features/userSlice';

const LoginForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleToggleShowPassword = () => setShowPassword(!showPassword);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const message = useMessage();
    const onSubmit = async (data: any) => {
        setLoading(true);
        const { username, password } = data;
        try {
            const encodePassword = window.btoa(password);
            const {
                err_no,
                err_tips,
                data: resData,
            } = await userLogin({
                username,
                password: encodePassword,
            });
            if (err_no === 0) {
                dispatch(userActions.setUserInfo({ username: resData.username }));
                message({
                    message: '登录成功',
                    status: 'success',
                    position: 'top',
                });
                navigate('/home');
            } else {
                message({
                    message: err_tips || '登录失败，请重试',
                    status: 'error',
                    position: 'top',
                });
            }
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            console.log(error);
            message({
                message: '网络异常，请重试',
                status: 'error',
                position: 'top',
            });
        }
    };
    return (
        <div>
            <div className="text-center w-full mb-5 font-bold">账号登录</div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormControl invalid={Boolean(errors.username)}>
                    <Input {...register('username', { required: true })} placeholder="请输入账号" />
                    {errors.username && errors.username.type === 'required' && (
                        <FormErrorMessage>请填写账号</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl invalid={Boolean(errors.password)}>
                    <Input.Group>
                        <Input
                            className="pr-16"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="请输入密码"
                            {...register('password', { required: true })}
                        />
                        <Input.RightElement className="w-16">
                            {
                                <div
                                    className={`${
                                        showPassword ? 'show-password' : 'hide-password'
                                    } w-5 h-5`}
                                    onClick={handleToggleShowPassword}
                                />
                            }
                        </Input.RightElement>
                    </Input.Group>
                    {errors.password && errors.password.type === 'required' && (
                        <FormErrorMessage>请填写密码</FormErrorMessage>
                    )}
                </FormControl>
                <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    className="w-full"
                    loading={loading}
                >
                    登录
                </Button>
            </form>
        </div>
    );
};
export default LoginForm;
