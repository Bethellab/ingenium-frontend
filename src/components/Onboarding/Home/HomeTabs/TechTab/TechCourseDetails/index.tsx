import { image } from "@/assets/image/image";
import { useParams, Link } from "react-router-dom";

const TechCourseDetails = () => {
    const { id } = useParams(); // Extract the course ID from the URL

    // Example data (replace with API fetch or context/state management)
    // Array of course data
    const courses = [
        {
            id: 1,
            title: "Money Matters 💸",
            description:
                "Start the path to become financially savvy, and learn how to manage personal and business finances using practical and strategic methods. Build the skills needed to create budgets, manage expenses, and use tools like investment planning, all with hands-on practice.",
            rating: 4.5,
            views: "49M+",
            image: image.moneymaking,
        },
        {
            id: 2,
            title: "Tech Innovations 🚀",
            description:
                "Discover the latest trends in technology and innovation. Learn how emerging technologies are shaping the world and what skills you need to stay ahead in the tech industry.",
            rating: 4.8,
            views: "30M+",
            image: image.moneymaking, // Replace with the correct image
        },
        {
            id: 3,
            title: "Transport Systems 🚗",
            description:
                "Learn about modern transport systems, sustainability, and how technology is transforming the way we move goods and people across the globe.",
            rating: 4.6,
            views: "15M+",
            image: image.moneymaking, // Replace with the correct image
        },
        {
            id: 4,
            title: "Transport Systems 🚗",
            description:
                "Learn about modern transport systems, sustainability, and how technology is transforming the way we move goods and people across the globe.",
            rating: 4.6,
            views: "15M+",
            image: image.moneymaking, // Replace with the correct image
        },

        {
            id: 5,
            title: "Transport Systems 🚗",
            description:
                "Learn about modern transport systems, sustainability, and how technology is transforming the way we move goods and people across the globe.",
            rating: 4.6,
            views: "15M+",
            image: image.moneymaking, // Replace with the correct image
        },
        {
            id: 6,
            title: "Transport Systems 🚗",
            description:
                "Learn about modern transport systems, sustainability, and how technology is transforming the way we move goods and people across the globe.",
            rating: 4.6,
            views: "15M+",
            image: image.moneymaking, // Replace with the correct image
        },
        // Add more course data here...
    ];

    const course = courses.find((course) => course.id === parseInt(id!));

    return (
        <div>

            {/* Breadcrumb */}
            <nav className="mb-4 text-lg text-gray-600 px-10">
                <Link to="/onboarding/home" className="text-blue-500 ">
                    Learning
                </Link>
                <span className="mx-2 font-semibold text-lg">{'>'}</span>
                <span className="text-gray-800 font-medium">
                    {course ? course.title : "Course Not Found"}
                </span>
            </nav>
            {course ? (
                <>
                    <div className=" bg-cover bg-center w-full h-[45vh] rounded-md "
                        style={{
                            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course.image})`,
                        }}>

                    </div>
                    <div className="mx-24 flex gap-24 mt-6 items-start">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold">{course.title}: Professional Certificate </h1>
                                <p className="mt-2 text-gray-600 ">{course.description}</p>
                                {/* <div className="flex items-center gap-4 text-gray-600 font-semibold text-md mt-4">
                                <p>Rating: {course.rating}</p>
                                <p>Views: {course.views}</p>
                            </div> */}

                            </div>


                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                <span>Write clear, precise, and direct prose</span>
                                <span>Find alternative ways of constructing sentences</span> 
                                <span>Communicate better with readers</span> 
                                <span>Develop greater command of the English language</span> 

                                </div>
                                
                            </div>
                            
                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                <span>Write clear, precise, and direct prose</span>
                                <span>Find alternative ways of constructing sentences</span> 
                                <span>Communicate better with readers</span> 
                                <span>Develop greater command of the English language</span> 

                                </div>
                                
                            </div>
                            
                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                <span>Write clear, precise, and direct prose</span>
                                <span>Find alternative ways of constructing sentences</span> 
                                <span>Communicate better with readers</span> 
                                <span>Develop greater command of the English language</span> 

                                </div>
                                
                            </div>
                            
                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                <span>Write clear, precise, and direct prose</span>
                                <span>Find alternative ways of constructing sentences</span> 
                                <span>Communicate better with readers</span> 
                                <span>Develop greater command of the English language</span> 

                                </div>
                                
                            </div>
                            
                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                <span>Write clear, precise, and direct prose</span>
                                <span>Find alternative ways of constructing sentences</span> 
                                <span>Communicate better with readers</span> 
                                <span>Develop greater command of the English language</span> 

                                </div>
                                
                            </div>


                        </div>


                        <div>
                            <div className="flex flex-col w-[396px] p-4 gap-5 items-start bg-white rounded-lg border border-gray-300 relative overflow-hidden mx-auto mt-6">
                                <button className="flex flex-col gap-4 items-start self-stretch border-none pointer">
                                    <div className="flex justify-center items-center w-full bg-blue-600 rounded-lg p-3 relative">
                                        <div className="flex gap-2 items-center">
                                            <span className="font-semibold text-white text-sm tracking-tight">
                                                Get course
                                            </span>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex flex-col gap-2 items-start w-full">
                                    <span className="font-bold text-gray-800 text-sm">
                                        This course includes:
                                    </span>
                                    <div className="flex flex-col gap-3 items-start w-full">
                                        <div className="flex gap-3 items-center">

                                            <span className="text-gray-800 text-sm">
                                                2 hours on-demand video
                                            </span>
                                        </div>
                                        <div className="flex gap-3 items-center">

                                            <span className="text-gray-800 text-sm">
                                                Full lifetime access
                                            </span>
                                        </div>
                                        <div className="flex gap-3 items-center">

                                            <span className="text-gray-800 text-sm">
                                                Certificate of completion
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </>
            ) : (
                <p>Course not found</p>
            )}
        </div>
    );
};

export default TechCourseDetails;
