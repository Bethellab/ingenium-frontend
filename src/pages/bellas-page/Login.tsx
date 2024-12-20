import massage from '../../assets/image/loginbg.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                backgroundImage: `url(${massage})`,
            }}
            className="h-screen bg-cover bg-center flex justify-center items-center overflow-hidden"
        >
            <div className="w-full px-4 sm:px-8 md:px-16">
                <div className="w-full max-w-[700px] bg-white rounded-lg p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-md mb-16 mx-auto">
                    {/* Header Section */}
                    <div className="text-center mt-10 space-y-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#191515]">
                            Welcome back
                        </h1>
                        <p className="text-base sm:text-lg font-normal text-[#404245]">
                            Are you ready for the glow up!
                        </p>
                    </div>

                    {/* Input Section */}
                    <div className="flex flex-col gap-6 sm:gap-8 mt-6">
                        {/* Email Input */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold text-[#797979] mb-2">
                                Email Address
                            </label>
                            <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    className="w-full bg-transparent text-gray-600 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold text-[#797979] mb-2">
                                Password
                            </label>
                            <div className="flex items-center w-full bg-white rounded-full border border-gray-300 px-4 py-2 relative">
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full bg-transparent text-gray-600 focus:outline-none"
                                />
                                <div className="absolute right-4">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.00004 13.6668C3.31804 13.6668 0.333374 10.6822 0.333374 7.00016C0.333374 3.31816 3.31804 0.333496 7.00004 0.333496C10.682 0.333496 13.6667 3.31816 13.6667 7.00016C13.6667 10.6822 10.682 13.6668 7.00004 13.6668ZM6.33337 9.00016V10.3335H7.66671V9.00016H6.33337ZM7.66671 7.9035C8.20249 7.74201 8.66245 7.39346 8.96281 6.92132C9.26318 6.44918 9.38397 5.88487 9.3032 5.33114C9.22242 4.77742 8.94545 4.27112 8.52272 3.90447C8.09999 3.53781 7.55962 3.33519 7.00004 3.3335C6.46061 3.33346 5.93782 3.52027 5.52057 3.86216C5.10332 4.20405 4.81738 4.67992 4.71137 5.20883L6.01937 5.47083C6.05649 5.28512 6.14559 5.11376 6.27629 4.97671C6.40698 4.83965 6.57392 4.74253 6.75766 4.69663C6.9414 4.65074 7.13439 4.65797 7.31419 4.71748C7.49398 4.77698 7.65318 4.88632 7.77326 5.03277C7.89334 5.17922 7.96937 5.35676 7.9925 5.54472C8.01562 5.73269 7.98489 5.92336 7.90389 6.09455C7.82288 6.26574 7.69493 6.4104 7.53492 6.51172C7.37492 6.61303 7.18943 6.66682 7.00004 6.66683C6.82323 6.66683 6.65366 6.73707 6.52864 6.86209C6.40361 6.98712 6.33337 7.15669 6.33337 7.3335V8.3335H7.66671V7.9035Z" fill="#B2B2B2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <p
                        onClick={() => navigate('/bella-reset')}
                        className="text-right cursor-pointer text-sm font-semibold text-[#5e25cc] mt-6 mr-[20px]"
                    >
                        Forgot Password?
                    </p>

                    {/* Login Button */}
                    <button className="w-full  h-[44px] bg-[#5e25cc] text-white text-sm font-semibold rounded-full mx-auto mt-8 hover:bg-[#4d1eaa] transition">
                        Log In
                    </button>

                    {/* Sign Up Section */}
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <span className="text-sm font-semibold text-[#191515]">
                            Are you in need of a Specialist?
                        </span>
                        <button
                            onClick={() => navigate('/bella-signup')}
                            className="text-sm font-semibold text-[#5e25cc] underline"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
