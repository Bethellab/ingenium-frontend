import React from 'react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex gap-10 lg:items-center justify-between  px-2 py-2 my-auto bg-white  rounded-[100px]">
      <div className="flex gap-2 items-center my-auto text-sm font-medium tracking-normal leading-none text-neutral-800">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ac70f3876ea6a88b61b71ec11a467814e69cdaf5d33bb8d65c2c49e37dcf6fa?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
        <span>Nigeria (English)</span>
      </div>
      <button className="flex gap-2.5 justify-center items-center self-stretch my-auto min-h-[30px] w-[30px]" aria-label="Change language">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ef7ab53c51ab3da999303e8c7205e7c8c1f33334751c12dfa262e633052b519?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </button>
    </div>
  );
};

export default LanguageSelector;