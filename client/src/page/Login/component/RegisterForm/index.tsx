import React, { FC, useState } from 'react';
import { FormControl, FormErrorMessage, Input, Button, useMessage } from '@vechaiui/react';
import { useForm } from 'react-hook-form';
import { userRegister } from '../../../../service';
const RegisterForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleToggleShowPassword = () => setShowPassword(!showPassword);
    const message = useMessage();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();
    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const { password, username } = data;
            const encodePassword = window.btoa(password);
            const { err_no, err_tips } = await userRegister({
                username,
                password: encodePassword,
            });
            if (err_no === 0) {
                message({
                    message: '注册成功！',
                    status: 'success',
                    position: 'top',
                });
            } else {
                message({
                    message: err_tips || '注册失败,请重试',
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
            <div className="text-center w-full mb-5 font-bold">账号注册</div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormControl invalid={Boolean(errors.username)}>
                    <Input.Group>
                        <Input
                            placeholder="请输入账号"
                            {...register('username', { required: true })}
                        />
                        {errors.username && errors.username.type === 'required' && (
                            <FormErrorMessage>请填写账号</FormErrorMessage>
                        )}
                    </Input.Group>
                </FormControl>

                <FormControl invalid={Boolean(errors.password)}>
                    <Input.Group>
                        <Input
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

                <FormControl invalid={Boolean(errors.password)}>
                    <Input.Group>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="请输入确认密码"
                            {...register('confirmPassword', { required: true })}
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
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                        <FormErrorMessage>请填写确认密码</FormErrorMessage>
                    )}
                    {watch('password') &&
                        watch('confirmPassword') &&
                        watch('password') !== watch('confirmPassword') && (
                            <FormErrorMessage>两次输入的密码不符</FormErrorMessage>
                        )}
                </FormControl>

                <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    className="w-full"
                    loading={loading}
                >
                    注册
                </Button>
            </form>
        </div>
    );
};
export default RegisterForm;
