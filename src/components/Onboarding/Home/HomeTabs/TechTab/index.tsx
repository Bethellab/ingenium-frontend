import { useNavigate } from "react-router-dom"; // Assuming React Router for navigation
import { image } from "@/assets/image/image";

const TechTab = () => {
  const navigate = useNavigate(); // Navigation hook

  // Array of course data
  const courses = [
    {
      id: 1,
      title: "Money Matters 💸",
      description:
        "Empower yourself with practical financial knowledge. From budgeting and saving strategies to understanding investments, this course covers essentials to manage money effectively.",
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          onClick={() => navigate(`/onboarding/course-details/${course.id}`)} // Navigate to course details
        >
          <img
            className="w-full rounded-t-xl"
            src={course.image}
            alt={course.title}
          />
          <div className="p-4">
            <p className="text-gray-900 text-lg font-medium">{course.title}</p>
            <p className="text-gray-600 text-sm line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center gap-4 text-gray-600 font-semibold text-md mt-2">
              <p>{course.rating}</p>
              <p>{course.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechTab;
