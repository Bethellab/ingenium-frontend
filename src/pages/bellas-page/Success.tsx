import time from '../../assets/image/time.png'


const Success = () => {
    return (
        <div className="  bg-gray-50 py-8 px-6 w-full lg:px-24 flex justify-center items-center">
            <div className="  bg-white rounded-[16px] w-[900px]  overflow-hidden p-10">
                <div className="flex flex-col gap-[32px] items-center ">
                    <img src={time} className='w-44' />
                    <div className="flex flex-col gap-[12px] items-center">
                        <span className="text-[40px] font-bold text-[#191515] text-center">
                            Your Appointment has been booked successfully
                        </span>
                        <div className="text-[16px] font-normal text-[#404245] text-center">
                            <span>Thank you for your booking! We've sent all the details to your email provided at </span>
                            <span className="font-semibold">johndoe@gmail.com</span>
                            <span>. We can't wait to welcome you to our Spa & Salon soon!</span>
                        </div>
                    </div>
                </div>
                <button className="w-[324px] h-[40px] bg-[#5e25cc] rounded-[96px] flex justify-center items-center mt-[48px] mx-auto">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.25C5.91421 0.25 6.25 0.585786 6.25 1V5C6.25 5.41421 5.91421 5.75 5.5 5.75C5.08579 5.75 4.75 5.41421 4.75 5V3.75H3.5C3.16848 3.75 2.85054 3.8817 2.61612 4.11612C2.3817 4.35054 2.25 4.66848 2.25 5V8.25H18.75V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75H17C16.5858 3.75 16.25 3.41421 16.25 3C16.25 2.58579 16.5858 2.25 17 2.25H17.5C18.2293 2.25 18.9288 2.53973 19.4445 3.05546C19.9603 3.57118 20.25 4.27065 20.25 5V18C20.25 18.7293 19.9603 19.4288 19.4445 19.9445C18.9288 20.4603 18.2293 20.75 17.5 20.75H3.5C2.77065 20.75 2.07118 20.4603 1.55546 19.9445C1.03973 19.4288 0.75 18.7293 0.75 18V5C0.75 4.27065 1.03973 3.57118 1.55546 3.05546C2.07118 2.53973 2.77065 2.25 3.5 2.25H4.75V1C4.75 0.585786 5.08579 0.25 5.5 0.25ZM18.75 9.75H2.25V18C2.25 18.3315 2.3817 18.6495 2.61612 18.8839C2.85054 19.1183 3.16848 19.25 3.5 19.25H17.5C17.8315 19.25 18.1495 19.1183 18.3839 18.8839C18.6183 18.6495 18.75 18.3315 18.75 18V9.75ZM13.5 0.25C13.9142 0.25 14.25 0.585786 14.25 1V5C14.25 5.41421 13.9142 5.75 13.5 5.75C13.0858 5.75 12.75 5.41421 12.75 5V3.75H9C8.58579 3.75 8.25 3.41421 8.25 3C8.25 2.58579 8.58579 2.25 9 2.25H12.75V1C12.75 0.585786 13.0858 0.25 13.5 0.25Z" fill="#F9F9F9" />
                    </svg>

                    <span className="text-[16px] font-semibold text-white ml-[16px]">
                        Add to your Calendar
                    </span>
                </button>
            </div>


        </div>
    )
}

export default Success