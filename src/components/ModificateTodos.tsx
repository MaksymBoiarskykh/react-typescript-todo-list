import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ITodo } from "../types/ITodo";
import { FC, MouseEvent, useRef } from "react";

interface IChangeTodo {
  modificateList: (task: ITodo) => void;
  showModal?: (count: number | null) => void;
  count: number;
}

export const ModificateTodos: FC<IChangeTodo> = ({
  modificateList,
  count,
  showModal,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const createTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const task: ITodo = {
      title: inputRef.current?.value || "unknown",
      id: count + 1,
    };
    modificateList(task);
    if (showModal) showModal(null);
  };

  return (
    <Form className="d-flex my-2">
      <Form.Control placeholder="print new taks" ref={inputRef} />
      <Button className="ms-1 w-25 text-bg-primary" onClick={createTodo}>
        add task
      </Button>
    </Form>
  );
};
