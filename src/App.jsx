import { useState } from "react";
import "./app.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { initialTasks } from "./data/Task";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id,
    );
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (task) => {
    const newTask = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(newTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
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
