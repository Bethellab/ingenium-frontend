import { image } from "@/assets/image/image"
import header_bg from "../../../assets/image/header_bg.png"

const Header = () => {
    return (
        <div className="bg-no-repeat bg-center w-full  h-[45vh] lg:h-[89vh] xl:h-[108vh]  lg:-mt-16  " style={{ backgroundImage: `url(${header_bg})`, }}>
            <div className="flex justify-center items-center">
                <div className="md:mt-44">
                    <div className=' flex lg:w-[752px] flex-col gap-4 items-center '>
                        <div className='flex flex-col md:gap-2 items-center  '>
                            <div className="flex items-center flex-col">
                                <div className="   text-center ">
                                    <span className="text-4xl md:text-[72px] font-medium md:leading-[80px] text-[#1f1f1f]  text-center">
                                        Unlock Your Team’s Potential with
                                    </span>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    {/* The ring image */}
                                    <img
                                        src={image.ring}
                                        className="absolute w-[700px] h-[700px] object-contain"
                                        alt="ring"
                                    />

                                    {/* The text */}
                                    <span className="relative z-10 text-4xl md:text-[72px] font-medium leading-[80px] text-primary text-center">
                                        Ingenium
                                    </span>
                                </div>



                            </div>

                            <span className="text-xl lg:text-lg font-normal leading-[24px] text-gray-600  relative text-center md:whitespace-nowrap z-[3]">
                                A versatile platform for hiring, e-learning, and content management.
                            </span>
                        </div>

                        <button className="bg-primary w-40 py-4 px-2 rounded-full text-white">Get Started Today</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header