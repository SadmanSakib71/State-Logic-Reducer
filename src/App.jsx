import { useState } from "react";
import "./app.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { initialTasks } from "./data/Task";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1>Sadman Sakib itinerary</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
