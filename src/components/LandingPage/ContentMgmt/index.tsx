import { image } from "@/assets/image/image"


const ContentMgmt = () => {
    return (
        <div className=' flex lg:w-[1223px] gap-[79px] items-center  lg:relative mx-4 md:mx-auto mt-8  lg:mt-32'>
            <div className='w-[514px] h-[779px] shrink-0 hidden lg:block '>
               <img src={image.hiring_img} className="rounded-lg h-[700px]"  />
            </div>
            <div className='flex flex-col gap-4 items-start mx-4 '>
                <div className='flex flex-col gap-2 items-start '>
                    <div className='flex items-center gap-1  py-2 px-4  flex-nowrap bg-[#0054a6] rounded-lg'>
                        <div>
                           <img src={image.graduation_cap_icon} alt="" />
                        </div>
                        <span className="text-lg font-medium  text-[#ffc727]  text-left uppercase  ">
                            Content Mangement
                        </span>
                    </div>
                    <span className="flex  justify-start items-start text-2xl  md:text-[60px] leading-[60px] font-medium  text-[#000] text-left ">
                    Content at Your Fingertips
                    </span>
                    <span className="flex  justify-start items-start w-80 lg:w-full  text-md   text-[#595959]   text-left">
                    Transform your educational resources with Ingenium's robust content management system. Centralize your materials, streamline content creation, and manage user access effortlessly, all while ensuring your resources remain current and impactful.
                    </span>
                </div>
                <div className='flex flex-col gap-10 items-start mt-8'>
                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.bag_icon} className="w-10 md:w-16" />
                        <div className='flex flex-col gap-1  items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Centralized Library
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Searchable repository for educational materials.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.person_box_icon} className="w-10 md:w-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Content Creation & Review
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Authoring tools and review workflows.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.calendar_icon} className="w-10 md:w-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            User Access Control
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Manage permissions and sharing options.
                            </span>
                        </div>
                    </div>

                    
                

                   
                   
                   
                </div>
            </div>
            
        </div>
    )
}

export default ContentMgmt