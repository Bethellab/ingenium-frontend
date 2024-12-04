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
import AffiliateList from "@/components/Onboarding/Affiliates/AffiliateList/AffliateList";
import Quiz from "@/components/Onboarding/Home/HomeTabs/TechTab/TechCourseDetails/LessonDetails/Quiz";
import UploadVideo from "@/components/Onboarding/Courses/UploadVideo";
import LoginForm from "@/components/SignIn/LoginForm";
import ForgotPasswordForm from "@/components/SignIn/ForgotPassword";



const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup/:userType", element: <SignupForm /> },
  { path: "/login", element: <LoginForm setFormType={() => {}} /> },
  { path: "/forgotpassword", element: <ForgotPasswordForm /> },
  
  { path: "/invite", element: <InviteYourTeamMember /> },
  { path: "/activate", element: <ActivateAccount /> },
  { path: "/chooseyourplan", element: <ChooseYourPlan /> },
  { path: "/useracceptinvitelink", element: <UserAcceptInviteLink /> },


  
  {
    
    element: <OnboardingLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/course-details/:id", element: <TechCourseDetails /> },
      { path: "/home/course/:courseId/lesson/:lessonId", element: <LessonDetails /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/analytics", element: <Analytics /> },
      { path: "/courses/uploadvideo", element: <UploadVideo /> },
      { path: "/mylearning", element: <Learning /> },
      { path: "/mylearning/learning", element: <LearningCourse /> },
      { path: "/affiliaties", element: <Affiliates/> },
      { path: "/addnewaffiliate", element: <AddNewAffiliate/> },
      { path: "/affiliatelist", element: <AffiliateList/> },
      { path: "/home/quiz", element: <Quiz/> },

    ],
  },

]);

export { router };
