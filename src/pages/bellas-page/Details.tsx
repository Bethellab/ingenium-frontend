import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gallery_one from '../../assets/image/gallery_one.png'
import gallery_two from '../../assets/image/gallery_two.png'
import gallery_three from '../../assets/image/gallery_three.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Details = () => {

    const [selectedCard, setSelectedCard] = useState("Hydrating Facial");
    const [modalStep, setModalStep] = useState("booking");

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isReviewingOrder, setIsReviewingOrder] = useState(false);

    const navigate = useNavigate()

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalStep("booking");
    };

    const handleReviewOrder = () => {
        setModalStep("orderSummary");
    };


    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const { state } = useLocation();
    // const { id } = useParams();

    if (!state) {
        return <div>Service not found</div>;
    }

    const { title, price, image } = state;



    const services = [
        {
            id: "hydrating",
            title: "Hydrating Facial",
            description:
                "Ideal for dry and sensitive skin, this facial infuses deep moisture to leave skin soft and supple.",
            price: "₦3,000",
            duration: "~ 20 Mins",
        },
        {
            id: "anti-aging",
            title: "Anti-Aging Facial",
            description:
                "Reduces the appearance of fine lines and wrinkles with a collagen boost.",
            price: "₦5,500",
            duration: "~ 45 Mins",
        },
        {
            id: "deep-cleansing",
            title: "Deep Cleansing Facial",
            description:
                "Purifies the skin by removing impurities and unclogging pores, great for oily or acne-prone skin.",
            price: "₦10,000",
            duration: "~ 30 Mins",
        },
        {
            id: "brightening",
            title: "Brightening Facial",
            description:
                "Evens out skin tone and enhances radiance with vitamin C infusion.",
            price: "₦7,500",
            duration: "~ 15 Mins",
        },
    ];

    const reviews = [
        {
            name: "Charlie Ernser",
            rating: 5,
            feedback: "My skin felt so refreshed! The atmosphere was peaceful, and the staff were very professional.",
            image: gallery_one,
        },
        {
            name: "Jane Doe",
            rating: 5,
            feedback: "The spa treatment was incredibly relaxing, and I felt rejuvenated afterwards.",
            image: gallery_one,
        },
        {
            name: "John Smith",
            rating: 5,
            feedback: "The massage was just what I needed to unwind and destress.",
            image: gallery_one,
        },
        {
            name: "Emily Davis",
            rating: 5,
            feedback: "I enjoyed the calming music and soothing scents during my appointment.",
            image: gallery_one,
        },
        {
            name: "Emily Davis",
            rating: 5,
            feedback: "The facial was so invigorating, and my skin feels amazing now.",
            image: gallery_one,
        },
    ];

    const profiles = [
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
        {
            name: "Mia Rose",
            role: "Makeup Artist",
            rating: "4.8",
            image: gallery_three,
        },
    ]// Add more profiles as needed

    return (

        <div className=" ">
            <div className="  bg-gray-50 py-12 px-6 w-full lg:px-24">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    <img
                        src={image}
                        alt={title}
                        className="w-full lg:w-[700px] h-[400px] lg:h-[800px] rounded-lg object-cover"
                    />

                    <div className="lg:my-1 flex-1 w-[508px]">
                        <h1 className="text-4xl font-bold mb-6 font-['Cormorant_Garamond']">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Rejuvenate and pamper your skin with our luxurious facial treatments,
                            customized to address hydration, anti-aging, and deep cleansing needs.
                            Experience a refreshed, glowing complexion in a relaxing environment
                            designed for ultimate comfort.
                        </p>

                        <div className="flex items-center justify-between border-t border-b py-4 px-6">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 16 15" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.99995 14.6667C9.76806 14.6667 11.4638 13.9643 12.714 12.7141C13.9642 11.4638 14.6666 9.76812 14.6666 8.00001C14.6666 6.2319 13.9642 4.53621 12.714 3.28596C11.4638 2.03572 9.76806 1.33334 7.99995 1.33334C6.23184 1.33334 4.53615 2.03572 3.2859 3.28596C2.03566 4.53621 1.33328 6.2319 1.33328 8.00001C1.33328 9.76812 2.03566 11.4638 3.2859 12.7141C4.53615 13.9643 6.23184 14.6667 7.99995 14.6667ZM8.83328 4.66668C8.83328 4.44566 8.74548 4.2337 8.5892 4.07742C8.43292 3.92114 8.22096 3.83334 7.99995 3.83334C7.77893 3.83334 7.56697 3.92114 7.41069 4.07742C7.25441 4.2337 7.16662 4.44566 7.16662 4.66668V7.79168C7.16662 8.36668 7.63328 8.83334 8.20828 8.83334H10.4999C10.721 8.83334 10.9329 8.74555 11.0892 8.58926C11.2455 8.43298 11.3333 8.22102 11.3333 8.00001C11.3333 7.779 11.2455 7.56703 11.0892 7.41075C10.9329 7.25447 10.721 7.16668 10.4999 7.16668H8.83328V4.66668Z"
                                        fill="#797979"
                                    />
                                </svg>
                                <span className="text-sm">30 - 90 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87499 4.01252V3.16669C4.87499 2.33789 5.20423 1.54303 5.79028 0.956978C6.37633 0.370927 7.17119 0.041687 7.99999 0.041687C8.82879 0.041687 9.62365 0.370927 10.2097 0.956978C10.7957 1.54303 11.125 2.33789 11.125 3.16669V4.01252C12.1975 4.04502 12.8542 4.16002 13.355 4.57585C14.0492 5.15252 14.2325 6.12752 14.5983 8.07835L15.2233 11.4117C15.7375 14.155 15.9942 15.5267 15.245 16.43C14.495 17.3334 13.0992 17.3334 10.3083 17.3334H5.69166C2.89999 17.3334 1.50499 17.3334 0.754989 16.43C0.00498942 15.5267 0.263323 14.155 0.776656 11.4117L1.40166 8.07835C1.76832 6.12835 1.95082 5.15252 2.64499 4.57585C3.14582 4.16002 3.80249 4.04502 4.87499 4.01252ZM6.12499 3.16669C6.12499 2.66941 6.32253 2.19249 6.67416 1.84086C7.02579 1.48923 7.50271 1.29169 7.99999 1.29169C8.49727 1.29169 8.97418 1.48923 9.32581 1.84086C9.67744 2.19249 9.87499 2.66941 9.87499 3.16669V4.00002H6.12499V3.16669ZM11.1167 8.06419C11.1032 7.9832 11.0739 7.90567 11.0305 7.836C10.9871 7.76633 10.9303 7.7059 10.8636 7.65816C10.7968 7.61041 10.7212 7.57629 10.6413 7.55774C10.5613 7.53918 10.4785 7.53656 10.3975 7.55002C10.3165 7.56348 10.239 7.59276 10.1693 7.63619C10.0996 7.67961 10.0392 7.73633 9.99146 7.80311C9.94372 7.8699 9.90959 7.94543 9.89104 8.02539C9.87248 8.10536 9.86986 8.1882 9.88332 8.26919L10.7167 13.2692C10.7301 13.3502 10.7594 13.4277 10.8028 13.4974C10.8462 13.567 10.903 13.6275 10.9698 13.6752C11.0365 13.723 11.1121 13.7571 11.192 13.7756C11.272 13.7942 11.3548 13.7968 11.4358 13.7834C11.5168 13.7699 11.5943 13.7406 11.664 13.6972C11.7337 13.6538 11.7941 13.597 11.8418 13.5303C11.8896 13.4635 11.9237 13.3879 11.9423 13.308C11.9608 13.228 11.9634 13.1452 11.95 13.0642L11.1167 8.06419ZM5.60249 7.55002C5.52151 7.53654 5.43866 7.53915 5.35868 7.5577C5.27871 7.57625 5.20317 7.61037 5.13639 7.65811C5.0696 7.70586 5.01288 7.7663 4.96946 7.83597C4.92604 7.90565 4.89677 7.9832 4.88332 8.06419L4.04999 13.0642C4.03653 13.1452 4.03915 13.228 4.0577 13.308C4.07626 13.3879 4.11038 13.4635 4.15813 13.5303C4.20587 13.597 4.2663 13.6538 4.33597 13.6972C4.40564 13.7406 4.48317 13.7699 4.56416 13.7834C4.64514 13.7968 4.72798 13.7942 4.80795 13.7756C4.88791 13.7571 4.96345 13.723 5.03023 13.6752C5.09701 13.6275 5.15373 13.567 5.19716 13.4974C5.24058 13.4277 5.26986 13.3502 5.28332 13.2692L6.11666 8.26919C6.13013 8.1882 6.12752 8.10536 6.10898 8.02538C6.09043 7.94541 6.05631 7.86987 6.00856 7.80308C5.96081 7.7363 5.90037 7.67958 5.8307 7.63616C5.76103 7.59273 5.68348 7.56346 5.60249 7.55002Z" fill="#797979" />
                                </svg>

                                <span className="text-sm">400+ Orders</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00008 13.3917L14.1501 16.5L12.7834 10.6417L17.3334 6.70002L11.3417 6.19169L9.00008 0.666687L6.65841 6.19169L0.666748 6.70002L5.21675 10.6417L3.85008 16.5L9.00008 13.3917Z" fill="#93CC25" />
                                </svg>

                                <span className="text-sm">
                                    4.9 <span className="text-gray-600">(230 Reviews)</span>
                                </span>
                            </div>
                        </div>


                        <div className="my-8">
                            <h2 className="text-lg font-medium mb-4">Service Options</h2>
                            <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
                                {services.map((service) => (
                                    <label
                                        key={service.id}
                                        className={`flex flex-col gap-4 p-4 w-full rounded-lg border ${selectedCard === service.title
                                            ? "bg-[#ded3f4] border-[#5e25cc]"
                                            : "bg-white border-gray-300"
                                            } cursor-pointer shadow-md transition-all duration-300`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service.title}
                                                checked={selectedCard === service.title}
                                                onChange={() => setSelectedCard(service.title)}
                                                className="appearance-none w-4 h-4 rounded-full border border-gray-400 checked:border-[#5e25cc] focus:ring-2 focus:ring-[#5e25cc] cursor-pointer"
                                            />
                                            <span className="text-lg font-bold text-gray-800">
                                                {service.title}
                                            </span>
                                        </div>
                                        <span className="text-sm text-gray-600">{service.description}</span>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">
                                                {service.price}
                                            </span>
                                            <span className="text-sm text-gray-500">{service.duration}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>


                        <div className="text-center">
                            <button onClick={toggleModal} className="bg-[#5e25cc] w-full  rounded-full py-2 text-white text-lg font-semibold">
                                Book Service - {price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 px-6 w-full lg:px-24">
                <div className="mt-6">
                    <h1 className="text-2xl font-['Cormorant_Garamond'] my-2">Service Gallery</h1>
                    <div className="flex flex-wrap gap-4">
                        <img src={gallery_one} alt="Gallery One" className="w-full md:w-1/2  object-cover" />
                        <div className="flex flex-col flex-1 gap-4 my-2">
                            <img src={gallery_two} alt="Gallery Two" className="w-full h-auto object-cover" />
                            <img src={gallery_three} alt="Gallery Three" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 px-6 w-full lg:px-24">
                <h1 className="text-2xl font-['Cormorant_Garamond'] my-2">Customer Reviews</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex w-[568px] pt-2 pb-2 gap-4 items-start"
                        >
                            <img src={review.image} className="w-10 h-10 rounded-full" alt={review.name} />
                            <div className="flex flex-col gap-2 items-start grow">
                                <div className="flex flex-col gap-2 items-start">
                                    <span className="text-lg font-bold font-['Cormorant_Garamond']">{review.name}</span>
                                    <div className="flex gap-2">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <svg
                                                key={i}
                                                width="18"
                                                height="17"
                                                viewBox="0 0 20 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
                                                    fill="#93CC25"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="w-[496px] text-md text-[#404245]">
                                    {review.feedback}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Overlay */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleModal}
                ></div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed overflow-y-scroll top-0 right-0 w-full max-w-[570px] h-full bg-white shadow-lg z-50">
                    <div className="py-4 mx-6">
                        {/* Header */}
                        <div className="flex justify-between border-b py-2 px-2">
                            <h1 className="text-lg font-semibold text-gray-700">
                                {modalStep === "booking" ? "Booking Schedule" : "Order Summary"}
                            </h1>
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={toggleModal}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.99998 7.11599L15.6 0.515991L17.4853 2.40132L10.8853 9.00132L17.4853 15.6013L15.5986 17.4867L8.99865 10.8867L2.39998 17.4867L0.514648 15.6L7.11465 8.99999L0.514648 2.39999L2.39998 0.517324L8.99998 7.11599Z"
                                        fill="#191616"
                                    />
                                </svg>
                            </button>
                        </div>

                        {modalStep === "booking" && (
                            <>
                                {/* User Details */}
                                <div className="py-2 border-b px-2">
                                    <h1 className="text-lg font-medium text-gray-800">User Details</h1>
                                    <div className="flex  gap-4 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm text-gray-600">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="E.g., John Doe"
                                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm text-gray-600">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="E.g., johndoe@gmail.com"
                                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2 my-4">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">Create an account for me</span>
                                    </div>
                                </div>

                                {/* Add-Ons */}
                                <div className="py-2 border-b px-2">
                                    <h1 className="text-lg font-medium text-gray-800">Add-Ons (Optional)</h1>
                                    <div className="mt-4 space-y-4">
                                        {[
                                            { name: "Aromatherapy", price: "#3000" },
                                            { name: "Hand Massage", price: "#2500" },
                                            { name: "Eye Treatment", price: "#5000" },
                                        ].map((addon, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between py-2  "
                                            >
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <span className="text-sm text-gray-700">{addon.name}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-600">
                                                    {addon.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="py-4 px-2 space-y-2 border-b w-ful  ">
                                    <h1>Booking Your Seat</h1>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        className="react-calendar !border-none rounded-md  !text-gray-600  !w-[800px]"
                                    />

                                </div>
                                <div className="py-6 px-2 space-y-4 border-b  ">
                                    <h1>Appointment Time</h1>
                                    <div className="flex gap-[22px] items-center flex-wrap ">
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">09:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">10:00 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">10:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">11:00 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">11:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">12:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#ded3f4] rounded-[40px] border-none">
                                            <span className="text-sm text-[#5e25cc]">12:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-[16px] font-semibold text-[#797979]">01:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">01:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">02:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">02:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">03:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">03:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">04:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">04:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">05:00 PM</span>
                                        </button>
                                    </div>


                                </div>

                                {/* Select a Specialist */}
                                <div className="py-6 px-2">
                                    <h1 className="text-lg font-medium text-gray-800">Select a Specialist</h1>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                        {profiles.map((profile, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center bg-gray-50 rounded-md border border-gray-200 p-4 transition"
                                            >
                                                <img
                                                    src={profile.image}
                                                    alt={profile.name}
                                                    className="w-16 h-16 rounded-full"
                                                />
                                                <span className="block text-lg font-bold text-gray-800 mt-3">
                                                    {profile.name}
                                                </span>
                                                <span className="block text-sm text-gray-600 mt-1">
                                                    {profile.role}
                                                </span>
                                                <div className="flex items-center gap-1 mt-4">
                                                    <svg
                                                        width="14"
                                                        height="13"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.00016 10.5134L11.1202 13L10.0268 8.31337L13.6668 5.16004L8.8735 4.75337L7.00016 0.333374L5.12683 4.75337L0.333496 5.16004L3.9735 8.31337L2.88016 13L7.00016 10.5134Z"
                                                            fill="#93CC25"
                                                        />
                                                    </svg>
                                                    <span className="text-sm font-bold text-gray-700">
                                                        {profile.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center mt-10">
                                    <button onClick={handleReviewOrder} className="bg-[#5e25cc] w-full  rounded-full py-2 text-white">
                                        Review Order
                                    </button>
                                </div>
                            </>
                        )}

                        {/* {!isReviewingOrder ? (
                            <>
                              
                                <div className="py-2 border-b px-2">
                                    <h1 className="text-lg font-medium text-gray-800">User Details</h1>
                                    <div className="flex  gap-4 mt-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm text-gray-600">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="E.g., John Doe"
                                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm text-gray-600">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="E.g., johndoe@gmail.com"
                                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2 my-4">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">Create an account for me</span>
                                    </div>
                                </div>

                              
                                <div className="py-2 border-b px-2">
                                    <h1 className="text-lg font-medium text-gray-800">Add-Ons (Optional)</h1>
                                    <div className="mt-4 space-y-4">
                                        {[
                                            { name: "Aromatherapy", price: "#3000" },
                                            { name: "Hand Massage", price: "#2500" },
                                            { name: "Eye Treatment", price: "#5000" },
                                        ].map((addon, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between py-2  "
                                            >
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="checkbox"
                                                        className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <span className="text-sm text-gray-700">{addon.name}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-600">
                                                    {addon.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="py-4 px-2 space-y-2 border-b w-ful  ">
                                    <h1>Booking Your Seat</h1>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        className="react-calendar !border-none rounded-md  !text-gray-600  !w-[800px]"
                                    />

                                </div>
                                <div className="py-6 px-2 space-y-4 border-b  ">
                                    <h1>Appointment Time</h1>
                                    <div className="flex gap-[22px] items-center flex-wrap ">
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">09:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">10:00 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">10:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">11:00 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">11:30 AM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">12:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#ded3f4] rounded-[40px] border-none">
                                            <span className="text-sm text-[#5e25cc]">12:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-[16px] font-semibold text-[#797979]">01:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">01:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">02:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">02:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">03:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#eaeaea] opacity-50 rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">03:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">04:00 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">04:30 PM</span>
                                        </button>
                                        <button className="flex w-[104px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#f7f7f7] rounded-[40px] border-none">
                                            <span className="text-sm text-[#404245]">05:00 PM</span>
                                        </button>
                                    </div>


                                </div>

                               
                                <div className="py-6 px-2">
                                    <h1 className="text-lg font-medium text-gray-800">Select a Specialist</h1>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                        {profiles.map((profile, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center bg-gray-50 rounded-md border border-gray-200 p-4 transition"
                                            >
                                                <img
                                                    src={profile.image}
                                                    alt={profile.name}
                                                    className="w-16 h-16 rounded-full"
                                                />
                                                <span className="block text-lg font-bold text-gray-800 mt-3">
                                                    {profile.name}
                                                </span>
                                                <span className="block text-sm text-gray-600 mt-1">
                                                    {profile.role}
                                                </span>
                                                <div className="flex items-center gap-1 mt-4">
                                                    <svg
                                                        width="14"
                                                        height="13"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.00016 10.5134L11.1202 13L10.0268 8.31337L13.6668 5.16004L8.8735 4.75337L7.00016 0.333374L5.12683 4.75337L0.333496 5.16004L3.9735 8.31337L2.88016 13L7.00016 10.5134Z"
                                                            fill="#93CC25"
                                                        />
                                                    </svg>
                                                    <span className="text-sm font-bold text-gray-700">
                                                        {profile.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center mt-10">
                                    <button onClick={handleReviewOrder} className="bg-[#5e25cc] w-full  rounded-full py-2 text-white">
                                        Review Order
                                    </button>
                                </div>
                            </>

                        ) : (
                            <>
                                <div className="py-2 px-2">
                                   <div className="py-4 flex items-start gap-4">
                                     <img src={image} className="w-28 rounded-lg" />
                                     <div>
                                         <h1 className="text-xl">{title}</h1>
                                     </div>
                                   </div>
                                </div>
                            </>
                        )} */}

                        {modalStep === "orderSummary" && (
                            <>
                                <div className="py-2 px-2">
                                    <div className="py-4 flex items-start gap-4 border-b">
                                        <img src={image} className="w-28 rounded-lg" />
                                        <div className="space-y-2">
                                            <h1 className="text-xl">{title}</h1>
                                            <p className="text-gray-600 text-sm">Rejuvenate your skin with our luxurious facial treatments, tailored for hydration, anti-aging, or deep cleansing.</p>
                                            <div className="flex items-center gap-8 ">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 16 15" fill="none">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M7.99995 14.6667C9.76806 14.6667 11.4638 13.9643 12.714 12.7141C13.9642 11.4638 14.6666 9.76812 14.6666 8.00001C14.6666 6.2319 13.9642 4.53621 12.714 3.28596C11.4638 2.03572 9.76806 1.33334 7.99995 1.33334C6.23184 1.33334 4.53615 2.03572 3.2859 3.28596C2.03566 4.53621 1.33328 6.2319 1.33328 8.00001C1.33328 9.76812 2.03566 11.4638 3.2859 12.7141C4.53615 13.9643 6.23184 14.6667 7.99995 14.6667ZM8.83328 4.66668C8.83328 4.44566 8.74548 4.2337 8.5892 4.07742C8.43292 3.92114 8.22096 3.83334 7.99995 3.83334C7.77893 3.83334 7.56697 3.92114 7.41069 4.07742C7.25441 4.2337 7.16662 4.44566 7.16662 4.66668V7.79168C7.16662 8.36668 7.63328 8.83334 8.20828 8.83334H10.4999C10.721 8.83334 10.9329 8.74555 11.0892 8.58926C11.2455 8.43298 11.3333 8.22102 11.3333 8.00001C11.3333 7.779 11.2455 7.56703 11.0892 7.41075C10.9329 7.25447 10.721 7.16668 10.4999 7.16668H8.83328V4.66668Z"
                                                            fill="#797979"
                                                        />
                                                    </svg>
                                                    <span className="text-sm">30 - 90 minutes</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.00008 13.3917L14.1501 16.5L12.7834 10.6417L17.3334 6.70002L11.3417 6.19169L9.00008 0.666687L6.65841 6.19169L0.666748 6.70002L5.21675 10.6417L3.85008 16.5L9.00008 13.3917Z" fill="#93CC25" />
                                                    </svg>

                                                    <span className="text-sm">
                                                        4.9 <span className="text-gray-600">(230 Reviews)</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                    <div className="py-4  border-b">
                                        <div className="flex justify-between items-center">
                                            <h1>Booking Information</h1>
                                            <span className="text-[#5E25CC] underline">Edit Schedule</span>
                                        </div>
                                        <div className=" flex items-center gap-20 mt-6">
                                            <div className="flex flex-col ">
                                                <span className="text-gray-600">Date: </span>
                                                <h1 className="text-lg">Monday, 9 November, 2024</h1>
                                            </div>
                                            <div className="flex flex-col ">
                                                <span className="text-gray-600">Time: </span>
                                                <h1 className="text-lg">12:30 pm</h1>
                                            </div>
                                        </div>

                                        <div className=" flex items-center gap-40 mt-6">
                                            <div className="flex flex-col ">
                                                <span className="text-gray-600">Service Type: </span>
                                                <h1 className="text-lg">Hydrating Facial</h1>
                                            </div>
                                            <div className="flex flex-col gap-2 ">
                                                <span className="text-gray-600">Specialist: </span>
                                                <div className="flex items-center gap-4">
                                                    <img src={gallery_two} className="w-10 h-10 rounded-full" />
                                                    <div>
                                                        <h1>Lily Grace</h1>
                                                        <span className="text-gray-600">Hair Stylist</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6  border-b">
                                        <h1 className="font-medium text-lg">Payment Type</h1>
                                        <div className="mt-2 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <input type="radio" className="w-4 h-4" />
                                                <span>Pay In-Person</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <input type="radio" className="w-4 h-4" />
                                                    <span>Pay Online</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99984 15.4684C4.32539 14.9712 2.93456 13.957 1.82734 12.4259C0.720115 10.8948 0.166504 9.16949 0.166504 7.25004V2.74338L5.99984 0.564209L11.8332 2.74338V7.25004C11.8332 9.16893 11.2796 10.8939 10.1723 12.425C9.06511 13.9562 7.67428 14.97 5.99984 15.4684ZM4.36567 11.0459H7.634C7.82511 11.0459 7.98511 10.9814 8.114 10.8525C8.24289 10.7237 8.30734 10.5637 8.30734 10.3725V7.93671C8.30734 7.74615 8.24289 7.58643 8.114 7.45754C7.98511 7.32865 7.82511 7.26421 7.634 7.26421H7.48984V6.43087C7.48984 6.01476 7.34817 5.66476 7.06484 5.38088C6.7815 5.09754 6.43178 4.95588 6.01567 4.95588C5.59956 4.95588 5.24984 5.09754 4.9665 5.38088C4.68317 5.66421 4.5415 6.01421 4.5415 6.43087V7.26421H4.36484C4.17428 7.26421 4.01456 7.32865 3.88567 7.45754C3.75678 7.58643 3.69234 7.74615 3.69234 7.93671V10.3725C3.69234 10.5637 3.75678 10.7237 3.88567 10.8525C4.01456 10.9814 4.17456 11.0459 4.36567 11.0459ZM5.18234 7.26421V6.43087C5.18234 6.19476 5.26234 5.99671 5.42234 5.83671C5.58234 5.67671 5.78011 5.59671 6.01567 5.59671C6.25122 5.59671 6.44928 5.67671 6.60984 5.83671C6.77039 5.99671 6.85011 6.19476 6.849 6.43087V7.26421H5.18234Z" fill="#120728" />
                                                    </svg>
                                                    <span className="text-sm text-gray-600">Fast & Secure Payment</span>
                                                </div>

                                            </div>



                                        </div>


                                    </div>
                                    <div className="py-2  border-b mt-36">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="text-gray-600">#7500</span>
                                            
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">Total</span>
                                            <span className="font-medium">#7500</span>
                                            
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                    <button onClick={() => navigate('/success')} className="bg-[#5e25cc] w-full  rounded-full py-2 text-white">
                                    Book Appointment
                                    </button>
                                </div>
                                </div>
                            </>
                        )}




                    </div>
                </div>

            )}
        </div>




    );
};

export default Details;
