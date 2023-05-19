import { useState } from "react";
import Score from "./Score";
import Replies from "./Replies";
import AddReply from "./AddReply";

export default function Comment({
  comment,
  upvoteComment,
  downvoteComment,
  addReply,
}) {
  const [isReplying, setIsReplying] = useState(false);
  console.log(isReplying);
  return (
    <div>
      <div className="p-3 m-3 bg-white rounded-lg ">
        <div className="flex gap-2 mb-3 items-center">
          <img
            className="w-8 h-8 mr-1"
            src="./src/images/avatars/image-amyrobson.png"
            alt=""
          />
          <p className="font-bold text-dark-blue">{comment.user.username}</p>
          {comment.user.username == "Igor" ? (
            <p className="bg-moderate-blue text-white text-xs font-bold px-1">
              you
            </p>
          ) : null}
          <p className="font-medium text-grayish-blue">{comment.createdAt}</p>
        </div>
        <p className="mb-3 text-grayish-blue">{comment.content}</p>
        <div className="flex justify-between">
          <Score
            id={comment.id}
            score={comment.score}
            upvoteComment={upvoteComment}
            downvoteComment={downvoteComment}
          />
          <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
        </div>
      </div>
      {isReplying ? <AddReply addReply={addReply} /> : null}
      <div className="w-11/12 ml-auto border-l-2 border-light-gray">
        {comment.replies ? (
          <Replies
            replies={comment.replies}
            upvoteComment={upvoteComment}
            downvoteComment={downvoteComment}
          />
        ) : null}
      </div>
    </div>
  );
}
