import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import SignupForm from "@/pages/signup-page";
import InviteYourTeamMember from "@/components/SignIn/InviteYourTeamMember";
import ActivateAccount from "@/components/SignIn/ActivateAccount";
import ChooseYourPlan from "@/components/SignIn/ChooseYourPlan";
import UserAcceptInviteLink from "@/components/SignIn/UserAcceptInviteLink";
import OnboardingLayout from "@/pages/onboarding-page";
import Home from "@/components/Onboarding/Home";
import Courses from "@/components/Onboarding/Courses";
import Learning from "@/components/Onboarding/Learning";
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
      { path: "courses", element: <Courses /> },
      { path: "mylearning", element: <Learning /> },
    ],
  },

]);

export { router };
