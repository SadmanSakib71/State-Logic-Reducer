import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => handleTextChange(e)}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
