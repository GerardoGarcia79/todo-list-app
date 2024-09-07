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
      isEditing: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeCompletedTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const changeIsEditingTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, isEditing: !t.isEditing } : t))
    );
  };

  const updateTask = (id: number, value: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isEditing: !task.isEditing, title: value }
          : task
      )
    );
  };

  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="bg-gray-700 w-full max-w-3xl mt-24 h-fit rounded-md p-3">
        <Header addTask={(title) => addTask(title)} />
        <TasksList
          tasks={tasks}
          changeCompletedTask={(id) => changeCompletedTask(id)}
          changeIsEditingTask={(id) => changeIsEditingTask(id)}
          updateTask={(id, value) => updateTask(id, value)}
          deleteTask={(id) => deleteTask(id)}
        />
      </div>
    </div>
  );
}

export default App;
