import { image } from "@/assets/image/image"
import { useNavigate } from "react-router-dom"


const ChooseYourPlan = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex items-center justify-center border-b">
                <img src={image.signinlogo} className="w-36 m-4" onClick={() => navigate('/')} />
            </div>

            <div className="flex justify-center items-center mt-10 lg:mt-24">
                {/* Pricing Cards */}
                <div className="flex flex-col xl:flex-row gap-4">

                    {/* Basic Plan Card */}
                    <div className="w-full lg:w-96 py-6 px-3 bg-gray-100 h-full hover:border-4 hover:border-primary  rounded-lg shadow-lg">
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
                                <span className="text-gray-800">✔</span>
                                
                                <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Automatically free up storage space for your courses</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access on any device you use</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">30-day content protection and recovery</p>
                            </div>


                        </div>

                        <button onClick={() => navigate('/onboarding/home')}  className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                        Try for free for 30 days
                        </button>
                    </div>



                    {/* Pro Plan Card */}
                    <div className="w-full lg:w-96 py-6 px-3 bg-gray-100 h-full hover:border-4 hover:border-primary  rounded-lg shadow-lg">
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
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Automatically free up storage space for your courses</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access on any device you use</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">30-day content protection and recovery</p>
                            </div>


                        </div>

                        <button className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                        Try for free for 30 days
                        </button>
                    </div>

                    {/* Advance Plan Card */}
                    <div className="w-full lg:w-96 py-6 px-3 bg-gray-100 h-full hover:border-4 hover:border-primary  rounded-lg shadow-lg">
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
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">2,000 GB of encrypted content storage</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Automatically free up storage space for your courses</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">Access on any device you use</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-800">✔</span>
                                <p className="text-gray-800">30-day content protection and recovery</p>
                            </div>


                        </div>
                        <button className="w-full mt-8 py-2 bg-primary text-white border border-gray-300 rounded-lg font-medium text-center">
                        Try for free for 30 days
                        </button>                   </div>
                </div>


               

            </div>
            <div className="flex justify-center items-center m-5 lg:m-10">
                <button className="text-primary text-lg text-center">Skip for now</button>
            </div>
            


        </div>
    )
}

export default ChooseYourPlan