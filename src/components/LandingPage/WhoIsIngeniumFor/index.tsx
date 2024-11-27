import { image } from "@/assets/image/image"


const WhoIsIngeniumFor = () => {
    return (
        <div>
            <div className='flex flex-col gap-10 items-center mt-24 w-full'>
                <div className='flex flex-col gap-4 items-center '>
                    <span className="text-3xl lg:text-[60px] font-medium  text-center whitespace-nowrap ">
                        Who is Ingenium For?
                    </span>
                    <span className="text-lg lg:text-[20px] font-normal text-gray-600 text-center">
                        Reach your learning goals faster with unlimited access to all courses
                    </span>
                </div>
                <div className='flex flex-col gap-6  '>
                    <div className='flex flex-col  xl:flex-row justify-between items-center gap-6'>
                        <div className='flex  p-[18px] flex-col gap-4 items-start  bg-[#fff] rounded-xl  '>
                            <img src={image.bag_icon} className="w-14"  />
                            <div className='flex flex-col gap-2 items-start '>
                                <span className=" text-lg font-bold  text-[#262626]  text-left whitespace-nowrap ">
                                    HR Managers & Recruiters
                                </span>
                                <span className=" lg:w-[400px] text-sm text-gray-600  text-left ">
                                    Efficiently manage your hiring process, from job postings to
                                    candidate interviews, all in one place.
                                </span>
                            </div>
                        </div>
                        <div className='flex  p-[18px] flex-col gap-4 items-start  bg-[#fff] rounded-xl '>
                            <img src={image.bag_icon} className="w-14"  />
                            <div className='flex flex-col gap-2 items-start '>
                                <span className=" text-lg font-bold  text-[#262626]  text-left whitespace-nowrap ">
                                    Job Seekers & Professionals
                                </span>
                                <span className="lg:w-[400px]  text-sm text-gray-600  text-left ">
                                Take control of your career with access to expert-led courses, certifications, and job opportunities.
                                </span>
                            </div>
                        </div>
                        <div className='flex  p-[18px] flex-col gap-4 items-start  bg-[#fff] rounded-xl '>
                            <img src={image.bag_icon} className="w-14"  />
                            <div className='flex flex-col gap-2 items-start '>
                                <span className=" text-lg font-bold  text-[#262626]  text-left whitespace-nowrap ">
                                    Job Seekers & Professionals
                                </span>
                                <span className="lg:w-[400px]  text-sm text-gray-600  text-left ">
                                Take control of your career with access to expert-led courses, certifications, and job opportunities.
                                </span>
                            </div>
                        </div>
                       

                       
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 justify-center items-center  '>
                        <div className='flex  p-[18px] flex-col gap-4 items-start  bg-[#fff] rounded-xl '>
                             <img src={image.bag_icon} className="w-14"  />
                            <div className='flex flex-col gap-2 items-start'>
                                <span className="text-lg font-bold  text-[#262626]  text-left whitespace-nowrap ">
                                    Companies & Teams
                                </span>
                                <span className=" lg:w-[420px]  text-sm  text-[#595959]  text-left ">
                                    Provide your team with powerful recruitment and e-learning tools
                                    to drive productivity and growth.
                                </span>
                            </div>
                        </div>
                        <div className='flex  p-[18px] flex-col gap-4 items-start  bg-[#fff] rounded-xl '>
                             <img src={image.bag_icon} className="w-14"  />
                            <div className='flex flex-col gap-2 items-start'>
                                <span className="text-lg font-bold  text-[#262626]  text-left whitespace-nowrap ">
                                    Companies & Teams
                                </span>
                                <span className=" lg:w-[420px]  text-sm  text-[#595959]  text-left ">
                                    Provide your team with powerful recruitment and e-learning tools
                                    to drive productivity and growth.
                                </span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoIsIngeniumFor