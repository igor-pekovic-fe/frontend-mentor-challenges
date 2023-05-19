import Reply from "./Reply";

export default function Replies({ upvoteComment, downvoteComment, replies }) {
  const repliesArr = replies.map((reply) => (
    <div>
      <Reply
        content={reply.content}
        id={reply.id}
        score={reply.score}
        replyingTo={reply.replyingTo}
        username={reply.user.username}
        createdAt={reply.createdAt}
        upvoteComment={upvoteComment}
        downvoteComment={downvoteComment}
      />
    </div>
  ));

  return <div>{repliesArr}</div>;
}
