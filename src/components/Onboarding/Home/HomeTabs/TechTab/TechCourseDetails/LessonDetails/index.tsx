import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import CourseQuestions from "./CourseQuestion";
import { image } from "@/assets/image/image";

function LessonDetails() {
    const { courseId, lessonId } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [activeChapterIdx, setActiveChapterIdx] = useState<number | null>(0);
    const [activeLessonIdx, setActiveLessonIdx] = useState<string | null>(null);
    
    const navigate = useNavigate()


    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState('All chapters');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Sort by recommended');
    const [isQuestionFilterOpen, setIsQuestionFilterOpen] = useState(false);
    const [selectedQuestionFilter, setSelectedQuestionFilter] = useState('Filter questions');


    const questionFilters = ['All questions', 'Answered', 'Unanswered'];

    const chapters = ['All chapters', 'Chapter 1', 'Chapter 2', 'Chapter 3'];
    const sortOptions = ['Sort by recommended', 'Sort by popularity', 'Sort by date'];

    type Tab = {
        label: string;
        content: React.ReactNode;
    };

    // Toggle chapter visibility
    const toggleChapter = (chapterIdx: number) => {
        setActiveChapterIdx(activeChapterIdx === chapterIdx ? null : chapterIdx);
    };

    // Toggle lesson visibility
    const toggleLesson = (lessonId: string) => {
        setActiveLessonIdx(activeLessonIdx === lessonId ? null : lessonId);
    };

    // Sample course data
    const courses = [
        {
            id: 1,
            title: "Money Matters 💸",
            description:
                "Start the path to become financially savvy, and learn how to manage personal and business finances using practical and strategic methods...",
            chapters: [
                {
                    title: "Chapter 1: How To Save",
                    duration: "9h 59m",
                    lessons: [
                        { id: "Lesson1", title: "Introduction", duration: "2h 59m" },
                        { id: "Lesson2", title: "Saving Tips", duration: "1h 30m" },
                        { id: "Lesson3", title: "Advanced Strategies", duration: "3h 15m" },
                    ],
                    hasQuiz: true, // Add a flag indicating there is a quiz
                },
                {
                    title: "Chapter 2: Budgeting Basics",
                    duration: "9h 59m",
                    lessons: [
                        { id: "Lesson4", title: "Budgeting Overview", duration: "2h" },
                        { id: "Lesson5", title: "Tools for Budgeting", duration: "1h 45m" },
                    ],
                    hasQuiz: true,
                },
            ],
        },
        // other courses...
    ];


    // Get the selected course and lesson
    const course = courses.find((course) => course.id === parseInt(courseId || "0"));
    const selectedLesson = course
        ? course.chapters.flatMap((chapter) => chapter.lessons).find((lesson) => lesson.id === lessonId)
        : null;

    const tabs: Tab[] = [
        {
            label: "Overview",
            content: course ? (
                <div className="space-y-2 py-2">
                    <h2 className="text-xl font-bold">Description</h2>
                    <p className="text-lg font-normal text-gray-600">{course.description}</p>
                </div>
            ) : (
                <div className="text-gray-600">Course details not available.</div>
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
    ];

    return (
        <div>
            {/* Breadcrumb */}
            <nav className="text-lg text-gray-600 px-10 border-b py-4">
                <Link to="/onboarding/home" className="text-blue-500">
                    Learning
                </Link>
                <span className="mx-2">{'>'}</span>
                <Link
                    to={`/onboarding/course-details/${courseId}`}
                    className="text-blue-500"
                >
                    {course?.title || "Course Not Found"}
                </Link>
                <span className="mx-2">{'>'}</span>
                <span>{selectedLesson?.title || "Select a Lesson"}</span>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:mx-2">
                {/* Video Section */}
                <div className="rounded-md p-4 flex-1">
                    {selectedLesson ? (
                        <>
                            {/* <video
                                controls
                                src={`/videos/${lessonId}.mp4`}
                                className="w-full rounded-lg lg:h-[500px]"
                            ></video> */}

                            <img src={image.videoimg} className="w-full" />

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
                    ) : (
                        <div className="text-gray-600">Select a lesson to watch.</div>
                    )}
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

                    <div className="flex w-full flex-col h-[700px] overflew-y-scroll">
                        <div className="w-full flex flex-col items-start bg-white border-t border-[#e9e9e9]">
                            <div className="flex flex-col gap-4 h-full w-full ">
                                {course?.chapters.map((chapter, chapterIdx) => (
                                    <div
                                        key={chapterIdx}
                                        className={`flex flex-col justify-between p-6 rounded-md transition ${activeChapterIdx === chapterIdx ? 'bg-blue-100' : ''
                                            }`}
                                    >
                                        {/* Chapter Accordion */}
                                        <div>
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
                                            <img src={image.progressicon} />
                                        </div>

                                        {/* Lessons */}
                                        <div
                                            className={`mt-2 flex flex-col gap-2  ${activeChapterIdx === chapterIdx ? '' : 'hidden'
                                                }`}
                                        >
                                            {chapter.lessons.map((lesson) => (
                                                <div
                                                    key={lesson.id}
                                                    className={`cursor-pointer py-3 rounded-md flex flex-col ${activeLessonIdx === lesson.id ? 'bg-blue-100' : ''
                                                        }`}
                                                    onClick={() => toggleLesson(lesson.id)}
                                                >
                                                    <>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-5 h-5 border-4 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                                                                    <span className="w-3 h-3  rounded-full"></span>
                                                                </div>
                                                                <span className="text-md font-semibold text-[#1e1e1e]">{lesson.title}</span>
                                                            </div>

                                                            <div className="ml-8 flex items-center gap-1">
                                                                <img src={image.movie} />
                                                                <span className="text-gray-600  ">{lesson.duration}</span>

                                                            </div>

                                                        </div>




                                                    </>




                                                </div>


                                            ))}
                                            {chapter.hasQuiz && (
                                                <div onClick={() => navigate('/onboarding/home/quiz')} className="flex items-center gap-2 cursor-pointer">
                                                    <div className="w-5 h-5 border-4 border-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                                                        <span className="w-3 h-3  rounded-full"></span>
                                                    </div>
                                                    <span className="text-md font-semibold text-[#1e1e1e]">Quiz</span>
                                                </div>

                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>



            </div>
        </div>
    );
}

export default LessonDetails;
