import hair from '../../assets/image/hair_img.png';
import manicure from '../../assets/image/manicure.png';
import facial from '../../assets/image/facial.png';
import makeup from '../../assets/image/makeup.png'
import wax from '../../assets/image/wax.png'
import massage from '../../assets/image/massage.png'
import { useNavigate } from 'react-router-dom';

const BellasHome = () => {
    const navigate = useNavigate();

    const services = [
        {
          id: "hair",
          title: "Hair Styling & Treatment",
          description:
            "From stylish cuts to color treatments and blowouts, our expert stylists will give your hair the attention it deserves.",
          price: "₦3,000",
          image: hair,
        },
        {
          id: "manicure",
          title: "Manicure & Pedicure",
          description:
            "Pamper your hands and feet with a relaxing manicure and pedicure. Includes nail shaping, cuticle care, and polish in a range of colors.",
          price: "₦3,000",
          image: manicure,
        },
        {
          id: "facial",
          title: "Facial Treatments",
          description:
            "Rejuvenate your skin with our luxurious facial treatments, tailored for hydration, anti-aging, or deep cleansing.",
          price: "₦3,000",
          image: facial,
        },
        {
            id: "makeup",
            image: makeup,
            title: "Makeup Services",
            description:
                "Perfect for special occasions or just a day out—our makeup artists create a look to enhance your natural beauty.",
            price: "₦3,000",
        },
        {
            id: "wax",
            image: wax,
            title: "Waxing & Hair Removal",
            description:
                "Smooth and flawless skin with our gentle waxing services, tailored for all skin types.",
            price: "₦3,000",
        },
        {
            id: "massage",
            image: massage,
            title: "Massage Therapy",
            description:
                "Relieve stress and muscle tension with our therapeutic massage services, from Swedish to deep tissue.",
            price: "₦3,000",
        },
      ];
    

    const handleViewDetails = (service) => {
        navigate(`/details/${service.id}`, { state: service });
      };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12  lg:mx-24">
            {/* Array of Card Data */}
            {services.map((card, index) => (
                <div
                    key={index}
                    style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="relative h-[460px] bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                >
                    {/* Gradient Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" /> */}

                    {/* Content Container */}
                    <div className="absolute bottom-0 w-full p-6 text-white z-10">
                        {/* Price Section */}
                        <div className="flex gap-2">
                            <span className="text-sm font-light font-['Cormorant_Garamond']">From</span>
                            <span className="text-2xl font-bold font-['Cormorant_Garamond']">{card.price}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 text-3xl font-bold  font-['Cormorant_Garamond'] whitespace-nowrap">{card.title}</h3>

                        {/* Description */}
                        <p className="mt-1 text-md text-gray-300">{card.description}</p>

                        {/* Button */}
                        <button  onClick={() => handleViewDetails(card)} className="mt-4 inline-flex items-center gap-2  py-2 border-b text-white  font-semibold shadow-md">
                            View Service
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.96203 0.178139V1.98833C6.96203 2.09113 7.00647 2.18946 7.08425 2.25874L12.6907 7.15071L0.177832 7.15072C0.0800581 7.15072 6.10309e-05 7.23117 6.10352e-05 7.3295L6.10938e-05 8.67038C6.10981e-05 8.76871 0.0800582 8.84916 0.177832 8.84916H12.6907L7.08425 13.7411C7.00647 13.8082 6.96203 13.9065 6.96203 14.0116V15.8217C6.96203 15.9737 7.14202 16.0564 7.25535 15.9558L15.755 8.53853C15.832 8.47148 15.8936 8.38859 15.9359 8.29547C15.9782 8.20235 16.0001 8.10118 16.0001 7.99882C16.0001 7.89646 15.9782 7.79529 15.9359 7.70217C15.8936 7.60906 15.832 7.52617 15.755 7.45912L7.25535 0.044051C7.1398 -0.056515 6.96203 0.0261726 6.96203 0.178139Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BellasHome;
