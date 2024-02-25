import { ToDoCard } from "../entities/todo";
import { NewTodoForm } from "../features/addTodo";
import { useAppSelector } from "../shared/hooks";
import { TodoFilters } from "../features/todo-filters";

export const App = () => {
  const todoList = useAppSelector((state) => state.todos.list);
  const queryConfig = useAppSelector((state) => state.todos.queryConfig);

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <NewTodoForm></NewTodoForm>

      <div className="todo-block">
        <TodoFilters />
        <div className="todo-block__list todo-list">
          {todoList
            .filter((todo) => {
              return queryConfig?.completed === undefined
                ? true
                : queryConfig?.completed === todo.completed;
            })
            .map((todo) => (
              <ToDoCard
                key={todo.id}
                todo={todo}
                className="todo-list__item"
              ></ToDoCard>
            ))}
        </div>
      </div>
    </div>
  );
};
