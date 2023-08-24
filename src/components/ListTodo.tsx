import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ITodo } from "../types/ITodo";
import { ItemTodo } from "./ItemTodo";

interface IListTodo {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  showModal: () => void;
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
              count={i}
            />
          ))}
        </ListGroup>
      ) : (
        <h1>sorry</h1>
      )}
    </>
  );
};
