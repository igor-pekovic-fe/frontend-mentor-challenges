import { useState } from "react";
import "./App.css";
import data from "../data.json";
import Comment from "./assets/components/Comment";
import AddComment from "./assets/components/AddComment";

function App() {
  const [comments, setComments] = useState(data.comments);

  const addComment = (comment) => {
    setComments((prevState) => [...prevState, comment]);
  };

  const addReply = (reply) => {
    setComments((prevState) =>
      prevState.map((comment) => {
        return { ...comment, replies: reply };
      })
    );
  };

  const upvoteComment = (commentId) => {
    console.log(commentId);
    setComments((prevState) =>
      prevState.map((comment) =>
        comment.id == commentId
          ? { ...comment, score: comment.score + 1 }
          : comment
      )
    );
  };

  const downvoteComment = (commentId) => {
    setComments((prevState) =>
      prevState.map((comment) =>
        comment.id == commentId
          ? { ...comment, score: comment.score - 1 }
          : comment
      )
    );
  };

  const commentsArr = comments.map((comment) => (
    <Comment
      comment={comment}
      upvoteComment={upvoteComment}
      downvoteComment={downvoteComment}
      addReply={addReply}
    />
  ));

  return (
    <div>
      {commentsArr}
      <AddComment addComment={addComment} />
    </div>
  );
}

export default App;
