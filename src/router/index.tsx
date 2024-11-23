import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import SignupForm from "@/pages/signup-page";
import InviteYourTeamMember from "@/components/SignIn/InviteYourTeamMember";
import ActivateAccount from "@/components/SignIn/ActivateAccount";
import ChooseYourPlan from "@/components/SignIn/ChooseYourPlan";
import UserAcceptInviteLink from "@/components/SignIn/UserAcceptInviteLink";
import OnboardingLayout from "@/pages/onboarding-page";

import Home from "@/components/Onboarding/Home";
import Courses from "../components/Onboarding/Courses";
import Learning from "../components/Onboarding/Learning";
import TechCourseDetails from "@/components/Onboarding/Home/HomeTabs/TechTab/TechCourseDetails";
import LessonDetails from "@/components/Onboarding/Home/HomeTabs/TechTab/TechCourseDetails/LessonDetails";
import LearningCourse from "@/components/Onboarding/Learning/LearningCourse";
import Analytics from "@/components/Onboarding/Courses/Analytics";
import Affiliates from "@/components/Onboarding/Affiliates";
import AddNewAffiliate from "@/components/Onboarding/Affiliates/AddNewAffiliate";
// import LoginForm from "@/components/SignIn/LoginForm";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup/:userType", element: <SignupForm /> },
  { path: "/invite", element: <InviteYourTeamMember /> },
  { path: "/activate", element: <ActivateAccount /> },
  { path: "/chooseyourplan", element: <ChooseYourPlan /> },
  { path: "/useracceptinvitelink", element: <UserAcceptInviteLink /> },
  {
    path: "/onboarding",
    element: <OnboardingLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "/onboarding/course-details/:id", element: <TechCourseDetails /> },
      { path: "/onboarding/home/course/:courseId/lesson/:lessonId", element: <LessonDetails /> },
      { path: "courses", element: <Courses /> },
      { path: "/onboarding/courses/analytics", element: <Analytics /> },
      { path: "mylearning", element: <Learning /> },
      { path: "/onboarding/mylearning/learning", element: <LearningCourse /> },
      { path: "affiliaties", element: <Affiliates/> },
      { path: "/onboarding/addnewaffiliate", element: <AddNewAffiliate/> },





    ],
  },

]);

export { router };
