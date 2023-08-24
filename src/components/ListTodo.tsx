import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ITodo } from "../types/ITodo";
import { ItemTodo } from "./UI/ItemTodo";

interface IListTodo {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  showModal: (count: number | null) => void;
}

export const ListTodo: FC<IListTodo> = ({ todos, removeTodo, showModal }) => {
  return (
    <>
      {todos.length ? (
        <ListGroup>
          {todos.map((todo, i) => (
            <ItemTodo
              todo={todo}
              removeTodo={removeTodo}
              showModal={showModal}
              key={i}
            />
          ))}
        </ListGroup>
      ) : (
        <h1>isn't any task</h1>
      )}
    </>
  );
};
