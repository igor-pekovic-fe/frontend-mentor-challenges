import { useState } from "react";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";

export default function Reply({
  id,
  content,
  score,
  replyingTo,
  user,
  createdAt,
  deleteItem,
  editItem,
}) {
  const [replyScore, setReplyScore] = useState(score);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function upvoteReply() {
    setReplyScore((prevScore) => prevScore + 1);
  }

  function downvoteReply() {
    setReplyScore((prevScore) => prevScore - 1);
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg xl:p-6 xl:flex xl:gap-7 ">
      <div className="hidden xl:flex flex-col items-center gap-4 w-28 h-fit bg-very-light-gray py-3 rounded-lg xl:w-10 xl:p-4">
        <button onClick={() => upvoteReply()}>
          <img className="w-3 h-3" src="./src/images/icon-plus.svg" alt="" />
        </button>
        <p className="font-bold text-moderate-blue">{replyScore}</p>
        <button onClick={() => downvoteReply()}>
          <img className="w-3 h-1" src="./src/images/icon-minus.svg" alt="" />
        </button>
      </div>
      <div>
        <div className="flex gap-3 mb-3 items-center xl:w-full">
          <img className="w-8 h-8" src={`src/${user.image.png}`} alt="" />
          <p className="font-bold text-dark-blue">{user.username}</p>
          {user.username == "juliusomo" && (
            <span className="bg-moderate-blue text-white text-xs font-bold px-1">
              you
            </span>
          )}
          <p className="font-medium text-grayish-blue">{createdAt}</p>
          {user.username == "juliusomo" && (
            <div className="hidden gap-4 ml-auto xl:flex">
              <button
                onClick={() => setIsDeleting((prevState) => !prevState)}
                className="flex gap-2 items-center"
              >
                <img src="./src/images/icon-delete.svg" alt="" />
                <p className="font-bold text-soft-red">Delete</p>
              </button>
              <button
                onClick={() => setIsEditing((prevState) => !prevState)}
                className="flex gap-2 items-center"
              >
                <img src="./src/images/icon-edit.svg" alt="" />
                <p className="font-bold text-moderate-blue">Edit</p>
              </button>
              {isDeleting && (
                <DeleteItem
                  id={id}
                  setIsDeleting={setIsDeleting}
                  deleteItem={deleteItem}
                />
              )}
            </div>
          )}
        </div>

        {isEditing ? (
          <EditItem
            content={content}
            onSave={(updatedContent) => editItem(id, updatedContent, false)}
            setIsEditing={setIsEditing}
          />
        ) : (
          <div>
            <p className="mb-3 text-grayish-blue">
              <span className="text-moderate-blue font-bold mr-2">{`@${replyingTo}`}</span>
              {content}
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-4 w-auto bg-very-light-gray px-4 py-2 rounded-lg xl:hidden">
                <button onClick={() => upvoteReply()}>
                  <img
                    className="w-3 h-3"
                    src="./src/images/icon-plus.svg"
                    alt=""
                  />
                </button>
                <p className="font-bold text-moderate-blue">{replyScore}</p>
                <button onClick={() => downvoteReply()}>
                  <img
                    className="w-3 h-1"
                    src="./src/images/icon-minus.svg"
                    alt=""
                  />
                </button>
              </div>
              {user.username == "juliusomo" && (
                <div className="flex gap-4 xl:hidden">
                  <button
                    onClick={() => setIsDeleting((prevState) => !prevState)}
                    className="flex gap-2 items-center"
                  >
                    <img src="./src/images/icon-delete.svg" alt="" />
                    <p className="font-bold text-soft-red">Delete</p>
                  </button>
                  <button
                    onClick={() => setIsEditing((prevState) => !prevState)}
                    className="flex gap-2 items-center"
                  >
                    <img src="./src/images/icon-edit.svg" alt="" />
                    <p className="font-bold text-moderate-blue">Edit</p>
                  </button>
                  {isDeleting && (
                    <DeleteItem
                      id={id}
                      setIsDeleting={setIsDeleting}
                      deleteItem={deleteItem}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
