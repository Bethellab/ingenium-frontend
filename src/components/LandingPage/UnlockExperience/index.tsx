

const UnlockExperience = () => {
    return (
        <div>
            <div className=' flex flex-col gap-4 items-center lg:mt-16'>
                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900">
                        Unlock the full experience
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 lg:max-w-lg lg:whitespace-nowrap">
                        Reach your learning goals faster with unlimited access to all courses
                    </p>
                </div>
                {/* Pricing Cards */}
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Basic Plan Card */}
                    <div className="lg:w-96 p-6 bg-white rounded-lg shadow-lg">
                        <div className="mb-8">
                            <button className="bg-gray-200 text-sm font-semibold py-2 px-4 rounded-lg">
                                BASIC
                            </button>
                            <p className="text-gray-700 mt-4">
                                For individuals and starters who want to begin with domaining.
                            </p>
                            <h2 className="text-6xl font-semibold text-black mt-6">$0</h2>
                            <p className="text-gray-500">Per member, per Month</p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 text-white">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            {/* Add more features here */}
                        </div>

                        <button className="w-full mt-8 py-2 bg-gray-100 border border-gray-300 rounded-lg font-medium text-center">
                            Start for free
                        </button>
                    </div>

                    {/* Pro Plan Card */}
                    <div className="lg:w-96 p-6 bg-blue-600 text-white rounded-lg shadow-lg border-2 border-blue-800">
                        <div className="mb-8">
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
                       <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white">✔</span>
                                <p className="text-white">Access to All Features</p>
                            </div>
                          
                            {/* Add more features here */}
                        </div>

                        <button className="w-full mt-8 py-2 bg-[#001B30] rounded-lg font-medium text-center">
                            Continue with Pro 
                        </button>
                    </div>

                      {/* Advance Plan Card */}
                      <div className="lg:w-96 p-6 bg-white rounded-lg shadow-lg">
                        <div className="mb-8">
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
                      <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access to All Features</p>
                            </div>
                            {/* Add more features here */}
                        </div>
                        <button className="w-full mt-8 py-2 bg-gray-100 border border-gray-300 rounded-lg font-medium text-center">
                            Start for free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnlockExperience