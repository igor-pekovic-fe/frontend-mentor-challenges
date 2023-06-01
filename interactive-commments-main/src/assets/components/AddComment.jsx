import { useState } from "react";

export default function AddComment({ addComment, currentUser }) {
  const [comment, setComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const time = new Date().toString().split(" ");

    if (comment) {
      addComment({
        id: Date.now(),
        content: comment,
        createdAt: `${time[1]}  ${time[2]}`,
        replies: [],
        score: 1,
        user: {
          username: currentUser.username,
          image: {
            png: currentUser.image.png,
          },
        },
      });
    }
    setComment("");
  };

  return (
    <form className="p-4 m-3 bg-white rounded-lg" onSubmit={handleFormSubmit}>
      <div>
        <textarea
          className="w-full h-24 text-grayish-blue font-medium text-sm outline outline-1 outline-light-gray rounded-lg resize-none mb-4 px-5 py-2"
          type="textarea"
          id="comment"
          value={comment}
          onInput={(e) => setComment(e.target.value)}
          autoFocus
          placeholder="Add a comment..."
          name=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <img
          className="w-8 h-8"
          src="./src/images/avatars/image-juliusomo.png"
          alt=""
        />
        <button
          className="text-white bg-moderate-blue px-7 py-3 rounded-lg"
          type="submit"
          aria-label="add comment"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
