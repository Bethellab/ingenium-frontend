import { image } from "@/assets/image/image"


const Elearning = () => {
    return (
        <div id="elearning" className=' flex lg:w-[1223px] gap-[79px] items-center  lg:relative  md:mx-auto mt-10 lg:mt-32'>

            <div className='flex flex-col gap-4 items-start mx-4 '>
                <div className='flex flex-col gap-2 items-start '>
                    <div className='flex items-center gap-1  py-2 px-4  flex-nowrap bg-[#0054a6] rounded-lg'>
                        <div>
                            <img src={image.graduation_cap_icon} alt="" />
                        </div>
                        <span className="text-lg font-medium  text-[#ffc727]  text-left uppercase  ">
                            E-learning
                        </span>
                    </div>
                    <span className="flex  justify-start items-start leading-[60px] text-2xl md:text-[60px] font-medium  text-[#000] text-left ">
                        Advance Your  Knowledge
                    </span>
                    <span className="flex  justify-start items-start w-80 lg:w-full  text-md   text-[#595959]   text-left">
                        Discover a world-class platform for learning and development, trusted by leading organizations worldwide. Experience the comprehensive educational tools and resources available on Ingenium.
                    </span>
                </div>
                <div className='flex flex-col gap-10 items-start mt-8 '>
                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.video_icon} className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Course Creation
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Build engaging courses with multimedia.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.progress_icon}  className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Progress Tracking
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Monitor user completion and performance.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.cert_icon}  className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1  items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Assessment & Certification
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Evaluate and reward learning outcomes.
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 md:gap-4 md:items-start '>
                        <img src={image.interactive_icon}  className="w-10 h-10 md:w-16 md:h-16" />
                        <div className='flex flex-col gap-1 items-start'>
                            <span className="text-lg  md:text-[24px] font-bold text-[#262626] text-left md:whitespace-nowrap ">
                            Interactive Learning
                            </span>
                            <span className="text-sm md:text-[18px] text-[#595959]  text-left lg:whitespace-nowrap">
                            Forums, feedback mechanisms, and badging systems.
                            </span>
                        </div>
                    </div>




                </div>
            </div>
            <div className='w-[514px] h-[779px] shrink-0 hidden lg:block '>
                <img src={image.Elearning_img} className="rounded-lg" />
            </div>

        </div>
    )
}

export default Elearning