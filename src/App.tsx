import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TasksList, { Task } from "./components/TasksList";
import FilterTasks from "./components/FilterTasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks")!)
      : []
  );
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(
    localStorage.getItem("filteredTasks")
      ? JSON.parse(localStorage.getItem("filteredTasks")!)
      : []
  );
  const [selectedFilter, setSelectedFilter] = useState(
    localStorage.getItem("filter") ? localStorage.getItem("filter") : ""
  );

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

  const filterTasks = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);

    if (selectedFilter === "completed")
      setFilteredTasks(tasks.filter((task) => task.isCompleted));
    else if (selectedFilter === "pending")
      setFilteredTasks(tasks.filter((task) => !task.isCompleted));
    else setFilteredTasks([]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("filteredTasks", JSON.stringify(filteredTasks));
    localStorage.setItem("filter", selectedFilter!);
  }, [tasks, filteredTasks, selectedFilter]);

  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="bg-gray-700 w-full max-w-3xl mt-24 h-fit rounded-md p-5">
        <Header addTask={(title) => addTask(title)} />
        {tasks.length > 0 ? (
          <FilterTasks
            filterTasks={filterTasks}
            selectedFilter={selectedFilter!}
          />
        ) : null}
        <TasksList
          tasks={selectedFilter ? filteredTasks : tasks}
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
