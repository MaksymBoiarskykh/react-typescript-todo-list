import { FC, MouseEvent, ReactNode, useRef } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ITodo } from "../types/ITodo";
import { modificateTodo } from "../utils/modificateTodo";
import { ISetModal } from "../types/IModal";

interface IChangeTodo {
  showModal?: ISetModal;
  components?: ReactNode[];
}

export const ModificateTodos: FC<IChangeTodo> = ({ showModal, components }) => {
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
    if (showModal) showModal("modificate");
  };

  return (
    <Form className="d-md-flex my-2">
      {components && components[0]}
      <Form.Control
        placeholder="print new taks"
        ref={inputRef}
        className="mb-2 mb-md-0 mx-md-2"
      />
      <Button className=" col-12 col-md-3 text-bg-primary" onClick={createTodo}>
        add task
      </Button>
    </Form>
  );
};
