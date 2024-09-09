interface Props {
  filterTasks: (selectedFilter: string) => void;
  selectedFilter: string;
}

const FilterTasks = ({ filterTasks, selectedFilter }: Props) => {
  return (
    <select
      onChange={(event) => {
        selectedFilter = event.target.value;
        filterTasks(selectedFilter);
      }}
      name="tasks"
      id="tasks"
      className="m-1 rounded-sm p-2 w-48 text-lg"
    >
      <option value="">All tasks</option>
      <option value="completed">Completed tasks</option>
      <option value="pending">Pending Tasks</option>
    </select>
  );
};

export default FilterTasks;
