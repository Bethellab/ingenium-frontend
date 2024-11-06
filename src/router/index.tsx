import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/landing-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export { router };
