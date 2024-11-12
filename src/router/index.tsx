import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/landing-page";
import SignupForm from "@/pages/signup-page";
// import LoginForm from "@/components/SignIn/LoginForm";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage />},
  {path:"/signup/:userType", element: <SignupForm />},
  // {path:"/login", element: <LoginForm />}
]);

export { router };
