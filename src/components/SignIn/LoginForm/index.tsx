import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

type LoginFormProps = {
    setFormType: React.Dispatch<React.SetStateAction<'signup' | 'login' | 'forgotPassword' | 'activate'>>;
};

const LoginForm: React.FC<LoginFormProps> = ({ setFormType }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-10 bg-white rounded-lg border-solid border border-[#e9ecef]">
            <div className="flex items-center lg:w-[540px] flex-col gap-2">
                <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">Welcome to Ingenium</span>
                <span className="text-md font-normal text-[#6c6a6a] text-center">Enter your credentials to log in</span>
            </div>
            <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col gap-2 w-full">
                    <label>Email</label>
                    <input type="email" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label>Password</label>
                    <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                            placeholder="Enter your password"
                        />
                        <span
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="absolute right-3 top-2 cursor-pointer text-gray-500"
                        >
                            {isPasswordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                        </span>
                    </div>
                </div>
                <button className="bg-primary text-center w-full py-2 text-white rounded-xl">Log In</button>
                <p className="text-center">Forgot Your Password? <span className="text-primary underline cursor-pointer" onClick={() => setFormType('forgotPassword')}>Click here</span></p>
                <p className="text-center">Don’t have an account? <span className="text-primary underline cursor-pointer" onClick={() => setFormType('signup')}>Sign up</span></p>
            </div>
        </div>
    );
};

export default LoginForm;
