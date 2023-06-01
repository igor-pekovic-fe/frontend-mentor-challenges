import { useState } from "react";
import data from "../data.json";
import Comment from "./assets/components/Comment";
import AddComment from "./assets/components/AddComment";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [currentUser, setCurrentUser] = useState(data.currentUser);

  console.log(comments);

  const addComment = (comment) => {
    setComments((prevState) => [...prevState, comment]);
  };

  const addReply = (reply, id) => {
    setComments((prevState) =>
      prevState.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [...comment.replies, reply],
            }
          : comment
      )
    );
  };

  const deleteItem = (itemId, isComment) => {
    setComments((prevState) => {
      if (isComment) {
        return prevState.filter((comment) => comment.id !== itemId);
      } else {
        return prevState.map((comment) => {
          return {
            ...comment,
            replies: comment.replies.filter((reply) => reply.id !== itemId),
          };
        });
      }
    });
  };

  const editItem = (itemId, content, isComment) => {
    setComments((prevState) => {
      if (isComment) {
        return prevState.map((comment) => {
          if (comment.id === itemId) {
            return {
              ...comment,
              content: content,
            };
          } else {
            return comment;
          }
        });
      } else {
        return prevState.map((comment) => {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === itemId) {
                return {
                  ...reply,
                  content: content,
                };
              } else {
                return reply;
              }
            }),
          };
        });
      }
    });
  };

  const commentsArr = comments.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      addReply={addReply}
      currentUser={currentUser}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  ));

  return (
    <div className="max-w-sm xl:max-w-2xl">
      {commentsArr}
      <AddComment addComment={addComment} currentUser={currentUser} />
    </div>
  );
}

export default App;
