import { NewTodoForm } from "../features/add-todo";
import { TodoFilters } from "../features/todo-filters";
import { TodoList } from "../features/todo-list";
import { useAppSelector } from "../shared/hooks";

export const App = () => {
  const status = useAppSelector((state) => state.todos.status);

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <NewTodoForm></NewTodoForm>

      <div className="todos-block">
        <TodoFilters />
        <TodoList></TodoList>
      </div>

      {status === "loading" && (
        <div className="main-container__loader-wrapper">
          <div className="main-container__loader"></div>
        </div>
      )}
    </div>
  );
};
