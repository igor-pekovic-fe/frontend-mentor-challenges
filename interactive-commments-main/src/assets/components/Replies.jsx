import Reply from "./Reply";

export default function Replies({ replies, deleteItem, editItem }) {
  const repliesArr = replies.map((reply) => (
    <Reply
      content={reply.content}
      id={reply.id}
      key={reply.id}
      score={reply.score}
      replyingTo={reply.replyingTo}
      user={reply.user}
      createdAt={reply.createdAt}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  ));

  return <div>{repliesArr}</div>;
}
