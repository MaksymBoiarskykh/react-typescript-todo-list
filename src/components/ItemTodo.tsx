import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FiX, FiEdit } from "react-icons/fi";
import { ITodo } from "../types/ITodo";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IListItem {
  todo: ITodo;
  removeTodo: (id: number) => void;
  showModal: (item: string) => void;
  count: number;
}

export const ItemTodo: FC<IListItem> = ({
  todo,
  removeTodo,
  showModal,
  count,
}) => {
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const { updateTodos } = useActions();
  const { selectTodo } = useActions();

  const changeStatus = () => {
    const newTodos = todos.map((el) => {
      if (el.id === todo.id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });
    updateTodos(newTodos);
  };

  const chooseTodo = () => {
    showModal("modificate");
    selectTodo(todo.id);
  };

  return (
    <ListGroup.Item as="li" className={todo.completed ? "task-done" : ""}>
      <div className="d-flex flex-column flex-md-row justify-content-between  text-start">
        <div>
          {count + 1}. {todo.title}
        </div>
        <div className="d-flex">
          <Button onClick={changeStatus} className="mx-1 text-bg-primary">
            {todo.completed ? "done" : "not done"}
          </Button>

          <Button
            className="mx-1 text-bg-success mx-1 d-flex align-items-center"
            onClick={chooseTodo}
          >
            <FiEdit className="fs-5" />
          </Button>
          <Button
            variant="danger"
            className="mx-1 d-flex align-items-center s"
            onClick={() => removeTodo(todo.id)}
          >
            <FiX className="fs-5" />
          </Button>
        </div>
      </div>
      <div></div>
    </ListGroup.Item>
  );
};
