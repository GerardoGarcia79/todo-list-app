import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

export interface Task {
  title: string;
  id: number;
  isCompleted: boolean;
}

interface Props {
  tasks: Task[];
  toggleCompletedTask: (id: number) => void;
}

const TasksList = ({ tasks, toggleCompletedTask }: Props) => {
  return (
    <ul className="p-3">
      {tasks.map((task) => (
        <li key={task.id}>
          <div
            onClick={() => toggleCompletedTask(task.id)}
            className="flex justify-start items-center cursor-pointer"
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
        </li>
      ))}
    </ul>
  );
};

export default TasksList;

// <IoIosCheckmarkCircle /> completed
// <IoIosCheckmarkCircleOutline /> not completed
