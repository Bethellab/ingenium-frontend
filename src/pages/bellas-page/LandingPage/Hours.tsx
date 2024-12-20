

const Hours = () => {
    return (
        <div className="bg-white">
            <div className="py-12 max-w-[1500px] mx-auto ">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl ">Our Hours of Operation</h1>
                <button className="bg-black rounded-full py-3 px-3 text-white w-64">Explore Our Services</button>
            </div>

            <div className=" bg-[#120728] p-10 rounded-full mt-10 flex flex-col items-center justify-center w-full gap-8 ">
                <svg width="1065" height="22" viewBox="0 0 1065 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333333 11C0.333333 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333334 11 0.333333C5.10896 0.333333 0.333334 5.10896 0.333333 11ZM1043.33 11.0001C1043.33 16.8911 1048.11 21.6668 1054 21.6668C1059.89 21.6668 1064.67 16.8911 1064.67 11.0001C1064.67 5.10905 1059.89 0.333425 1054 0.333424C1048.11 0.333424 1043.33 5.10905 1043.33 11.0001ZM11 13L1054 13.0001L1054 9.00009L11 9L11 13Z" fill="#DED3F4" />
                    <circle cx="220" cy="11" r="11" fill="#DED3F4" />
                    <circle cx="429" cy="11" r="11" fill="#DED3F4" />
                    <circle cx="637" cy="11" r="11" fill="#DED3F4" />
                    <circle cx="846" cy="11" r="11" fill="#DED3F4" />
                </svg>


                <div className="flex   items-center justify-between gap-12 ">
                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Monday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">09:00 AM - 08:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Tuesday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">09:00 AM - 08:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Wednesday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">09:00 AM - 05:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Thursday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">09:00 AM - 08:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Friday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">09:00 AM - 05:00 PM</span>
                    </div>

                    <div className="flex flex-col gap-[10px] items-center">
                        <span className="text-[24px] font-bold text-[#fff] text-center">Saturday</span>
                        <span className="text-[16px] font-semibold text-[#93cc25] text-center">10:30 AM - 10:00 PM</span>
                    </div>
                </div>
            </div>


        </div>

        </div>
        
    )
}

export default Hours