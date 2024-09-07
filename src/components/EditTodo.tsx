import { useRef } from "react";
import { Task } from "./TasksList";

interface Props {
  task: Task;
  updateTask: (id: number, value: string) => void;
}

const EditTodo = ({ task, updateTask }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input.current && input.current.value.length > 0) {
          updateTask(task.id, input.current.value);
          input.current.value = "";
        }
      }}
    >
      <div className="flex rounded-sm m-1">
        <input
          ref={input}
          defaultValue={task.title}
          type="text"
          className="flex flex-grow rounded-sm p-2 ml-2 outline-0 bg-gray-500 text-lg"
        />
        <button
          type="submit"
          className="bg-orange-500 rounded-sm w-1/4 border-none p-2 ml-1"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
