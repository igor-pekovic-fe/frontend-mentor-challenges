import Reply from "./Reply";

export default function Replies({ replies }) {
  const repliesArr = replies.map((reply) => (
    <div>
      <Reply
        content={reply.content}
        id={reply.id}
        key={reply.id}
        score={reply.score}
        replyingTo={reply.replyingTo}
        user={reply.user}
        createdAt={reply.createdAt}
      />
    </div>
  ));

  return <div>{repliesArr}</div>;
}
