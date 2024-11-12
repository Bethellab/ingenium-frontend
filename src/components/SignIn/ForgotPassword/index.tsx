import React from 'react';

type ForgotPasswordFormProps = {
    setFormType: React.Dispatch<React.SetStateAction<'signup' | 'login' | 'forgotPassword' | 'activate'>>;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ setFormType }) => (
    <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-10 bg-white rounded-lg border-solid border border-[#e9ecef]">
        <div className="flex items-center lg:w-[540px] flex-col gap-2">
            <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">Reset Your Password</span>
            <span className="text-md font-normal text-[#6c6a6a] text-center">Get a link to reset your password</span>
        </div>
        <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-2 w-full">
                <label>Email</label>
                <input type="email" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your email" />
            </div>
            <button className="bg-primary text-center w-full py-2 text-white rounded-xl">Send Reset Link</button>
            <p className="text-center">Remembered your password? <span className="text-primary underline cursor-pointer" onClick={() => setFormType('login')}>Log in</span></p>
        </div>
    </div>
);

export default ForgotPasswordForm;
