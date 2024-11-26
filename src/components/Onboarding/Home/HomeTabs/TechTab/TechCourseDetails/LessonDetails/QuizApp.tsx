import { image } from "@/assets/image/image";
import { useState } from "react";

interface Question {
  id: number;
  text: string;
  type: "checkbox" | "radio"; // Question type
  options: string[];
}

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [isNextEnabled, setIsNextEnabled] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [showCongratsModal, setShowCongratsModal] = useState<boolean>(false);
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);

  // Questions array
  const questions: Question[] = [
    {
      id: 1,
      text: "Which of the following is a geezer?",
      type: "checkbox", // Multiple-choice
      options: ["A trailing blazer", "Truth be told", "I day design eh", "Clearly stated"],
    },
    {
      id: 2,
      text: "Which of the following is a geezer?",
      type: "radio", // Single-choice
      options: ["A trailing blazer", "Truth be told", "I day design eh", "Clearly stated"],
    },
    {
      id: 3,
      text: "Which of the following is a geezer?",
      type: "radio", // True/False
      options: ["True", "False"],
    },
  ];

  const handleOptionChange = (value: string) => {
    const questionType = questions[currentQuestion].type;

    if (questionType === "checkbox") {
      const selectedOptions = answers[currentQuestion] || [];
      const newSelection = selectedOptions.includes(value)
        ? selectedOptions.filter((item) => item !== value)
        : [...selectedOptions, value];
      setAnswers({ ...answers, [currentQuestion]: newSelection });
      setIsNextEnabled(newSelection.length > 0);
    } else if (questionType === "radio") {
      setAnswers({ ...answers, [currentQuestion]: [value] });
      setIsNextEnabled(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsNextEnabled(false);
    }
  };

  const handleSubmit = () => {
    if (currentQuestion === questions.length - 1) {
      // Show congratulations modal on the last question
      setShowCongratsModal(true);
    } else {
      // Show confirmation modal on other questions
      setShowConfirmationModal(true);
    }
  };

  const confirmSubmit = () => {
    // Handle the final submission logic here (if needed)
    setShowConfirmationModal(false);
    alert("Quiz submitted!");
  };

  return (
    <div className="w-full my-8 flex flex-col gap-6 items-start relative">
      {/* Question Card */}
      <div className="w-full bg-white border border-gray-300 rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-medium text-gray-800">
            Question {currentQuestion + 1}
          </span>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-medium text-gray-800">
              {questions[currentQuestion].text}
            </span>
            <span className="text-sm text-gray-500">
              {questions[currentQuestion].type === "checkbox"
                ? "Select multiple options"
                : "Select one option"}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className="flex items-center bg-white border border-gray-300 rounded-lg p-3 gap-2 cursor-pointer"
              >
                <input
                  type={questions[currentQuestion].type}
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion]?.includes(option) || false}
                  onChange={() => handleOptionChange(option)}
                  className="w-5 h-5 cursor-pointer accent-blue-500"
                />
                <span className="text-base text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-600"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className={`px-3 py-2 ${isNextEnabled ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
              } border border-gray-300 rounded-lg text-sm`}
            disabled={!isNextEnabled || currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 ${isNextEnabled ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
            } border border-gray-300 rounded-lg text-sm`}
        >
          Submit
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-800">Are you sure?</h2>
            <p className="text-gray-600 mt-2">Do you want to submit the quiz?</p>
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={confirmSubmit}
              >
                Yes, Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Congratulations Modal */}
      {showCongratsModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
         {/* Close Icon */}
         <button
           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
           onClick={() => setShowCongratsModal(false)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M6 18L18 6M6 6l12 12"
             />
           </svg>
         </button>
     
         {/* Modal Content */}
         <img src={image.teaching} />
         <h2 className="text-3xl font-semibold text-center text-gray-800">
           🎉 Congratulations!
         </h2>
         <p className="text-center text-gray-600 my-2">
           Congrats! You’ve successfully completed this course
         </p>
         <button
           className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium mt-10"
           onClick={() => setShowCertificateModal(true)}
         >
           Earn Completion Certificate
         </button>
       </div>
     </div>
     
      )}

      {showCertificateModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="relative bg-white rounded-lg shadow-lg flex py-16 px-10 lg:w-[1000px]">
         {/* Close Icon */}
         <button
           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
           onClick={() => setShowCertificateModal(false)}
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M6 18L18 6M6 6l12 12"
             />
           </svg>
         </button>
     
         {/* Left Section */}
         <div className="p-6 flex flex-col justify-center gap-4 w-2/3">
           <h2 className="text-4xl font-semibold text-gray-800">
             Congratulations!
           </h2>
           <p className="text-lg text-gray-600">
             You have completed the Financial Literacy Course!
           </p>
         </div>
     
         {/* Right Section */}
         <div className="p-6 bg-white w-1/3 flex flex-col gap-4 items-center border rounded-md border-gray-300">
           <img src={image.signinlogo} alt="" className="w-24" />
           <p className="text-gray-800 text-2xl font-medium">Financial Literacy</p>
           <img src={image.check_circle} />
           <p className="text-sm text-gray-600">Completion Certificate</p>
         </div>
       </div>
     </div>
     
      )}


    </div>

  );
};

export default QuizApp;
