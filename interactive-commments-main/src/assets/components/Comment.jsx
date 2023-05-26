import { useState } from "react";
import Replies from "./Replies";
import AddReply from "./AddReply";

export default function Comment({ comment, addReply }) {
  const [commentScore, setScore] = useState(comment.score);
  const [isReplying, setIsReplying] = useState(false);

  function stopReplying() {
    setIsReplying(!isReplying);
  }

  function upvoteComment() {
    setScore((prevScore) => prevScore + 1);
  }

  function downvoteComment() {
    setScore((prevScore) => prevScore - 1);
  }

  return (
    <div>
      <div className="p-3 m-3 bg-white rounded-lg ">
        <div className="flex gap-2 mb-3 items-center">
          <img
            className="w-8 h-8 mr-1"
            src={`src/${comment.user.image.png}`}
            alt=""
          />
          <p className="font-bold text-dark-blue">{comment.user.username}</p>
          {comment.user.username == "Igor" && (
            <span className="bg-moderate-blue text-white text-xs font-bold px-1">
              you
            </span>
          )}
          <p className="font-medium text-grayish-blue">{comment.createdAt}</p>
        </div>
        <p className="mb-3 text-grayish-blue">{comment.content}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-auto bg-very-light-gray px-4 py-2 rounded-lg">
            <button onClick={() => upvoteComment()}>
              <img
                className="w-3 h-3"
                src="./src/images/icon-plus.svg"
                alt=""
              />
            </button>
            <p className="font-bold text-moderate-blue">{commentScore}</p>
            <button onClick={() => downvoteComment()}>
              <img
                className="w-3 h-1"
                src="./src/images/icon-minus.svg"
                alt=""
              />
            </button>
          </div>
          <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
        </div>
        {isReplying && (
          <AddReply
            addReply={addReply}
            id={comment.id}
            comment={comment}
            stopReplying={stopReplying}
          />
        )}
      </div>

      <div className="w-11/12 ml-auto border-l-2 border-light-gray">
        {comment.replies.length > 0 && <Replies replies={comment.replies} />}
      </div>
    </div>
  );
}
