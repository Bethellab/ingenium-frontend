
import ContactSection from './ContactSection';
import LegalSection from './LegalSection';
import LanguageSelector from './LanguageSelector';
import SocialIcons from './SocialIcons';
import { image } from '@/assets/image/image';



const Footer = () => {
  return (
    <footer className="flex relative flex-col gap-16 px-20 pt-24 pb-0 bg-[#0054A6] max-md:px-5 mt-8">
      <div className="flex z-0 flex-col w-full lg:max-md:max-w-full">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start w-full font-medium lg:h-[136px] lg:max-md:max-w-full">
          <div className="flex flex-col py-2 text-lg tracking-normal leading-7 min-w-[240px] text-neutral-200 w-[251px]">
            <img src={image.footer_logo} alt="logo" className="object-contain bg-blend-normal aspect-[2.97] w-[83px]" />
            <p className="mt-3.5">Lorem ipsum dolor sit amet euismod Feugiat in elementum quis euismod.</p>
          </div>
          <div className="flex gap-8 items-start min-w-[240px]">
            <ContactSection />
            <LegalSection />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-center py-8 mt-10 lg:w-full border-t border-b border-white border-opacity-20 min-h-[112px] max-md:max-w-full">
          <LanguageSelector />
          <SocialIcons />
        </div>
        <p className="mt-10 text-base font-medium text-stone-50 max-md:max-w-full">© Ingenium Concept 2023. All Rights Reserved.</p>
        <p className="mt-10 text-md tracking-normal leading-5 text-zinc-100 max-md:max-w-full">Lorem ipsum dolor sit amet consectetur. Purus parturient sed at eget lectus accumsan. Arcu nibh neque venenatis a libero nunc vel rhoncus. Mattis vel semper quam viverra nulla. Euismod pulvinar fermentum integer eu. Platea dictum posuere est cras proin ut malesuada. Egestas dui diam iaculis nunc lorem. Id et tellus lobortis bibendum congue.Lacus lacus mattis eget tellus amet massa nisl erat quis. Placerat nibh lacinia ullamcorper mattis tristique id mi feugiat. Arcu est id fermentum arcu nunc venenatis pulvinar eget. </p>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d334a421dc12e82e076718bea10286be8023089967554b9d4bc6d40c967f7d3?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7" alt="" className="object-contain z-0 -mt-6 md:mt-4 w-full aspect-[6.41] " />
      <div className="absolute inset-x-0 bottom-0 h-8 lg:h-24 bg-gradient-to-t from-black opacity-300"></div>
    </footer>
  );
};

export default Footer;