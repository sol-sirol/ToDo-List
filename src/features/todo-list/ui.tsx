import { ToDoCard, todoModel } from "../../entities/todo";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { useEffect } from "react";

export const TodoList = () => {
  const todoList = useAppSelector((state) => state.todos.list);
  const queryConfig = useAppSelector((state) => state.todos.queryConfig);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoModel.fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo-list">
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
  );
};
