import Score from "./Score";

export default function Reply({
  content,
  id,
  score,
  replyingTo,
  username,
  createdAt,
  upvoteComment,
  downvoteComment,
}) {
  return (
    <div className="p-3 m-3 bg-white rounded-lg ">
      <div className="flex gap-3 mb-3 items-center">
        <img
          className="w-8 h-8"
          src="./src/images/avatars/image-amyrobson.png"
          alt=""
        />
        <p className="font-bold text-dark-blue">{username}</p>
        <p className="font-medium text-grayish-blue">{createdAt}</p>
      </div>
      <p className="mb-3 text-grayish-blue">
        <span className="text-moderate-blue font-bold mr-2">{`@${replyingTo}`}</span>
        {content}
      </p>
      <div className="flex justify-between">
        <Score
          id={id}
          score={score}
          upvoteComment={upvoteComment}
          downvoteComment={downvoteComment}
        />
        <p>Reply</p>
      </div>
    </div>
  );
}
