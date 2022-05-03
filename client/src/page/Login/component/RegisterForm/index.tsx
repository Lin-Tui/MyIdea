import React, { FC, useState } from 'react';
import { FormControl, FormErrorMessage, Input, Button } from '@vechaiui/react';
import { useForm } from 'react-hook-form';
const RegisterForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleToggleShowPassword = () => setShowPassword(!showPassword);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = async (data: any) => {
        setLoading(true);
        setTimeout(() => {
            alert(JSON.stringify(data));
            setLoading(false);
        }, 500);
    };
    return (
        <div>
            <div className="text-center w-full mb-5 font-bold">账号注册</div>
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

                <FormControl invalid={Boolean(errors.password)}>
                    <Input.Group>
                        <Input
                            className="pr-16"
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
                    {errors.password && errors.password.type === 'required' && (
                        <FormErrorMessage>请填写确认密码</FormErrorMessage>
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
