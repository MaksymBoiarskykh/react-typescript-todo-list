import { useEffect, useState } from "react";
import { fetchTodos } from "./API/fetchTodos";
import { ListTodo } from "./components/ListTodo";
import { useFetching } from "./hooks/useFetching";
import { ITodo } from "./types/ITodo";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { CreateTodo } from "./components/CreateTodo";
import { ModalWindow } from "./components/UI/ModalWindow";
import { ChangeTodo } from "./components/ChangeTodo";

export const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState(false);

  // get todos
  const [getTodos, isloading] = useFetching(async () => {
    const data = await fetchTodos();
    setTodos(data);
  });

  useEffect(() => {
    getTodos();
  }, []);

  // remove todo
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  // add todo
  const addTodo = (task: ITodo) => {
    setTodos([...todos, task]);
  };

  // show modal
  const showModalWindow = () => {
    setShowModal(!showModal);
  };

  const changeTodo = (task: ITodo) => {
    const count = task.id;
    console.log(count);
    setTodos([...todos, (todos[count] = task)]);
  };

  return (
    <Container fluid className="mt-3 text-center">
      <ModalWindow show={showModal} setShow={showModalWindow}>
        <ChangeTodo changeTodo={changeTodo} count={todos.length} />
      </ModalWindow>

      <CreateTodo addTodo={addTodo} count={todos.length} />

      {isloading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <ListTodo
          todos={todos}
          removeTodo={removeTodo}
          showModal={showModalWindow}
        />
      )}
    </Container>
  );
};
