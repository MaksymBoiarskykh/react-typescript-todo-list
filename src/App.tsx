import { useEffect, useState } from "react";
import { fetchTodos } from "./API/fetchTodos";
import { ListTodo } from "./components/ListTodo";
import { useFetching } from "./hooks/useFetching";
import { ModalWindow } from "./components/UI/ModalWindow";
import { ModificateTodos } from "./components/ModificateTodos";
import { ITodo } from "./types/ITodo";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

export const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [countTodo, setCountTodo] = useState<number | null>(null);

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

  // change todo
  const changeTodo = (task: ITodo) => {
    if (countTodo) {
      const changeTodos = [...todos];
      changeTodos[countTodo - 1].title = task.title;
      setTodos(changeTodos);
    }
  };

  // show modal
  const showModalWindow = (count: number | null) => {
    setShowModal(!showModal);
    setCountTodo(count);
  };

  return (
    <Container fluid className="mt-3 text-center">
      <ModalWindow
        show={showModal}
        setShow={showModalWindow}
        text="print new title"
      >
        <ModificateTodos
          modificateList={changeTodo}
          count={todos.length}
          showModal={showModalWindow}
        />
      </ModalWindow>
      <ModificateTodos modificateList={addTodo} count={todos.length} />

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
