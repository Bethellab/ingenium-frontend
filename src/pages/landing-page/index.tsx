// import BrandSwipe from "@/components/LandingPage/BrandSwipe";
import BrandSwipe from "@/components/LandingPage/BrandSwipe";
import ContentMgmt from "@/components/LandingPage/ContentMgmt";
import Elearning from "@/components/LandingPage/ELearning";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hiring from "@/components/LandingPage/Hiring";
import HRTransform from "@/components/LandingPage/HRTransfrom";


import Navbar from "@/components/LandingPage/Navbar";
import RealWorldSuccess from "@/components/LandingPage/RealWorldSuccess";
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
        <BrandSwipe />
        <WhoIsIngeniumFor />
        <WhatIsIngenium />
      </div>
      <div>
        <Hiring />
        <Elearning />
        <ContentMgmt />
        <RealWorldSuccess />
        <WhyChooseIngenium />
        <UnlockExperience />
        <HRTransform />
        <Footer />

      </div>
    </main>
  );
}

export default LandingPage;
