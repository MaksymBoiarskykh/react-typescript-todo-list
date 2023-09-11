import { useEffect, useState } from "react";
import ListTodo from "./components/ListTodo";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";
import { ChangeTodos } from "./components/ChangeTodos";
import { IModal } from "./types/IModal";

export const App = () => {
  const { fetchTodos } = useActions();

  const { todos, isLoading, error } = useTypedSelector(
    (state) => state.todosReducer
  );

  console.log(todos);

  const [showModal, setShowModal] = useState<IModal>({
    filter: false,
    modificate: false,
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const showModalWindow = (item: string) => {
    setShowModal({ ...showModal, [item]: !showModal[item] });
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container fluid className="mt-3 text-center">
      <ChangeTodos сhangeModal={showModalWindow} modal={showModal} />
      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <ListTodo todos={todos} showModal={showModalWindow} />
      )}
    </Container>
  );
};
