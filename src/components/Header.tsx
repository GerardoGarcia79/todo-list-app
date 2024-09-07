import FormTodo from "./FormTodo";

interface Props {
  addTask: (title: string) => void;
}

const Header = ({ addTask }: Props) => {
  return (
    <>
      <h1 className="font-bold text-3xl mb-3 text-white">Todo App React</h1>
      <FormTodo addTask={addTask} />
    </>
  );
};

export default Header;
