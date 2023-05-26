import { useState } from "react";

export default function AddReply({ addReply, id, comment, stopReplying }) {
  const [reply, setReply] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const time = new Date().toString().split(" ");

    if (reply) {
      addReply(
        {
          id: Date.now(),
          content: reply,
          createdAt: `${time[1]}  ${time[2]}`,
          replies: [],
          replyingTo: id == comment.id && `${comment.user.username}`,
          score: 1,
          user: {
            username: "Igor",
            image: {
              png: "./images/avatars/image-juliusomo.png",
            },
          },
        },
        id
      );
    }
    setReply("");
    stopReplying();
  };

  return (
    <form className="p-4 m-3 bg-white rounded-lg" onSubmit={handleFormSubmit}>
      <div>
        <textarea
          className="w-full h-24 text-grayish-blue font-medium text-sm outline outline-1 outline-light-gray rounded-lg resize-none mb-4 px-5 py-2"
          type="textarea"
          id="reply"
          value={reply}
          onInput={(e) => setReply(e.target.value)}
          autoFocus
          placeholder="Add reply..."
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
          className="text-white bg-moderate-blue font-bold px-7 py-3 rounded-lg"
          type="submit"
          aria-label="add reply"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
