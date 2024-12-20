import { createBrowserRouter } from "react-router-dom";

import BellasLayout from "@/pages/bellas-page";
import BellasHome from "@/pages/bellas-page/BellasHome";
import Details from "@/pages/bellas-page/Details";
import Success from "@/pages/bellas-page/Success";
import Login from "@/pages/bellas-page/Login";
import SignUp from "@/pages/bellas-page/SignUp";
import ResetPassword from "@/pages/bellas-page/ResetPassword";
import UpdatePassword from "@/pages/bellas-page/UpdatePassword";
import BellaLandingPage from "@/pages/bellas-page/LandingPage/BellaLandingPage";
import BellasLandingHome from "@/pages/bellas-page/LandingPage/BellasLandingHome";






const router = createBrowserRouter([
 

  
 

  {
    
    element: <BellasLayout />,
    children: [
      { path: "/bellas-home", element: <BellasHome /> },
      {path: "/details/:id", element : <Details /> },
      {path: "/success", element : <Success/> },
      {path: "/bella-login", element : <Login /> },
      {path: "/bella-signup", element : <SignUp /> },
      {path: "/bella-reset", element : <ResetPassword /> },
      {path: "/bella-update", element : <UpdatePassword /> },




    ],
  },


 
  {
    
    element: <BellaLandingPage />,
    children: [
      { path: "/bellas-landing", element: <BellasLandingHome /> },
     
    ],
  },




 


 

]);

export { router }; 
