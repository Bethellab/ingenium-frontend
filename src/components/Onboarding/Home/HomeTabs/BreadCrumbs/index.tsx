import { Link, useParams } from "react-router-dom";

function Breadcrumbs() {
    const { courseId, lessonId } = useParams();  // Get courseId and lessonId from URL params

    // Sample courses and chapters data
    const courses = [
        {
            id: 1,
            title: "Money Matters 💸",
            description:
                "Start the path to become financially savvy, and learn how to manage personal and business finances using practical and strategic methods. Build the skills needed to create budgets, manage expenses, and use tools like investment planning, all with hands-on practice.",
            rating: 4.5,
            views: "49M+",
        },
        {
            id: 2,
            title: "Tech Innovations 🚀",
            description:
                "Discover the latest trends in technology and innovation. Learn how emerging technologies are shaping the world and what skills you need to stay ahead in the tech industry.",
            rating: 4.8,
            views: "30M+",
        },
    ];

    const chapters = [
        {
            title: 'Chapter 1: How To Save',
            lessons: [
                { id: 'lesson1', title: ' Introduction', duration: '2h 59m' },
                { id: 'lesson2', title: ' Saving Tips', duration: '1h 30m' },
                { id: 'lesson3', title: ' Advanced Strategies', duration: '3h 15m' },
            ],
        },
        {
            title: 'Chapter 2: Budgeting Basics',
            lessons: [
                { id: 'lesson4', title: ' Budgeting Overview', duration: '2h' },
                { id: 'lesson5', title: ' Tools for Budgeting', duration: '1h 45m' },
            ],
        },
    ];

    // Find the course by the courseId
    const course = courses.find((course) => course.id === parseInt(courseId || '0'));

    // Find the selected lesson based on the lessonId
    const selectedLesson = course
        ? chapters.flatMap(chapter => chapter.lessons).find(lesson => lesson.id === lessonId)
        : null;

    return (
        <nav className="mb-4 text-lg text-gray-600 px-10">
            <Link to="/onboarding/home" className="text-blue-500">
                Learning
            </Link>
            <span className="mx-2 font-semibold text-lg">{'>'}</span>
            <Link to={`/onboarding/home/course-details/${courseId}`} className="text-blue-500">
                {course ? course.title : "Course Not Found"}
            </Link>
            <span className="mx-2 font-semibold text-lg">{'>'}</span>
            {selectedLesson ? (
                <span className="text-gray-800 font-medium">
                    {selectedLesson.title}
                </span>
            ) : (
                <span className="text-gray-800 font-medium">Select a Lesson</span>
            )}
        </nav>
    );
}

export default Breadcrumbs;
