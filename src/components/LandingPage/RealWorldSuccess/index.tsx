import { useState } from 'react';
import { image } from '@/assets/image/image';

const RealWorldSuccess = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            avatar: image.avatar,
            quote: "Ingenium has become my go-to app for gaming entertainment. Whether I'm competing with friends or playing solo, the chance to win real money rewards adds an extra layer of excitement and motivation. Highly recommend!",
            name: "Jamal Samuel - HR Manager",
        },
        {
            avatar: image.avatar,
            quote: "Ingenium's seamless content creation system has made it easier for my team to collaborate and stay ahead of deadlines. I can't imagine going back to anything else!",
            name: "Sarah Lee - Project Manager",
        },
        {
            avatar: image.avatar,
            quote: "I’ve used a lot of apps, but Ingenium really stands out. It has everything we need in one place—easy to use and powerful. Highly recommend!",
            name: "John Doe - Software Engineer",
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className='py-6 bg-[#0054a6] rounded-xl overflow-hidden mt-24 lg:mt-0 lg:mx-6'>
            <div className='flex  flex-col gap-2 items-center justify-center mt-4 mr-0 mb-0 '>
                <div className='flex flex-col gap-4  items-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <span className="text-2xl lg:text-6xl font-semibold leading-[57.2px] text-[#fff] text-center lg:whitespace-nowrap">
                            Real-World Success Stories
                        </span>
                        <div className='flex justify-center items-start lg:flex-nowrap'>
                            <span className="flex w-3/4 lg:w-[697px] justify-center items-center lg:text-[20px] font-normal leading-[28px] text-[#fff] text-center">
                                Streamline your content creation and management with Ingenium.
                                Keep your educational materials up-to-date and accessible to
                                all.
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-6 items-center  justify-center mt-6'>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`w-[400px] lg:w-[918px] h-[342px] bg-[#0086f2] rounded-[28px] border-solid border-[10px] border-[rgba(255,255,255,0.2)] relative overflow-hidden  ${
                                    index !== currentTestimonial ? 'hidden' : ''
                                }`}
                            >
                                <div className='lg:w-[9.15%] h-[18.77%] bg-[url(../assets/images/9a6b9f30-e987-4c45-a77d-caa77b7a8eab.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[8.48%] left-[4.03%] z-[9]' />
                                <div className='flex w-[300px] lg:w-[690px] h-[225px] flex-col gap-[24px] items-center flex-nowrap absolute top-1/2 left-1/2 translate-x-[-51.45%] translate-y-[-54.22%] z-10'>
                                    <img src={testimonial.avatar} className="w-[60px] h-[60px] rounded-full" />
                                    <div className='flex flex-col gap-14'>
                                    <span className="flex w- lg:w-[690px] h-[77px] justify-center items-start lg:text-[18px] font-normal l text-white text-center">
                                        {testimonial.quote}
                                    </span>
                                    <span className="h-[20px] text-lg mt-4 lg:mt-0 font-semibold leading-[20px] text-[#f5f5f5] relative text-center capitalize lg:whitespace-nowrap">
                                        {testimonial.name}
                                    </span>

                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex lg:w-[132px] gap-4 cursor-pointer items-center justify-center'>
                    <button onClick={prevTestimonial} aria-label="Previous testimonial">
                        <img src={image.left_arrow} />
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial">
                        <img src={image.right_arrow} />
                    </button>
                </div>
            </div>
          
        </div>
    );
};

export default RealWorldSuccess;
