import React, { useState } from "react";
import TechTab from "./TechTab";


type Tab = {
  label: string;
  content: React.ReactNode;
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    { label: "Tech", content: <TechTab /> },
    { label: "Finance", content: '' },
    { label: "Engineering", content: ''},
    { label: "Design", content: ''},
    { label: "Sales", content: ''},
  ];

  return (
    <div className=" mt-4">
      {/* Tab Header */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-md font-medium ${
              activeTab === index
                ? "border-b-4 border-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
