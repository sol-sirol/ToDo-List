import { useDispatch } from "react-redux";
import { todoModel } from "../../entities/todo";
import { useAppSelector } from "../../shared/hooks";
import { filtersList, getFilterById } from "./config";

export const TodoFilters = () => {
  const queryConfig = useAppSelector((state) => state.todos.queryConfig);
  const dispatch = useDispatch();

  const onFilterClick = (config: todoModel.QueryConfig) =>
    dispatch(todoModel.setQueryConfig(config));

  return (
    <div className="todo-block__sort-wrapper">
      {filtersList.map(({ title, id, config }) => (
        <button
          key={id}
          className={`todo-block__button ${
            queryConfig?.completed === config.completed
              ? "todo-block__button_active"
              : ""
          }`}
          onClick={() => onFilterClick(getFilterById(id).config)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
