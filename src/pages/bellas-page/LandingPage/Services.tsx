import hair from '../../../assets/image/service1.png'
import manicure from '../../../assets/image/service2.png'
import facial from '../../../assets/image/service3.png'
import makeup from '../../../assets/image/service4.png'

const Services = () => {
    return (
        <div className="py-12 mx-auto max-w-[1500px]">
            <div>
                <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-lg ">SERVICES</h1>

                    <svg width="24" height="3" viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.5" x2="24" y2="1.5" stroke="#93CC25" stroke-width="3" />
                    </svg>

                    <p className="text-4xl text-center w-[600px] mt-4">We consistently deliver top-notch service just for you!</p>

                    <button className="text-[#5E25CC] flex items-center text-lg gap-2 mt-6 border-b border-b-[#5E25CC]">
                        Explore All Services
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.96197 0.1782V1.98839C6.96197 2.09119 7.00641 2.18952 7.08419 2.2588L12.6906 7.15078L0.177771 7.15078C0.0799971 7.15078 -4.29819e-09 7.23123 0 7.32956L5.86115e-08 8.67044C6.29097e-08 8.76877 0.0799971 8.84922 0.177771 8.84922H12.6906L7.08419 13.7412C7.00641 13.8082 6.96197 13.9066 6.96197 14.0116V15.8218C6.96197 15.9738 7.14196 16.0565 7.25529 15.9559L15.755 8.53859C15.8319 8.47154 15.8936 8.38865 15.9358 8.29553C15.9781 8.20241 16 8.10125 16 7.99888C16 7.89652 15.9781 7.79535 15.9358 7.70223C15.8936 7.60912 15.8319 7.52623 15.755 7.45918L7.25529 0.0441121C7.13974 -0.0564539 6.96197 0.0262337 6.96197 0.1782Z" fill="#5E25CC" />
                        </svg>

                    </button>

                </div>

                <div className='flex justify-between mt-20'>
                    <div style={{
                        backgroundImage: `url(${hair})`,

                    }} className=" flex w-[296px] h-[302px] px-8 gap-[8px] items-center  bg-cover bg-no-repeat rounded-md ">
                        <div className="flex p-[40px] gap-[8px] justify-center items-center bg-gray-100 rounded-md">
                            <span className="w-[152px] h-[40px]  text-[16px] font-semibold text-[#120728] text-center">
                                HAIR STYLING & TREATMENT
                            </span>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${manicure})`,

                    }} className=" flex w-[296px] h-[302px] px-8 gap-[8px] items-center  bg-cover bg-no-repeat rounded-md ">
                        <div className="flex p-[40px] gap-[8px] justify-center items-center bg-gray-100 rounded-md">
                            <span className="w-[152px] h-[40px]  text-[16px] font-semibold text-[#120728] text-center">
                            MANICURE & PEDICURE
                            </span>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${facial})`,

                    }} className=" flex w-[296px] h-[302px] px-8 gap-[8px] items-center  bg-cover bg-no-repeat rounded-md ">
                        <div className="flex p-[40px] gap-[8px] justify-center items-center bg-gray-100 rounded-md">
                            <span className="w-[152px] h-[40px]  text-[16px] font-semibold text-[#120728] text-center">
                            FACIAL TREATMENTS
                            </span>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${makeup})`,

                    }} className=" flex w-[296px] h-[302px] px-8 gap-[8px] items-center  bg-cover bg-no-repeat rounded-md ">
                        <div className="flex p-[40px] gap-[8px] justify-center items-center bg-gray-100 rounded-md">
                            <span className="w-[152px] h-[40px]  text-[16px] font-semibold text-[#120728] text-center">
                            MAKEUP SERVICES
                            </span>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default Services