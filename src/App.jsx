import "./app.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
const App = () => {
  return (
    <>
      <h1>Sadman Sakib itinerary</h1>
      <AddTask />
      <TaskList />
    </>
  );
};

export default App;
