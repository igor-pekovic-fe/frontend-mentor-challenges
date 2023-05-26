import { useState } from "react";

export default function Reply({ content, score, replyingTo, user, createdAt }) {
  const [replyScore, setReplyScore] = useState(score);

  function upvoteReply() {
    setReplyScore((prevScore) => prevScore + 1);
  }

  function downvoteReply() {
    setReplyScore((prevScore) => prevScore - 1);
  }
  return (
    <div className="p-3 m-3 bg-white rounded-lg ">
      <div className="flex gap-3 mb-3 items-center">
        <img className="w-8 h-8" src={`src/${user.image.png}`} alt="" />
        <p className="font-bold text-dark-blue">{user.username}</p>
        {user.username == "Igor" && (
          <span className="bg-moderate-blue text-white text-xs font-bold px-1">
            you
          </span>
        )}
        <p className="font-medium text-grayish-blue">{createdAt}</p>
      </div>
      <p className="mb-3 text-grayish-blue">
        <span className="text-moderate-blue font-bold mr-2">{`@${replyingTo}`}</span>
        {content}
      </p>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 w-auto bg-very-light-gray px-4 py-2 rounded-lg">
          <button onClick={() => upvoteReply()}>
            <img className="w-3 h-3" src="./src/images/icon-plus.svg" alt="" />
          </button>
          <p className="font-bold text-moderate-blue">{replyScore}</p>
          <button onClick={() => downvoteReply()}>
            <img className="w-3 h-1" src="./src/images/icon-minus.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
