import { useState } from "react";
import { useAppDispatch } from "../../shared/hooks";
import { todoModel } from "../../entities/todo";

export const NewTodoForm = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (value.trim().length) {
      dispatch(todoModel.addNewTodo(value));
      setValue("");
    }
  };

  return (
    <form className="todo-form">
      <input
        placeholder="New todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-form__input"
      />

      <button onClick={(e) => handleAction(e)} className="todo-form__button">
        +
      </button>
    </form>
  );
};
