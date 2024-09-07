import { useRef } from "react";

interface Props {
  addTask: (title: string) => void;
}

const FormTodo = ({ addTask }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input.current && input.current.value.length > 0) {
          addTask(input.current.value);
          input.current.value = "";
        }
      }}
    >
      <div className="flex  bg-white rounded-full mb-2">
        <input
          ref={input}
          type="text"
          className="text-base rounded-full p-2 ml-2 flex-grow outline-0 bg-white"
        />
        <button
          type="submit"
          className="bg-orange-500 rounded-full w-1/4 border-none"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
