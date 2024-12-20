import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:w-[155px]">
      <h2 className="text-lg tracking-normal leading-loose text-white">Contact</h2>
      <div className="flex flex-col self-start mt-5 text-base tracking-normal text-stone-50">
        <a href="mailto:support@example.com" className="hover:underline">Email Support</a>
        <a href="https://twitter.com/support" className="mt-4 hover:underline">Twitter Support</a>
      </div>
    </div>
  );
};

export default ContactSection;