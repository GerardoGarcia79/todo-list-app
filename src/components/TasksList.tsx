import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { MdDelete } from "react-icons/md";

export interface Task {
  title: string;
  id: number;
  isCompleted: boolean;
}

interface Props {
  tasks: Task[];
  changeCompletedTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TasksList = ({ tasks, changeCompletedTask, deleteTask }: Props) => {
  return (
    <ul className="p-3">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between">
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
          <button onClick={() => deleteTask(task.id)}>
            <MdDelete size="24px" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;

// <IoIosCheckmarkCircle /> completed
// <IoIosCheckmarkCircleOutline /> not completed
