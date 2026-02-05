import { useState } from "react";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <li>
        <label>
          <input type="checkbox" />
          {taskContent}
          <button>Delete</button>
        </label>
      </li>
    </div>
  );
};

export default Task;
