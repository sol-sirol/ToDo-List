import { useState } from "react";
import { ToDoCard } from "../entities/todo";
import { NewTodoForm } from "../features/addTodo";
import { useAppSelector } from "./hooks";

enum SortTodo {
  ALL,
  ACTIVE,
  COMPLETED,
}

export const App = () => {
  const todoList = useAppSelector((state) => state.todos.list);
  const [sort, setSort] = useState<SortTodo>(SortTodo.ALL);

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <NewTodoForm></NewTodoForm>

      <div className="todo-block">
        <div className="todo-block__sort-wrapper">
          <button
            className={`todo-block__button ${
              sort === SortTodo.ALL ? "todo-block__button_active" : ""
            }`}
            onClick={() => setSort(SortTodo.ALL)}
          >
            All
          </button>
          <button
            className={`todo-block__button ${
              sort === SortTodo.ACTIVE ? "todo-block__button_active" : ""
            }`}
            onClick={() => setSort(SortTodo.ACTIVE)}
          >
            Active
          </button>
          <button
            className={`todo-block__button ${
              sort === SortTodo.COMPLETED ? "todo-block__button_active" : ""
            }`}
            onClick={() => setSort(SortTodo.COMPLETED)}
          >
            Completed
          </button>
        </div>

        <div className="todo-block__list todo-list">
          {todoList
            .filter((todo) => {
              return {
                0: true,
                1: todo.completed === false,
                2: todo.completed === true,
              }[sort];
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
