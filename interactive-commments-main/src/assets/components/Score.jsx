export default function Score({ score, id, upvoteComment, downvoteComment }) {
  return (
    <div className="flex items-center gap-4 w-auto bg-very-light-gray px-4 py-2 rounded-lg">
      <button onClick={() => upvoteComment(id)}>
        <img className="w-3 h-3" src="./src/images/icon-plus.svg" alt="" />
      </button>
      <p className="font-bold text-moderate-blue">{score}</p>
      <button onClick={() => downvoteComment(id)}>
        <img className="w-3 h-1" src="./src/images/icon-minus.svg" alt="" />
      </button>
    </div>
  );
}
