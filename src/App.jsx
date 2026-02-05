import { useReducer } from "react";
import "./app.css";
import AddTask from "./component/AddTask";
import taskReducer from "./component/reducers/taskReducer";
import TaskList from "./component/TaskList";
import { initialTasks } from "./data/Task";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id,
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text: text,
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1>Sadman Sakib itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
