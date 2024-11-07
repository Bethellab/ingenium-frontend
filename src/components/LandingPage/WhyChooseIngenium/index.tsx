import { image } from "@/assets/image/image"


const WhyChooseIngenium = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-6 mt-10">

                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900">
                        Why Choose Ingenium?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                        Reach your learning goals faster with unlimited access to all courses
                    </p>
                </div>


                <div className="flex flex-col md:flex-row  gap-6 justify-center items-start w-full">

                    <div className="flex flex-col items-start gap-4 p-4 shadow-sm lg:max-w-xs">
                        <img src={image.streamline_hiring_icon}  className="w-14 h-14" />
                        <h3 className="text-lg font-semibold text-gray-800">
                            Streamline hiring processes.
                        </h3>
                        <p className="text-sm text-gray-600">
                            Simplify your recruitment efforts to quickly find and onboard top talent with ease.
                        </p>
                    </div>


                    <div className="flex flex-col items-start gap-3 p-4 shadow-sm lg:max-w-xs">
                       <img src={image.user_eng_icon}  className="w-14 h-14" />
                        <h3 className="text-lg font-semibold text-gray-800">
                            Enhance employee training and development.
                        </h3>
                        <p className="text-sm text-gray-600">
                            Boost your team's skills through improved training programs and personalized development plans.
                        </p>
                    </div>


                    <div className="flex flex-col items-start gap-3 p-4  shadow-sm lg:max-w-xs">
                        <img src={image.grad_cap_icon}  className="w-14 h-14" />
                        <h3 className="text-lg font-semibold text-gray-800">
                            Efficiently manage educational content.
                        </h3>
                        <p className="text-sm text-gray-600">
                            Organize and distribute learning materials effectively for easy access and updates.
                        </p>
                    </div>


                    <div className="flex flex-col items-start gap-4 p-4  shadow-sm lg:max-w-xs">
                        <img src={image.users_icon}  className="w-14 h-14" />
                        <h3 className="text-lg font-semibold text-gray-800">
                            Global accessibility for all users.
                        </h3>
                        <p className="text-sm text-gray-600">
                            Ensure everyone can connect and collaborate from anywhere in the world without barriers.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChooseIngenium