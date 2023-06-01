import { useState } from "react";
import Replies from "./Replies";
import AddReply from "./AddReply";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";

export default function Comment({
  comment,
  addReply,
  currentUser,
  deleteItem,
  editItem,
}) {
  const [commentScore, setScore] = useState(comment.score);
  const [isReplying, setIsReplying] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function stopReplying() {
    setIsReplying(!isReplying);
  }

  function upvoteComment() {
    setScore((prevScore) => prevScore + 1);
  }

  function downvoteComment() {
    setScore((prevScore) => prevScore - 1);
  }

  return (
    <div>
      <div className="p-4 m-4 bg-white rounded-lg xl:p-6">
        <div className="flex gap-3 mb-3 items-center">
          <img
            className="w-8 h-8 mr-1"
            src={`src/${comment.user.image.png}`}
            alt=""
          />
          <p className="font-bold text-dark-blue mr-1">
            {comment.user.username}
          </p>
          {comment.user.username == "juliusomo" && (
            <span className="bg-moderate-blue text-white text-xs font-bold px-1">
              you
            </span>
          )}
          <p className="font-medium text-grayish-blue">{comment.createdAt}</p>
        </div>

        <div>
          {isEditing ? (
            <EditItem
              content={comment.content}
              onSave={(updatedContent) =>
                editItem(comment.id, updatedContent, true)
              }
              setIsEditing={setIsEditing}
            />
          ) : (
            <div>
              <p className="mb-3 text-grayish-blue">{comment.content}</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-4 w-auto bg-very-light-gray px-4 py-2 rounded-lg xl:flex-col xl:py-3">
                  <button onClick={() => upvoteComment()}>
                    <img
                      className="w-3 h-3"
                      src="./src/images/icon-plus.svg"
                      alt=""
                    />
                  </button>
                  <p className="font-bold text-moderate-blue">{commentScore}</p>
                  <button onClick={() => downvoteComment()}>
                    <img
                      className="w-3 h-1"
                      src="./src/images/icon-minus.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {comment.user.username == "juliusomo" && (
                    <div className="flex gap-4">
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
                          id={comment.id}
                          setIsDeleting={setIsDeleting}
                          deleteItem={deleteItem}
                          isComment={true}
                        />
                      )}
                    </div>
                  )}

                  <img
                    className="w-4 h-3"
                    src="./src/images/icon-reply.svg"
                    alt=""
                  />
                  <button
                    className="text-moderate-blue font-bold"
                    onClick={() => setIsReplying(!isReplying)}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="w-11/12 ml-auto border-l-2 border-light-gray">
          {comment.replies.length > 0 && (
            <Replies
              replies={comment.replies}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          )}
        </div>
        {isReplying && (
          <AddReply
            addReply={addReply}
            id={comment.id}
            comment={comment}
            stopReplying={stopReplying}
            currentUser={currentUser}
          />
        )}
      </div>
    </div>
  );
}
