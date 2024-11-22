import { image } from "@/assets/image/image";
import { useParams, Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import { useState } from "react";

const TechCourseDetails = () => {
    const { id: courseId } = useParams();

    const [activeChapter, setActiveChapter] = useState<number | null>(null);

    const toggleChapter = (chapterIdx: number) => {
      setActiveChapter(activeChapter === chapterIdx ? null : chapterIdx);
    };

    // Sample courses data
    const courses = [
        {
            id: 1,
            title: "Money Matters 💸",
            image: image.moneymaking,
            duration: '9h 59m',
            description:
                "Start the path to become financially savvy, and learn how to manage personal and business finances using practical and strategic methods. Build the skills needed to create budgets, manage expenses, and use tools like investment planning, all with hands-on practice.",
            chapters: [
                {
                    title: "Chapter 1: How To Save",
                    duration: '9h 59m',
                    lessons: [
                        { id: "Lesson1", title: "Introduction", duration: "2h 59m" },
                        { id: "Lesson2", title: "Saving Tips", duration: "1h 30m" },
                        { id: "Lesson3", title: "Advanced Strategies", duration: "3h 15m" },
                    ],
                },
                {
                    title: "Chapter 2: Budgeting Basics",
                    duration: '9h 59m',
                    lessons: [
                        { id: "Lesson4", title: "Budgeting Overview", duration: "2h" },
                        { id: "Lesson5", title: "Tools for Budgeting", duration: "1h 45m" },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: "Tech Innovations 🚀",
           
            image: image.moneymaking,
            description:
                "Discover the latest trends in technology and innovation. Learn how emerging technologies are shaping the world and what skills you need to stay ahead in the tech industry.",
            chapters: [
                {
                    title: "Chapter 1: The Rise of AI",
                    duration: '9h 59m',
                    lessons: [
                        { id: "Lesson1", title: "Understanding AI", duration: "2h 30m" },
                        { id: "Lesson2", title: "Applications of AI", duration: "1h 45m" },
                    ],
                },
                {
                    title: "Chapter 2: The Future of Tech",
                    duration: '9h 59m',
                    lessons: [
                        { id: "Lesson3", title: "Quantum Computing", duration: "2h 15m" },
                        { id: "Lesson4", title: "Emerging Technologies", duration: "2h 10m" },
                    ],
                },
            ],
        },
    ];


    // Find the course by ID
    const course = courses.find((course) => course.id === parseInt(courseId || "0"));


    // Sample data for reviews
    const demoReviews = [
        { id: 1, name: "Jerome Bell", date: "May 9, 2014", rating: 4, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 2, name: "Alice Johnson", date: "June 5, 2015", rating: 5, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 3, name: "Mark Smith", date: "July 20, 2016", rating: 3, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 4, name: "Sophia Brown", date: "August 15, 2017", rating: 4, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 5, name: "James White", date: "September 10, 2018", rating: 5, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 6, name: "Michael Green", date: "October 25, 2019", rating: 2, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 7, name: "Olivia Lee", date: "November 3, 2020", rating: 4, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 8, name: "Emma Scott", date: "December 12, 2021", rating: 5, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 9, name: "Liam Harris", date: "January 8, 2022", rating: 4, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
        { id: 10, name: "Isabella Clark", date: "February 17, 2023", rating: 3, comment: "This was so helpful, and i feel so enlightened as i scanned through it with vigour. I am sure i am a financial literate today because  of this teaching, and i would forever be grateful to this course." },
    ];

    const [reviews, setReviews] = useState(demoReviews.slice(0, 3)); // Initial reviews for page 1
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(demoReviews.length / 3); // Calculate total pages based on demo data

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Update the reviews displayed based on the current page
        const startIndex = (page - 1) * 3;
        setReviews(demoReviews.slice(startIndex, startIndex + 3));
    };





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

                    <div className="lg:mx-36 flex flex-col lg:flex-row gap-24 mt-6 items-start">
                        <div className="space-y-6">



                            {/* Course Details */}
                            {course ? (
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
                                    <p className="text-lg text-gray-600 mb-8">{course.description}</p>

                                    <div className="main-container w-full max-w-[998px] bg-[#f5f5f5] rounded-[12px] mx-auto my-6 p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-lg font-semibold text-[#2b2e33]">Course Outline</h2>
                                            <span className="text-sm font-bold text-[#303030]">
                                                {course.chapters.length} Chapters
                                            </span>
                                        </div>
                                        <div>
                                            {course.chapters.map((chapter, chapterIdx) => (
                                                <div key={chapterIdx} className="mb-4  rounded-lg overflow-hidden">
                                                    <button
                                                        className="flex justify-between items-center w-full p-3 bg-gray-200 text-left font-medium text-[#303030] focus:outline-none"
                                                        onClick={() => toggleChapter(chapterIdx)}
                                                    >
                                                        <span>
                                                           {chapter.title}
                                                        </span>
                                                        <span>{chapter.lessons.length} lessons ({chapter.duration})</span>
                                                    </button>
                                                    {activeChapter === chapterIdx && (
                                                        <ul className="bg-white p-4 space-y-2">
                                                            {chapter.lessons.map((lesson) => (
                                                                <li key={lesson.id} className="flex justify-between py-2">
                                                                    <Link
                                                                        to={`/onboarding/home/course/${course.id}/lesson/${lesson.id}`}
                                                                        className="text-md"
                                                                    >
                                                                        {lesson.id}: {lesson.title}
                                                                    </Link>
                                                                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <p className="text-red-500 text-lg">Course not found. Please check the URL.</p>
                            )}


                            <div className="space-y-2">
                                <h1 className="text-xl font-semibold">Course Description</h1>
                                <div className="text-gray-600 flex flex-col gap-2">
                                    <span>Write clear, precise, and direct prose</span>
                                    <span>Find alternative ways of constructing sentences</span>
                                    <span>Communicate better with readers</span>
                                    <span>Develop greater command of the English language</span>

                                </div>

                            </div>

                            <div className="space-y-4">
                                <h1 className="text-xl font-semibold">Instructor</h1>
                                <div className="text-gray-600 flex items-center gap-4">
                                    <img src={image.profile_icon} className="w-14" />
                                    <div>
                                        <p className="text-primary underline text-lg font-medium">Evan Elubah</p>
                                        <span className="text-lg">HR Manager</span>
                                    </div>


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

                    <div className="flex justify-center items-center lg:mx-36 py-10">
                        <div className=" flex flex-col w-full  gap-6">
                            <div className="flex flex-col gap-4 items-center w-full">
                                <span className="text-2xl font-medium text-[#1e1e1e] text-center">
                                    Rate this course
                                </span>

                            </div>

                            <div className="flex flex-col gap-3 items-end w-full mt-8">
                                <div className="flex gap-3 items-center w-full">
                                    <div className="w-12 h-12 bg-gray-400 rounded-full" />
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-base font-normal text-[#1e1e1e]">
                                            Evan Lubah
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            Tell us what you feel about this course!
                                        </span>
                                    </div>
                                </div>

                                <div className="relative w-full">
                                    <textarea
                                        placeholder="Write a review"
                                        className="w-full h-40 p-3 bg-white border border-gray-300 rounded-lg resize-none"
                                    />
                                </div>

                                <button className="flex gap-2 justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">
                                    Submit review
                                </button>
                            </div>
                        </div>

                    </div>


                    <div className="flex justify-center items-center lg:mx-36 py-6">

                        <div className=" flex flex-col w-full  gap-4 items-start">
                            {/* Header */}
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-lg font-medium text-[#231f20]">Reviews</h2>
                                <hr />

                            </div>

                            <div className="flex flex-col gap-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <img src={`https://i.pravatar.cc/150?img=${review.id}`} className="w-12 h-12 rounded-full" alt={review.name} />
                                            <div className="flex flex-col">
                                                <span className="text-md font-semibold">{review.name}</span>
                                                <span className="text-sm text-gray-500">{review.date}</span>
                                            </div>
                                            {/* Rating */}
                                            <div className="flex gap-1 ml-auto">
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index} className={index < review.rating ? "text-primary" : "text-gray-300"}>
                                                        <FaStar />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-md text-gray-600 lg:w-[1200px]">{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination and Show More */}
                            <div className="flex justify-between w-full items-center mt-6">
                                {/* Pagination */}
                                {/* Pagination */}
                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`px-3 py-1 text-sm font-medium ${currentPage === index + 1 ? "text-blue-600 bg-blue-100" : "text-gray-600 hover:bg-gray-200"} rounded`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                {/* Show More Button */}
                                <button className="px-4 py-2 text-sm font-medium bg-blue-50">
                                    Show More Reviews
                                </button>
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
