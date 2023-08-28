import { useEffect, useState } from "react";
import { ListTodo } from "./components/ListTodo";
import { ModalWindow } from "./components/UI/ModalWindow";
import { ModificateTodos } from "./components/ModificateTodos";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";

export const App = () => {
  const { fetchTodos } = useActions();
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error } = useTypedSelector((state) => state.todosReducer);

  useEffect(() => {
    fetchTodos();
  }, []);

  // show modal
  const showModalWindow = () => {
    setShowModal(!showModal);
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container fluid className="mt-3 text-center">
      <ModalWindow
        show={showModal}
        setShow={showModalWindow}
        title="print new title"
      >
        <ModificateTodos showModal={showModalWindow} />
      </ModalWindow>

      <ModificateTodos />

      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <ListTodo showModal={showModalWindow} />
      )}
    </Container>
  );
};
