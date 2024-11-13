import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import SignupForm from "@/pages/signup-page";
import InviteYourTeamMember from "@/components/SignIn/InviteYourTeamMember";
import ActivateAccount from "@/components/SignIn/ActivateAccount";
import ChooseYourPlan from "@/components/SignIn/ChooseYourPlan";
// import LoginForm from "@/components/SignIn/LoginForm";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage />},
  {path:"/signup/:userType", element: <SignupForm />},
 {path:"/invite", element: <InviteYourTeamMember />},
 {path:"/activate", element: <ActivateAccount />},
 {path:"/chooseyourplan", element: <ChooseYourPlan />}
]);

export { router };
