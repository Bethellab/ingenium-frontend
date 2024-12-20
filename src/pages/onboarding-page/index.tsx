import Navbar from "@/components/Onboarding/Navbar";

import { Outlet } from "react-router-dom";




const OnboardingLayout = () => {
    return (
      <div>
        <Navbar />
        <main className="p-4 py-1">
        <Outlet /> 
        </main>
      </div>
    );
  };
  
export default OnboardingLayout;