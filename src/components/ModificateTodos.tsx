import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ITodo } from "../types/ITodo";
import { FC, MouseEvent, useRef } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { modificateTodo } from "../utils/modificateTodo";

interface IChangeTodo {
  showModal?: (count: number | null) => void;
}

export const ModificateTodos: FC<IChangeTodo> = ({ showModal }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, selectedTodo } = useTypedSelector(
    (state) => state.todosReducer
  );
  const { updateTodos, selectTodo } = useActions();

  const createTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const task: ITodo = {
      title: inputRef.current?.value || "",
      id: selectedTodo || todos.length + 1,
      completed: false,
    };

    const newTodos = modificateTodo(todos, task, selectedTodo);

    updateTodos(newTodos);
    selectTodo(null);
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
