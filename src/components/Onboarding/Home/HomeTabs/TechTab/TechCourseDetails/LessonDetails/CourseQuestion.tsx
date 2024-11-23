import React, { useState } from "react";
import { FaReply, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { image } from "../../../../../../../assets/image/image";

// Define the types for props
interface QuestionCardProps {
  userName: string;
  timeAgo: string;
  text: string;
  profileImg: string;
  replies: QuestionData[];
  onReply: (reply: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  userName,
  timeAgo,
  text,
  profileImg,
  replies,
  onReply,
}) => {
  const [showReplies, setShowReplies] = useState<boolean>(true);
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false);
  const [replyInput, setReplyInput] = useState<string>("");

  const handleReplySubmit = () => {
    if (replyInput.trim()) {
      onReply(replyInput.trim());
      setReplyInput("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Question/Comment Section */}
      <div className="flex gap-5 items-start">
        {/* Profile Image */}
        <div className="w-10 h-10 shrink-0">
          <img src={profileImg} alt={`${userName} profile`} className="rounded-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 w-full">
          {/* User Info */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-lg">{userName}</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-gray-500 text-md">{timeAgo}</span>
          </div>

          {/* Question Text */}
          <p className="text-base text-gray-800">{text}</p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-md "
              onClick={() => setShowReplyInput(!showReplyInput)}
            >
              <FaReply /> Reply
            </button>
            <button
              className="flex items-center gap-2 text-md text-gray-500"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? <FaChevronUp /> : <FaChevronDown />}
              {showReplies ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      {showReplies && replies.length > 0 && (
        <div className="ml-14 mt-4 flex flex-col gap-4">
          {replies.map((reply, index) => (
            <QuestionCard
              key={index}
              {...reply}
              onReply={(newReply) => onReply(newReply)}
            />
          ))}
        </div>
      )}

      {/* Reply Input */}
      {showReplyInput && (
        <div className="flex gap-3 items-start ml-14 mt-2">
          <textarea
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            placeholder="Write a reply..."
            className="flex-grow p-2 border rounded-lg text-gray-600"
          />
          <button
            onClick={handleReplySubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      )}

      
    </div>
  );
};

interface QuestionData {
  userName: string;
  timeAgo: string;
  text: string;
  profileImg: string;
  replies: QuestionData[];
}

const CourseQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([
    {
      userName: "Henry Uku",
      timeAgo: "2 sec ago",
      text: "If they carry on with their plans, then a likely outcome, is the Billy-No-Mates scenario, Scotland and Wales rejoining the EU as independent nations, NI folded into a new Ireland. Leaving England alone with its glorious past. ",
      profileImg: image.person1,
      replies: [],
    },
    {
      userName: "Hillary Omitogun",
      timeAgo: "5 min ago",
      text: "If they carry on with their plans, then a likely outcome, is the Billy-No-Mates scenario, Scotland and Wales rejoining the EU as independent nations, NI folded into a new Ireland. Leaving England alone with its glorious past. ",
      profileImg: image.person2,
      replies: [],
    },
  ]);

  const handleReply = (index: number, reply: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, i) =>
        i === index
          ? { ...q, replies: [...q.replies, { userName: "You", timeAgo: "Just now", text: reply, profileImg: image.person1, replies: [] }] }
          : q
      )
    );
  };

  return (
    <div className="flex flex-col gap-6 py-4">
      <AskQuestionSection />
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          {...question}
          onReply={(reply) => handleReply(index, reply)}
        />
      ))}

      <div className="flex justify-center items-center">
        <button className="text-md border py-2 px-2 w-80">View more questions</button>
      </div>
    </div>
  );
};

const AskQuestionSection: React.FC = () => (
  <div className="flex flex-col gap-5 w-full">
    <div className="flex gap-3 items-start">
      <div className="w-10 h-10 bg-gray-200 rounded-full" />
      <div className="flex items-center gap-5 w-full p-4 border border-gray-300 rounded-lg">
        <textarea
          placeholder="Ask a question"
          className="flex-grow outline-none text-base text-gray-600 h-24"
        />
      </div>
    </div>
  </div>
);

export default CourseQuestions;
