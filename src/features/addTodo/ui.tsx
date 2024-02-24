import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { todoModel } from "../../entities/todo/";

export const NewTodoForm = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState("");

  const handleAction = () => {
    if (value.trim().length) {
      dispatch(todoModel.addTodo(value));
      setValue('');
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="New todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-form__input"
      />

      <button onClick={handleAction} className="todo-form__button">
        +
      </button>
    </div>
  );
};
