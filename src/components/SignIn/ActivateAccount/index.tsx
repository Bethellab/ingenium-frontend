
import { image } from '@/assets/image/image';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const ActivateAccount = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex items-center justify-center border-b">
                <img src={image.signinlogo} className="w-36 m-4" onClick={() => navigate('/')} />
            </div>

            <div className='flex items-center justify-center mt-10'>
                <div className="flex justify-center items-center w-full lg:w-[600px] p-6 flex-col gap-6 bg-white rounded-lg border-solid border border-[#e9ecef]">
                    <div className="flex items-center lg:w-[540px] flex-col gap-2">
                        <span className="text-2xl font-semibold text-center lg:whitespace-nowrap">
                            Activate Your Account
                        </span>
                        <span className="text-md font-normal text-[#6c6a6a] text-center">
                            We just emailed you a temporary password. Please enter it below.
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        {/* Google login button */}
                        <button className="bg-white text-center border py-3 px-4 rounded-xl flex items-center justify-center gap-2 w-full">
                            <FaGoogle size={20} />
                            Continue with Google
                        </button>

                        {/* LinkedIn login button */}
                        <button className="bg-white text-center border py-3 px-4 rounded-xl flex items-center justify-center gap-2 w-full">
                            <FaLinkedin size={20} />
                            Continue with LinkedIn
                        </button>

                        <p className='text-semibold text-xl text-center text-gray-600'>Or</p>

                        <div className="flex flex-col gap-2 w-full">
                            <label className='font-semibold'>Email</label>
                            <input type="email" className="w-full border border-gray-300 py-2 px-2 rounded-xl" placeholder="Enter email address" />
                        </div>

                        <p className='text-gray-600'>By submitting this form, you consent to receive emails from Ingenium about various updates, with the option to unsubscribe anytime. For questions, contact <span className='underline font-semibold text-gray-900'>hello@ingenium.com</span> View our <span className='underline font-semibold text-gray-900'>Privacy Policy</span>.</p>

                    </div>

                    <button className="bg-primary text-center w-full py-2 text-white rounded-xl">Continue with Email</button>

                    <div className="flex justify-center">
                        <p>
                            Already have an account?{' '}
                            <span
                                className="text-primary underline cursor-pointer"
                                onClick={() => navigate('/signup/business')}
                            >
                                Log in
                            </span>
                        </p>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default ActivateAccount;
