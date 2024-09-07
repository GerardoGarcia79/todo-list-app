import { useRef } from "react";

interface Props {
  addTask: (title: string) => void;
}

const Header = ({ addTask }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className="font-bold text-3xl mb-3 text-white">Todo App React</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (input.current && input.current.value.length > 0) {
            addTask(input.current.value);
            input.current.value = "";
          }
        }}
      >
        <div className="flex  bg-white rounded-full mb-10">
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
    </>
  );
};

export default Header;
