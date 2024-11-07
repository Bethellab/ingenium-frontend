import React from 'react';

const LegalSection: React.FC = () => {
  return (
    <div className="flex flex-col w-[155px]">
      <h2 className="text-lg tracking-normal leading-loose text-white">Legal</h2>
      <div className="flex flex-col self-start mt-5 text-base tracking-normal text-stone-50">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-service" className="mt-4 hover:underline">Terms of Service</a>
      </div>
    </div>
  );
};

export default LegalSection;