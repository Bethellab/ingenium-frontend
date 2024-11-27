import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const countries: string[] = [
  "Nigeria (English)",
  "United States (English)",
  "France (French)",
  "Germany (German)",
  "India (Hindi)",
  "China (Mandarin)",
  // Add more countries as needed
];

const LanguageSelector: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria (English)");


  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (country: string): void => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };
 
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <div
        className="flex gap-10 lg:items-center justify-between px-2 py-2 my-auto bg-white rounded-[100px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-sm font-medium tracking-normal leading-none text-neutral-800">
          <span>{selectedCountry}</span>
        </div>
        <button
          className="flex justify-center items-center min-h-[30px] w-[30px]"
          aria-label="Change language"
        >
          {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-full z-10">
          {countries.map((country, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm font-medium"
              onClick={() => selectCountry(country)}
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;