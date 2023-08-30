import { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ITodo } from "../types/ITodo";
import { ItemTodo } from "./ItemTodo";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import { ISetModal } from "../types/IModal";
import { IFilterState } from "../types/IFilter";
import { useFiltering } from "../hooks/useFiltering";

interface IListTodo {
  removeTodo?: (id: number) => void;
  showModal: ISetModal;
  filter: IFilterState;
}

export const ListTodo: FC<IListTodo> = ({ showModal, filter }) => {
  const { todos } = useTypedSelector((state) => state.todosReducer);
  const { updateTodos } = useActions();

  // remove todo
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
