import { image } from '@/assets/image/image';
import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

type SignupFormProps = {

    userType: 'individual' | 'business';
};

const SignupForm: React.FC<SignupFormProps> = ({ userType }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const navigate = useNavigate()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('pro');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showChoosePlan, setShowChoosePlan] = useState(false);

    // Password validation regex
    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;

        if (isLongEnough && hasUpperCase && hasNumber && hasSpecialChar) {
            setPasswordStrength('strong');
        } else if (isLongEnough && (hasUpperCase || hasNumber || hasSpecialChar)) {
            setPasswordStrength('medium');
        } else {
            setPasswordStrength('weak');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsTyping(newPassword.length > 0);  // Mark typing as true only if password is not empty
        validatePassword(newPassword);
    };

    const handleSubmit = () => {
        // After the form is submitted, set the state to show the email confirmation
        setFormSubmitted(true);
    };

    const handleOpenEmailApp = () => {
        setShowChoosePlan(true);  // Show the plan selection view
    };

    return (
        <div>
            <div >
                {!formSubmitted ? (
                    <form className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-6 lg:mt-20 bg-white rounded-lg border-solid border border-[#e9ecef]">
                        <div className="flex items-center lg:w-[540px] flex-col gap-2">
                            <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">Create your Ingenium account</span>
                            <span className="text-md font-normal text-[#6c6a6a] text-center">Fill the details below to create your account</span>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-4 items-start">
                                <div className="flex flex-col lg:flex-row justify-between items-center gap-3 w-full">
                                    <div className="flex flex-col gap-2 w-full">
                                        <label className='font-normal'>First Name</label>
                                        <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your first name" required />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label>Last Name</label>
                                        <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your last name" required />
                                    </div>
                                </div>
                                {userType === 'business' && (
                                    <div className="flex flex-col gap-2 w-full">
                                        <label>Business Name</label>
                                        <input type="text" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your registered business name" required />
                                    </div>
                                )}
                                <div className="flex flex-col gap-2 w-full">
                                    <label>Email</label>
                                    <input type="email" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter your email" required />
                                </div>



                                <div className="flex flex-col gap-2 w-full">
                                    <label>Password</label>
                                    <div className="relative">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span
                                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                            className="absolute right-3 top-2 cursor-pointer text-gray-500"
                                        >
                                            {isPasswordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                                        </span>
                                    </div>


                                    {/* Password Strength Indicator */}
                                    {isTyping && (
                                        <div className="w-full h-2 mt-2 bg-gray-300 rounded">
                                            <div
                                                className={`h-full rounded transition-all duration-300 ${passwordStrength === 'strong'
                                                    ? 'bg-primary'
                                                    : passwordStrength === 'medium'
                                                        ? 'bg-yellow-500'
                                                        : 'bg-red-500'
                                                    }`}
                                                style={{
                                                    width:
                                                        passwordStrength === 'strong'
                                                            ? '100%'
                                                            : passwordStrength === 'medium'
                                                                ? '60%'
                                                                : '30%',
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                    {/* Display instructions and strength indicator only after typing */}
                                    {isTyping && (
                                        <div className="text-md text-gray-600 mt-2">
                                            <p>Your password must contain:</p>
                                            <ul>
                                                <li className={password.length >= 8 ? 'text-primary' : 'text-red-500'}>
                                                    Minimum 8 characters
                                                </li>
                                                <li className={/[A-Z]/.test(password) ? 'text-primary' : 'text-red-500'}>
                                                    At least one uppercase letter
                                                </li>
                                                <li className={/\d/.test(password) ? 'text-primary' : 'text-red-500'}>
                                                    At least one number
                                                </li>
                                                <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-primary' : 'text-red-500'}>
                                                    At least one symbol
                                                </li>
                                            </ul>
                                        </div>
                                    )}


                                </div>

                            </div>
                            <p className='text-gray-600'>By submitting this form, you consent to receive emails from Ingenium about various updates, with the option to unsubscribe anytime. For questions, contact <span className='underline font-semibold text-gray-900'>hello@ingenium.com</span> View our <span className='underline font-semibold text-gray-900'>Privacy Policy</span>.</p>
                            <button className="bg-primary text-center w-full py-2 text-white rounded-xl" onClick={handleSubmit}>Continue</button>
                            <p className="text-center">Already have an account? <span className="text-primary underline cursor-pointer" >
                                {userType === 'individual' && (
                                    <span
                                        onClick={() => navigate('/login?userType=individual')}
                                        className=""
                                    >
                                        Log in
                                    </span>

                                )}
                                {userType === 'business' && (
                                    <span
                                        onClick={() => navigate('/login?userType=business')}
                                        className=""
                                    >
                                        Log in
                                    </span>
                                )}

                            </span></p>







                        </div>
                    </form>

                ) : showChoosePlan ? (
                    <>
                        <div className="flex justify-center items-center mt-10 lg:mt-24">
                            {/* Pricing Cards */}
                            <div className="flex flex-col xl:flex-row gap-4">

                                {/* Basic Plan Card */}
                                <div className={`w-full lg:w-96 py-6 px-3 bg-gray-100 h-full ${selectedPlan === 'basic' ? 'border-4 border-primary' : 'hover:border-4 hover:border-primary'} rounded-lg shadow-lg`}
                                    onClick={() => setSelectedPlan('basic')}>
                                    <div className="mb-4">
                                        <button className="bg-gray-300 text-sm font-semibold py-2 px-4 rounded-lg">
                                            BASIC
                                        </button>
                                        <p className="text-gray-700 mt-4">
                                            For all individuals and starters who
                                            want to start with domaining.
                                        </p>
                                        <h2 className="text-6xl font-semibold text-black mt-6">$0</h2>
                                        <p className="text-gray-500">Per member, per Month</p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 text-white">
                                        <div className="flex items-center gap-2">
                                            
                                            <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Automatically free up storage space for your courses</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Access on any device you use</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">30-day content protection and recovery</p>
                                        </div>


                                    </div>

                                    {
                                        userType === 'business' &&
                                        <button onClick={() => navigate('/invite')} className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                                            Try for free for 30 days
                                        </button>
                                    }

                                    {
                                        userType === 'individual' &&
                                        <button onClick={() => navigate('/home')} className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                                            Try for free for 30 days
                                        </button>
                                    }
                                </div>



                                {/* Pro Plan Card */}
                                <div className={`w-full lg:w-96 py-6 px-3 bg-gray-100 h-full relative ${selectedPlan === 'pro' ? 'border-4 border-primary' : 'hover:border-4 hover:border-primary'} rounded-lg shadow-lg`}
                                    onClick={() => setSelectedPlan('pro')}>
                                    {/* Recommended Badge */}
                                    <span className="absolute -top-2 left-64 bg-[#FFBD01]  py-1 px-3 text-sm rounded-full">
                                        Recommended
                                    </span>
                                    <div className="mb-4">
                                        <button className="bg-white text-blue-600 text-sm font-semibold py-2 px-4 rounded-lg">
                                            PRO
                                        </button>
                                        <p className="mt-4">
                                            For individuals and professionals looking to advance in domaining.
                                        </p>
                                        <h2 className="text-6xl font-semibold mt-6">$50</h2>
                                        <p className="opacity-80">Per member, per Month</p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 text-white">
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Automatically free up storage space for your courses</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Access on any device you use</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">30-day content protection and recovery</p>
                                        </div>
                                    </div>

                                    {userType === 'business' && (
                                        <button
                                            onClick={() => navigate('/invite')}
                                            className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center"
                                        >
                                            Try for free for 30 days
                                        </button>
                                    )}

                                    {userType === 'individual' && (
                                        <button
                                            onClick={() => navigate('/home')}
                                            className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center"
                                        >
                                            Try for free for 30 days
                                        </button>
                                    )}
                                </div>

                                {/* Advance Plan Card */}
                                <div className={`w-full lg:w-96 py-6 px-3 bg-gray-100 h-full ${selectedPlan === 'basic' ? 'border-4 border-primary' : 'hover:border-4 hover:border-primary'} rounded-lg shadow-lg`}
                                    onClick={() => setSelectedPlan('advance')}>
                                    <div className="mb-4">
                                        <button className="bg-gray-200 text-sm font-semibold py-2 px-4 rounded-lg">
                                            Advanced
                                        </button>
                                        <p className="text-gray-700 mt-4">
                                            For individuals and starters who want to begin with domaining.
                                        </p>
                                        <h2 className="text-6xl font-semibold text-black mt-6">$99</h2>
                                        <p className="text-gray-500">Per member, per Month</p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 text-white">
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Automatically free up storage space for your courses</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">Access on any device you use</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                        <img src={image.check_circle_dark} />
                                            <p className="text-gray-800">30-day content protection and recovery</p>
                                        </div>


                                    </div>
                                    {
                                        userType === 'business' &&
                                        <button onClick={() => navigate('/invite')} className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                                            Try for free for 30 days
                                        </button>
                                    }

                                    {
                                        userType === 'individual' &&
                                        <button onClick={() => navigate('/home')} className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                                            Try for free for 30 days
                                        </button>
                                    }
                                </div>
                            </div>




                        </div>
                        {
                            userType === 'business' &&
                            <div className="flex justify-center items-center m-5 lg:m-10">
                                <button onClick={() => navigate('/invite')} className="text-primary text-lg text-center">Skip for now</button>
                            </div>
                        }
                        {
                            userType === 'individual' &&
                            <div className="flex justify-center items-center m-5 lg:m-10">
                                <button onClick={() => navigate('/home')} className="text-primary text-lg text-center">Skip for now</button>
                            </div>
                        }

                    </>
                ) : (
                    // Email confirmation view
                    <div className="flex justify-center mt-24 items-center w-full lg:w-[600px] p-6 flex-col gap-6 bg-white rounded-lg border-solid border border-[#e9ecef]">
                        <img src={image.envelope} alt="Envelope" />
                        <div className="flex items-center lg:w-[540px] flex-col gap-2">
                            <span className="text-2xl font-semibold text-center">Check your inbox</span>
                            <span className="text-md font-normal text-[#6c6a6a] text-center">
                                We’ve just sent an email confirmation to <strong className='text-primary'>kehinde@glova.com</strong>.
                                Click the link to verify your email.
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-4">
                            <button
                                className="bg-primary text-white py-2 px-4 rounded-xl w-full"
                                onClick={handleOpenEmailApp}  // Change view to plan selection
                            >
                                Open Email App
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>

    );
};

export default SignupForm;
