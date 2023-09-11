import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ITodo } from "../types/ITodo";
import ItemTodo from "./ItemTodo";
import { useActions } from "../hooks/useAction";
import { ISetModal } from "../types/IModal";
import { useFiltering } from "../hooks/useFiltering";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IListTodo {
  removeTodo?: (id: number) => void;
  showModal: ISetModal;
  todos: ITodo[];
}

const ListTodo: FC<IListTodo> = ({ todos, showModal }) => {
  const filter = useTypedSelector((state) => state.filterReducer);

  const { updateTodos } = useActions();

  const removeTodo = (id: number) => {
    const value = todos.filter((todo: ITodo) => id !== todo.id);
    updateTodos(value);
  };

  const filteringTodos = useFiltering(todos, filter);

  return (
    <>
      {filteringTodos.length ? (
        <ListGroup>
          {filteringTodos.map((todo: ITodo, index) => (
            <ItemTodo
              todo={todo}
              removeTodo={removeTodo}
              count={index}
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

export default ListTodo;
