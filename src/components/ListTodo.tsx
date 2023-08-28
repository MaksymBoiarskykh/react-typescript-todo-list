import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ITodo } from "../types/ITodo";
import { ItemTodo } from "./ItemTodo";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

interface IListTodo {
  removeTodo?: (id: number) => void;
  showModal: () => void;
}

export const ListTodo: FC<IListTodo> = ({ showModal }) => {
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const { updateTodos } = useActions();

  // remove todo
  const removeTodo = (id: number) => {
    const value = todos.filter((todo: ITodo) => id !== todo.id);
    updateTodos(value);
  };

  return (
    <>
      {todos.length ? (
        <ListGroup>
          {todos.map((todo: ITodo) => (
            <ItemTodo
              todo={todo}
              removeTodo={removeTodo}
              showModal={showModal}
              key={todo.id}
            />
          ))}
        </ListGroup>
      ) : (
        <h1>isn't any task</h1>
      )}
    </>
  );
};
