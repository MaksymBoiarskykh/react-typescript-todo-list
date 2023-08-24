import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ITodo } from "../types/ITodo";
import { FC, MouseEvent, useRef } from "react";

interface IChangeTodo {
  changeTodo: (task: ITodo) => void;
  count: number;
}

export const ChangeTodo: FC<IChangeTodo> = ({ changeTodo, count }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const createTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const task: ITodo = {
      title: inputRef.current?.value || "unknown",
      id: count + 1,
    };
    changeTodo(task);
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
