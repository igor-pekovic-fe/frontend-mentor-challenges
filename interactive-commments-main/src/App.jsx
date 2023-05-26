import { useState } from "react";
import data from "../data.json";
import Comment from "./assets/components/Comment";
import AddComment from "./assets/components/AddComment";

function App() {
  const [comments, setComments] = useState(data.comments);
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

  const commentsArr = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} addReply={addReply} />
  ));

  return (
    <div>
      {commentsArr}
      <AddComment addComment={addComment} />
    </div>
  );
}

export default App;
