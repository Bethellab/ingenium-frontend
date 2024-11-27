
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { useState } from "react";
import CourseQuestions from "./CourseQuestion";
import { image } from "@/assets/image/image";
import QuizApp from "./QuizApp";

const Quiz = () => {

    const [activeTab, setActiveTab] = useState(0);



    const [activeChapterIdx, setActiveChapterIdx] = useState<number | null>(0);

    const toggleChapter = (index: number) => {
        setActiveChapterIdx(activeChapterIdx === index ? null : index);
    };




    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState('All chapters');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Sort by recommended');
    const [isQuestionFilterOpen, setIsQuestionFilterOpen] = useState(false);
    const [selectedQuestionFilter, setSelectedQuestionFilter] = useState('Filter questions');
    const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);

    const questionFilters = ['All questions', 'Answered', 'Unanswered'];

    const chapters = ['All chapters', 'Chapter 1', 'Chapter 2', 'Chapter 3'];
    const sortOptions = ['Sort by recommended', 'Sort by popularity', 'Sort by date'];

    type Tab = {
        label: string;
        content: React.ReactNode;
    };



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





    const courses = [
        {
            title: "Money Matters 💸",
            description: "Start the path to become financially savvy...",
            chapters: [
                {
                    title: "Chapter 1: How To Save",
                    description: "Learn to save money effectively.",
                    duration: "10 minutes",
                    lessons: [
                        { id: 1, title: "Why Save?", duration: "5 minutes" },
                        { id: 2, title: "Setting Goals", duration: "5 minutes" },
                    ],
                    hasQuiz: true,
                },
                {
                    title: "Chapter 2: Budgeting Basics",
                    description: "Master the art of budgeting.",
                    duration: "15 minutes",
                    lessons: [
                        { id: 1, title: "Budgeting Essentials", duration: "7 minutes" },
                        { id: 2, title: "Common Mistakes", duration: "8 minutes" },
                    ],
                    hasQuiz: true,
                },
                {
                    title: "Chapter 3: Smart Investments",
                    description: "Explore smart investment strategies.",
                    duration: "20 minutes",
                    lessons: [
                        { id: 1, title: "Investing 101", duration: "10 minutes" },
                        { id: 2, title: "Risk Management", duration: "10 minutes" },
                    ],
                    hasQuiz: true,
                },
            ],
        },
    ];






    const tabs: Tab[] = [
        {
            label: "Overview",
            content: (
                <div className="space-y-2 py-2">
                    <h2 className="text-xl font-bold">Description</h2>
                    <p className="text-lg font-normal text-gray-600">
                        {courses[0].chapters[selectedChapterIdx].description}
                    </p>
                </div>
            ),
        },
        {
            label: "Q&A", content:

                <div className=" py-8 mx-2 lg:mx-24">

                    <div className="w-full  ">
                        <div className="flex justify-center items-center ">
                            <input
                                className="w-full bg-gray-200 placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md p-3 transition duration-300 ease focus:outline-none"
                                placeholder="Search all course questions"
                            />
                            <button
                                className="  flex items-center rounded-md bg-primary p-3 "
                                type="button"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                </svg>


                            </button>

                        </div>





                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 py-4">
                        {/* Filters Section */}
                        <div className="flex items-center gap-2">
                            <span className="text-md font-medium">Filters:</span>
                            <div className="relative">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md text-gray-700 border-gray-300"
                                    onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                                >
                                    {selectedChapter}
                                    <span className="w-4 h-4">
                                        <FaChevronDown
                                            className={`${isFilterDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                                        />
                                    </span>
                                </button>
                                {isFilterDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg border-gray-300">
                                        {chapters.map((chapter, index) => (
                                            <button
                                                key={index}
                                                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                                                onClick={() => {
                                                    setSelectedChapter(chapter);
                                                    setIsFilterDropdownOpen(false);
                                                }}
                                            >
                                                {chapter}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sort Section */}
                        <div className="flex items-center gap-2">
                            <span className="text-md font-medium">Sort by:</span>
                            <div className="relative">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md text-gray-700 border-gray-300"
                                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                                >
                                    {selectedSort}
                                    <span className="w-4 h-4">
                                        <FaChevronDown
                                            className={`${isSortDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                                        />
                                    </span>
                                </button>
                                {isSortDropdownOpen && (
                                    <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg border-gray-300">
                                        {sortOptions.map((option, index) => (
                                            <button
                                                key={index}
                                                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                                                onClick={() => {
                                                    setSelectedSort(option);
                                                    setIsSortDropdownOpen(false);
                                                }}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Filter Questions Section */}
                        <div className="flex items-center gap-2">

                            <div className="relative">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-md text-gray-700 border-gray-300"
                                    onClick={() => setIsQuestionFilterOpen(!isQuestionFilterOpen)}
                                >
                                    {selectedQuestionFilter}
                                    <span className="w-4 h-4">
                                        <FaChevronDown
                                            className={`${isQuestionFilterOpen ? 'rotate-180' : ''} transition-transform`}
                                        />
                                    </span>
                                </button>
                                {isQuestionFilterOpen && (
                                    <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg border-gray-300">
                                        {questionFilters.map((filter, index) => (
                                            <button
                                                key={index}
                                                className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                                                onClick={() => {
                                                    setSelectedQuestionFilter(filter);
                                                    setIsQuestionFilterOpen(false);
                                                }}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="py-6">
                        <h2 className="font-bold text-2xl">All questions in this course (10)</h2>

                        <CourseQuestions />
                    </div>
                </div>

        },
        {
            label: "Review",
            content: (
                <div>
                     <div className="flex justify-center items-center  py-10">
                        <div className=" flex flex-col w-full  gap-6">
                            <div className="flex flex-col gap-4 items-center w-full">
                                <span className="text-3xl font-medium text-[#1e1e1e] text-center">
                                    Rate this course
                                </span>

                                <div className="text-gray-400 flex items-center gap-2">
                                <FaStar className="w-6 h-6" />
                                <FaStar className="w-6 h-6" />
                                <FaStar className="w-6 h-6" />
                                <FaStar className="w-6 h-6" />
                                <FaStar className="w-6 h-6" />

                                </div>

                               


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


                    <div className="flex justify-center items-center  py-6">

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

                </div>
            ),
        },
    ];


    return (
        <div>
            <div>
                {/* Breadcrumb */}
                <nav className="text-lg text-gray-600 px-10 border-b py-4">
                    <Link to="/onboarding/home" className="">
                        Learning
                    </Link>
                    <span className="mx-2">{'>'}</span>
                    <span>
                        Money Matters
                    </span>
                    <span className="mx-2">{'>'}</span>
                    <span>
                        Money Matters
                    </span>
                </nav>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row lg:gap-4 lg:mx-2">
                    {/* Video Section */}
                    <div className="rounded-md p-4 flex-1">

                        <>

                            <div className="w-full">
                               <QuizApp />


                            </div>


                            {/* Tab Navigation */}
                            <div className="py-6">
                                {/* <span className="text-lg">Overview</span> */}

                                <div className="flex w-full border-gray-300 border-b">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            className={`px-4 py-2 text-md font-medium ${activeTab === index
                                                ? "border-b-4 border-primary font-bold"
                                                : "text-gray-500"
                                                }`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div>{tabs[activeTab].content}</div>
                            </div>
                        </>

                    </div>

                    {/* Course Content */}
                    <aside className="border-l border-[#e9e9e9] lg:w-[500px]  overflow-y-scroll">
                        <div className="flex w-full bg-white flex-col p-4 items-start">
                            <div className="flex justify-between items-center w-full">
                                <span className="text-[20px] font-semibold text-[#262626]">
                                    Course content
                                </span>
                            </div>
                        </div>

                        <div className="flex w-full flex-col  h-[200px] overflew-y-scroll">
                            {courses[0].chapters.map((chapter, chapterIdx) => (
                                <div
                                    key={chapterIdx}
                                    onClick={() => setSelectedChapterIdx(chapterIdx)}
                                    className={`w-full flex flex-col  items-start bg-white border-t border-[#e9e9e9] `}
                                >
                                    <div
                                        className={`flex flex-col justify-between p-6 rounded-md w-full transition ${activeChapterIdx === chapterIdx  ? "bg-blue-100" : ""
                                            }`}
                                    >
                                        {/* Chapter Accordion */}
                                        <div >
                                            <div
                                                className="flex justify-between items-center w-full cursor-pointer"
                                                onClick={() => toggleChapter(chapterIdx)}
                                            >
                                                <span className="text-[18px] font-semibold text-[#1e1e1e]">
                                                    {chapter.title}
                                                </span>
                                                {activeChapterIdx === chapterIdx ? (
                                                    <FaChevronUp className="w-4 h-4 text-gray-600" />
                                                ) : (
                                                    <FaChevronDown className="w-4 h-4 text-gray-600" />
                                                )}
                                            </div>
                                            <span className="text-gray-600 text-sm">{chapter.duration}</span>
                                            <img src={image.progressbar} />
                                        </div>

                                        {/* Lessons */}
                                        <div
                                            className={`mt-2 flex flex-col gap-2 ${activeChapterIdx === chapterIdx ? "" : "hidden"
                                                }`}
                                        >
                                            {chapter.lessons.map((lesson, lessonIdx) => (
                                                <div
                                                    key={lessonIdx}
                                                    className={`cursor-pointer py-3 rounded-md flex flex-col`}
                                                >
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            {/* <div className="w-5 h-5 border-4 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                                                                <span className="w-3 h-3 rounded-full"></span>
                                                            </div> */}
                                                            <img src={image.circle_tick} />
                                                            <span className="text-md font-semibold text-[#1e1e1e]">
                                                                {lesson.title}
                                                            </span>
                                                        </div>

                                                        <div className="ml-8 flex items-center gap-1">
                                                            <img src={image.movie} alt="icon" />
                                                            <span className="text-gray-600">{lesson.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {chapter.hasQuiz && (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-4 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                                                        <span className="w-3 h-3 rounded-full"></span>
                                                    </div>
                                                    <span className="text-md font-semibold text-[#1e1e1e]">
                                                        Quiz
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>



                </div>
            </div>



        </div>
    )
}

export default Quiz