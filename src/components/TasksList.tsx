import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditTodo from "./EditTodo";

export interface Task {
  title: string;
  id: number;
  isCompleted: boolean;
  isEditing: boolean;
}

interface Props {
  tasks: Task[];
  changeCompletedTask: (id: number) => void;
  changeIsEditingTask: (id: number) => void;
  updateTask: (id: number, value: string) => void;
  deleteTask: (id: number) => void;
}

const TasksList = ({
  tasks,
  updateTask,
  changeCompletedTask,
  deleteTask,
  changeIsEditingTask,
}: Props) => {
  return (
    <ul className="p-3">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between">
          {task.isEditing ? (
            <>
              <EditTodo
                task={task}
                updateTask={(id, value) => updateTask(id, value)}
              />
            </>
          ) : (
            <>
              <div
                onClick={() => changeCompletedTask(task.id)}
                className="flex flex-grow justify-start items-center cursor-pointer"
              >
                {task.isCompleted ? (
                  <IoIosCheckmarkCircle size="24px" />
                ) : (
                  <IoIosCheckmarkCircleOutline size="24px" />
                )}
                <div
                  className={`m-1 text-2xl font-medium ${
                    task.isCompleted ? "line-through decoration-1" : ""
                  }`}
                >
                  {task.title}
                </div>
              </div>
              <button
                onClick={() => changeIsEditingTask(task.id)}
                className="mr-1"
              >
                <FaRegEdit size="24px" />
              </button>
              <button onClick={() => deleteTask(task.id)}>
                <MdDelete size="24px" />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
