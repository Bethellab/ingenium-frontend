import { Link, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from "react";


function LessonDetails() {
    const { courseId, lessonId } = useParams();

    const [activeChapterIdx, setActiveChapterIdx] = useState<number | null>(null); // Track the active chapter
    const [activeLessonIdx, setActiveLessonIdx] = useState<string | null>(null); // Track the active lesson

    // Toggle chapter visibility
    const toggleChapter = (chapterIdx: number) => {
        setActiveChapterIdx(activeChapterIdx === chapterIdx ? null : chapterIdx);
    };

    // Toggle lesson visibility
    const toggleLesson = (lessonId: string) => {
        setActiveLessonIdx(activeLessonIdx === lessonId ? null : lessonId);
    };
    const courses = [
        {
            id: 1,
            title: "Money Matters 💸",
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
                // More chapters...
            ],
        },

        {
            id: 2,
            title: "Tech Innovations 🚀",
            description:
            "Discover the latest trends in technology and innovation. Learn how emerging technologies are shaping the world and what skills you need to stay ahead in the tech industry.",
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
                // More chapters...
            ],
        },



        // Other courses...
    ];

    const course = courses.find((course) => course.id === parseInt(courseId || '0'));

    const selectedLesson = course
        ? course.chapters.flatMap((chapter) => chapter.lessons).find((lesson) => lesson.id === lessonId)
        : null;

    return (
        <div>
            {/* Breadcrumb */}
            <nav className=" text-lg text-gray-600 px-10 border-b py-4">
                <Link to="/onboarding/home" className="text-blue-500">
                    Learning
                </Link>
                <span className="mx-2">{'>'}</span>
                <Link
                    to={`/onboarding/home/course-details/${courseId}`}
                    className="text-blue-500"
                >
                    {course?.title || "Course Not Found"}
                </Link>
                <span className="mx-2">{'>'}</span>
                <span>{selectedLesson?.title || "Select a Lesson"}</span>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:mx-5">
                {/* Video Section */}
                <div className=" rounded-md p-4">
                    {selectedLesson ? (
                        <>
                            <video
                                controls
                                src={`/videos/${lessonId}.mp4`}
                                className="w-full rounded-lg h-[500px]"
                            ></video>
                            {/* <h2 className="mt-4 text-xl font-bold">{selectedLesson.title}</h2> */}

                            <div className="py-6">
                                <span className="text-lg">Overview</span>

                                <div className="space-y-2 py-2">
                                    <h2 className="text-xl font-bold">Description</h2>
                                    <p className="text-lg font-normal text-gray-600">{course?.description}</p>

                                </div>

                            </div>



                        </>
                    ) : (
                        <div className="text-gray-600">Select a lesson to watch.</div>
                    )}
                </div>

                <div className="bg-[#eaf6ff] border-l border-[#e9e9e9] lg:w-[900px] ">
                    <div className="flex w-full bg-white  flex-col p-4 items-start  ">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-[20px] font-semibold text-[#262626]">
                                Courses content
                            </span>

                        </div>
                    </div>

                    <div className="flex w-full flex-col">
                        <div className="w-full flex flex-col items-start bg-white border-t border-[#e9e9e9]">
                            <div className="flex flex-col gap-12 bg-[#eaf6ff] h-full w-full p-4">
                                {course?.chapters.map((chapter, chapterIdx) => (
                                    <div key={chapterIdx} className="flex flex-col justify-between">
                                        {/* Chapter Accordion */}
                                        <div>
                                            <div
                                                className="flex justify-between items-center w-full cursor-pointer"
                                                onClick={() => toggleChapter(chapterIdx)}
                                            >
                                                <span className="text-[18px] font-semibold text-[#1e1e1e]">
                                                    {chapter.title}
                                                </span>
                                                {/* Accordion Icon */}
                                                {activeChapterIdx === chapterIdx ? (
                                                    <FaChevronUp className="w-4 h-4 text-gray-600" />
                                                ) : (
                                                    <FaChevronDown className="w-4 h-4 text-gray-600" />
                                                )}
                                            </div>
                                            <span className="text-gray-600 text-sm">{chapter.duration}</span>
                                        </div>

                                        {/* Chapter's Lessons (Only show when the chapter is expanded) */}
                                        {activeChapterIdx === chapterIdx && (
                                            <ul className="pl-4 space-y-2">
                                                {chapter.lessons.map((lesson) => (
                                                    <li key={lesson.id} className="flex gap-[12px] items-center">
                                                        <div className="h-[24px] bg-[url(../assets/images/69c6514d-684f-40c6-8be4-6cb7c49dfbfd.png)] bg-cover" />
                                                        <div className="flex flex-col">
                                                            <span className="text-[18px] text-[#231f20] py-2 cursor-pointer" onClick={() => toggleLesson(lesson.id)}>
                                                                <Link
                                                                    to={`/onboarding/home/course/${courseId}/lesson/${lesson.id}`}
                                                                    className={`block ${lessonId === lesson.id
                                                                        ? "text-blue-600 font-bold"
                                                                        : "text-gray-700 hover:text-blue-500"
                                                                        }`}
                                                                >
                                                                    {lesson.title}

                                                                </Link>
                                                                <span className="text-sm text-gray-500">
                                                                    {lesson.duration}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LessonDetails;
