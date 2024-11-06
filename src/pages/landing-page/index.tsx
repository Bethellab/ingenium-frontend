// import BrandSwipe from "@/components/LandingPage/BrandSwipe";
import ContentMgmt from "@/components/LandingPage/ContentMgmt";
import Elearning from "@/components/LandingPage/ELearning";
import Header from "@/components/LandingPage/Header";
import Hiring from "@/components/LandingPage/Hiring";

import Navbar from "@/components/LandingPage/Navbar";
import WhatIsIngenium from "@/components/LandingPage/WhatIsIngenium";
import WhoIsIngeniumFor from "@/components/LandingPage/WhoIsIngeniumFor";

function LandingPage() {
  return (
    <main className="bg-[#ccdded]">
     <div className="mx-4 sm:mx-[10%] ">
         <Navbar />
         <Header />
         {/* <BrandSwipe /> */}
         <WhoIsIngeniumFor />
       
     </div>
     <WhatIsIngenium />
     <Hiring />
     <Elearning />
     <ContentMgmt />

      
      
     
     
     
    </main>
  );
}

export default LandingPage;
