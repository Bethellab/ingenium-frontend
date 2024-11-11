import { image } from "@/assets/image/image"


const Hiring = () => {
    return (
        <div className=' flex lg:w-[1223px] gap-[79px] items-center  lg:relative  md:mx-auto mt-8  lg:mt-24'>
            <div className='w-[514px] h-[779px] shrink-0 hidden xl:block '>
               <img src={image.hiring_img} className="rounded-lg" />
            </div>
            <div className='flex flex-col gap-4 items-start mx-4 '>
                <div className='flex flex-col gap-2 items-start '>
                    <div className='flex items-center gap-1  py-2 px-4  flex-nowrap bg-[#0054a6] rounded-lg'>
                        <div>
                           <img src={image.graduation_cap_icon} alt="" />
                        </div>
                        <span className="text-lg font-medium  text-[#ffc727]  text-left uppercase  ">
                            HIRING
                        </span>
                    </div>
                    <span className="flex  justify-start items-start text-2xl leading-[60px]  md:text-[60px] font-medium  text-[#000] text-left ">
                        Your Premium HR Solution
                    </span>
                    <span className="flex  justify-start items-start w-80 lg:w-full  text-md   text-[#595959]   text-left">
                        From customizable job postings to integrated candidate management
                        tools, Ingenium provides everything you need to attract, evaluate,
                        and hire the best talent—all in one comprehensive solution.
                    </span>
                </div>
                <div className='flex flex-col gap-10 items-start mt-8'>
                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.bag_icon} className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1  items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                                Job Posting & Role Specification
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Customizable templates and geo-targeting.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.person_box_icon} className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Candidate Application Management
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Application portal and resume parsing.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.calendar_icon} className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Interview Management
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Integrated scheduling and automated reminders.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.graph_icon} className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Analytics & Reporting
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Track hiring metrics with customizable reports.
                            </span>
                        </div>
                    </div>

                   
                   
                   
                </div>
            </div>
            
        </div>
    )
}

export default Hiring