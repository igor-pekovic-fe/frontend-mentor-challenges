import { useState } from "react";

export default function EditItem({ content, onSave, setIsEditing }) {
  const [editedContent, setEditedContent] = useState(content);

  const handleContentChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleSave = () => {
    onSave(editedContent);
    setIsEditing((prevState) => !prevState);
  };

  return (
    <div>
      <textarea
        className="w-full h-36 text-grayish-blue font-medium text-sm xl:text-base outline outline-1 outline-light-gray rounded-lg resize-none mb-4 px-5 py-2"
        value={editedContent}
        onChange={handleContentChange}
        autoFocus
        name=""
        cols={300}
      ></textarea>
      <div className="flex">
        <button
          onClick={handleSave}
          className="text-white bg-moderate-blue font-bold px-7 py-3 rounded-lg ml-auto"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}
