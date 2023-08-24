import { FC, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FiX, FiEdit } from "react-icons/fi";
import { ITodo } from "../../types/ITodo";

interface IListItem {
  todo: ITodo;
  removeTodo: (id: number) => void;
  showModal: (count: number | null) => void;
}

export const ItemTodo: FC<IListItem> = ({ todo, removeTodo, showModal }) => {
  const [done, setDone] = useState(false);

  const styleTodo = done ? "task-done" : "";
  return (
    <ListGroup.Item as="li" className={styleTodo}>
      <div className="d-flex flex-column flex-md-row justify-content-between  text-start">
        <div>
          {todo.id}. {todo.title}
        </div>
        <div className="d-flex">
          <Button
            onClick={() => setDone(!done)}
            className="mx-1 text-bg-primary"
          >
            {done ? "done" : "not done"}
          </Button>

          <Button
            className="mx-1 text-bg-success mx-1 d-flex align-items-center"
            onClick={() => showModal(todo.id)}
          >
            <FiEdit className="fs-5" />
          </Button>
          <Button
            variant="danger"
            className="mx-1 d-flex align-items-center"
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
