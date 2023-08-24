import { FC, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { ITodo } from "../types/ITodo";

interface IListItem {
  todo: ITodo;
  count: number;
  removeTodo: (id: number) => void;
  showModal: () => void;
}

export const ItemTodo: FC<IListItem> = ({
  todo,
  removeTodo,
  count,
  showModal,
}) => {
  const [done, setDone] = useState(false);

  const styleTodo = done ? "task-done" : "";
  return (
    <ListGroup.Item as="li" className={styleTodo}>
      <div className="d-flex justify-content-between">
        <div>
          {count + 1}. {todo.title}
        </div>
        <div>
          <Button
            onClick={() => setDone(!done)}
            className="mx-1 text-bg-primary"
          >
            {done ? "done" : "not done"}
          </Button>

          <Button className="mx-1 text-bg-success" onClick={showModal}>
            modificate
          </Button>
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => removeTodo(todo.id)}
          >
            Remove
          </Button>
        </div>
      </div>
      <div></div>
    </ListGroup.Item>
  );
};
