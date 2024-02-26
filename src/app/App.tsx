import { NewTodoForm } from "../features/add-todo";
import { TodoFilters } from "../features/todo-filters";
import { TodoList } from "../features/todo-list";
import { useAppSelector } from "../shared/hooks";
import { FullScreenLoader } from "../shared/ui/loaders";

export const App = () => {
  const status = useAppSelector((state) => state.todos.status);

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <NewTodoForm />

      <div className="todos-block">
        <TodoFilters />
        <TodoList />
      </div>

      {status === "loading" && <FullScreenLoader />}
    </div>
  );
};
