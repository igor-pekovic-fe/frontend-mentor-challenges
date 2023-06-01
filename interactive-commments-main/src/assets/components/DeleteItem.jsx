export default function DeleteComment({
  id,
  setIsDeleting,
  deleteItem,
  isComment,
}) {
  const handleDelete = (id) => {
    deleteItem(id, isComment);
    setIsDeleting((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="max-w-sm bg-white m-4 p-6 rounded-lg ">
        <h4 className="text-lg font-bold text-dark-blue mb-3">
          Delete comment
        </h4>
        <p className="text-grayish-blue mb-5">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setIsDeleting((prevState) => !prevState)}
            className="flex-1 bg-grayish-blue py-4 px-6 text-white font-semibold rounded-lg"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => handleDelete(id)}
            className=" flex-1 bg-soft-red p-4 text-white font-semibold rounded-lg"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
