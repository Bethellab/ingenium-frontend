// import BrandSwipe from "@/components/LandingPage/BrandSwipe";
import ContentMgmt from "@/components/LandingPage/ContentMgmt";
import Elearning from "@/components/LandingPage/ELearning";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hiring from "@/components/LandingPage/Hiring";

import Navbar from "@/components/LandingPage/Navbar";
import UnlockExperience from "@/components/LandingPage/UnlockExperience";
import WhatIsIngenium from "@/components/LandingPage/WhatIsIngenium";
import WhoIsIngeniumFor from "@/components/LandingPage/WhoIsIngeniumFor";
import WhyChooseIngenium from "@/components/LandingPage/WhyChooseIngenium";

function LandingPage() {
  return (
    <main className="bg-[#e3edf7]">
     <div className="mx-4 sm:mx-[10%] ">
         <Navbar />
         <Header />
         {/* <BrandSwipe /> */}
         <WhoIsIngeniumFor />
         <WhatIsIngenium />
    
     
     </div>
     <Hiring />
     <Elearning />
     <ContentMgmt />
     <WhyChooseIngenium />
      <UnlockExperience />
     <Footer />
     
    

      
       
    </main>
  );
}

export default LandingPage;
