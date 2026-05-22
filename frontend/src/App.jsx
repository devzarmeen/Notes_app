import "./App.css";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="container">
      <div className="top-icon"> 📝 </div>
      <h1>Task Manager App</h1>
      <p className="subtitle"> Add your tasks and manage them efficiently </p>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;