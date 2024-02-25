import { MdOutlineDoneAll } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Todo } from "./model/todoSlice";
import { useAppDispatch } from "../../shared/hooks";
import { todoModel } from "./";

type Props = {
  className?: string;
  todo: Todo;
};

export const ToDoCard = ({ className, todo }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`${className ? className : ""} todo-card`}>
      <textarea className="todo-card__textarea" value={todo.title} disabled />
      <div className="todo-card__buttons-wrapper">
        {/* <button className="todo-card__button" data-title="Edit">
          <MdEdit size={20} />
        </button> */}
        {!todo.completed && (
          <button
            className="todo-card__button todo-card__button_color_green"
            data-title="Done"
            onClick={() => dispatch(todoModel.toggleComplete(todo.id))}
          >
            <MdOutlineDoneAll size={20} />
          </button>
        )}

        <button
          className="todo-card__button todo-card__button_color_red"
          data-title="Remove"
          onClick={() => dispatch(todoModel.removeTodo(todo.id))}
        >
          <MdDelete size={20} />
        </button>
      </div>

      {todo.completed && (
        <button
          className="completed"
          onClick={() => dispatch(todoModel.toggleComplete(todo.id))}
        >
          Done <ImCancelCircle />
        </button>
      )}
    </div>
  );
};

export default ToDoCard;
