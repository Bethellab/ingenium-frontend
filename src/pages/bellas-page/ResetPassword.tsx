import { useState } from 'react';
import massage from '../../assets/image/signupbg.png';

const ResetPassword = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSendResetLink = () => {
    setAlertVisible(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${massage})`,
      }}
      className="h-screen flex justify-center items-center bg-cover bg-center overflow-hidden"
    >
      {/* Alert Message */}
      {alertVisible && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-auto max-w-xs flex justify-center items-center bg-white text-center py-2 px-4 border-x-4 border-emerald-500 shadow-md z-50">
          <p className="text-sm font-semibold text-[#191515]">
            Reset Link has been sent successfully
          </p>
        </div>
      )}

      {/* Main Container */}
      <div className="w-full max-w-[700px] p-6 sm:p-10 bg-white rounded-lg relative overflow-hidden shadow-md">
        {/* Header Section */}
        <div className="text-center mt-10 space-y-4">
          <h1 className="text-4xl font-bold text-[#191515]">Reset Password</h1>
          <p className="text-lg font-normal text-[#404245]">
            Enter the email address associated with your account
          </p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col gap-8 w-full sm:w-[520px] mt-6 sm:ml-[40px]">
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

          <button
          onClick={handleSendResetLink}
          className="w-full sm:w-[520px] h-[44px] bg-[#5e25cc] text-white text-sm font-semibold rounded-full mx-auto mt-14 hover:bg-[#4d1eaa] transition"
        >
          Send Me a Reset Link
        </button>
        </div>

        
      </div>
    </div>
  );
};

export default ResetPassword;
