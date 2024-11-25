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
  const [showModal, setShowModal] = useState<boolean>(false);

  // Questions array
  const questions: Question[] = [
    {
      id: 1,
      text: "Which of the following is a geezer?",
      type: "checkbox", // Multiple-choice
      options: [
        "A trailing blazer",
        "Truth be told",
        "I day design eh",
        "Clearly stated",
      ],
    },
    {
      id: 2,
      text: "Which of the following is a geezer?",
      type: "radio", // Single-choice
      options: [
        "A trailing blazer",
        "Truth be told",
        "I day design eh",
        "Clearly stated",
      ],
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
      // Handle multiple-choice selection
      const selectedOptions = answers[currentQuestion] || [];
      const newSelection = selectedOptions.includes(value)
        ? selectedOptions.filter((item) => item !== value)
        : [...selectedOptions, value];
      setAnswers({ ...answers, [currentQuestion]: newSelection });
      setIsNextEnabled(newSelection.length > 0);
    } else if (questionType === "radio") {
      // Handle single-choice selection
      setAnswers({ ...answers, [currentQuestion]: [value] });
      setIsNextEnabled(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsNextEnabled(false); // Disable "Next" until new input is selected
    }
  };

  const handleSubmit = () => {
    setShowModal(true); // Show the modal on submit
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
                  checked={
                    answers[currentQuestion]?.includes(option) || false
                  }
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
        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setCurrentQuestion(Math.max(0, currentQuestion - 1))
            }
            className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-600"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className={`px-3 py-2 ${
              isNextEnabled
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            } border border-gray-300 rounded-lg text-sm`}
            disabled={!isNextEnabled || currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>

        {/* Submit Button */}
        {currentQuestion === questions.length - 1 && (
          <button
            onClick={handleSubmit}
            className={`px-4 py-2 ${
              isNextEnabled
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            } border border-gray-300 rounded-lg text-sm`}
            disabled={!isNextEnabled}
          >
            Submit
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              🎉 Congratulations!
            </h2>
            <p className="text-center text-gray-600 my-4">
              You have successfully completed the quiz.
            </p>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium mt-4"
              onClick={() => alert("Certificate Earned!")}
            >
              Earn Completion Certificate
            </button>
            <button
              className="w-full px-4 py-2 mt-2 bg-gray-100 text-gray-600 rounded-lg text-sm"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
