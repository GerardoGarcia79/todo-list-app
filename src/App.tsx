import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TasksList, { Task } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask = {
      title: title,
      id: tasks.length + 1,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleCompletedTask = (index: Task) => {
    return index.isCompleted ? false : true;
  };

  const changeCompletedTask = (id: number) => {
    const index = tasks.find((t) => t.id === id);
    const toggle = toggleCompletedTask(index!);
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isCompleted: toggle } : t))
    );
  };

  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="bg-gray-700 w-full max-w-3xl mt-24 h-fit rounded-md p-3">
        <Header addTask={(title) => addTask(title)} />
        <TasksList
          tasks={tasks}
          toggleCompletedTask={(id) => changeCompletedTask(id)}
        />
      </div>
    </div>
  );
}

export default App;
