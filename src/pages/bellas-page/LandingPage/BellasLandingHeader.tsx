import facial from '../../../assets/image/bellasbg.png';

const BellasLandingHeader = () => {
    return (
        <div className=" bg-[#f5f1fd] ">
            <div className="py-12 relative ">
                <div className=" h-[710px] mx-auto max-w-[1550px] ">
                    <div className="flex items-start justify-between mt-24">
                        <div className="w-[600px] ">
                            <span className="block text-[18px] font-semibold text-[#5e25cc] tracking-[0.18px] mb-2">
                                Welcome to D'Bellas Glow –
                            </span>
                            <span className="flex text-[64px] font-bold leading-[72px] text-[#120728] tracking-[0.64px] mb-4">
                                Your Sanctuary for Beauty & Wellness
                            </span>
                            <span className="flex text-[18px] font-normal text-[#404245] tracking-[0.18px] mb-6">
                                Exclusive beauty clinic for you who are special. We have varieties of services that can make you more beautiful.
                            </span>
                            <button className="flex w-[182px] h-[40px] justify-center items-center bg-[#5e25cc] rounded-full text-white text-[16px] font-semibold tracking-[0.32px]">
                                Book Now
                            </button>

                        </div>


                        <div className=" flex justify-center md:justify-end mb-24">
                            <div  className="bg-[#d9caf7] p-4  rounded-bl-full rounded-br-6xl">
                            <img
                                src={facial}
                                alt="hero"
                                className=""
                            />

                            </div>
                          
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default BellasLandingHeader