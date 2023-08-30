import { useEffect, useState } from "react";
import { ListTodo } from "./components/ListTodo";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";
import { ChangeTodos } from "./components/ChangeTodos";
import { IModal } from "./types/IModal";
import { IFilterState } from "./types/IFilter";
import { isConstructorDeclaration } from "typescript";

export const App = () => {
  const { fetchTodos } = useActions();
  const { isLoading, error } = useTypedSelector((state) => state.todosReducer);
  const [filter, setFilter] = useState<IFilterState>({ completed: "" });
  const [showModal, setShowModal] = useState<IModal>({
    filter: false,
    modificate: false,
  });

  console.log(filter);

  useEffect(() => {
    fetchTodos();
  }, []);

  const addFilter = (name: string, value: string) => {
    setFilter({ ...filter, [name]: value });
  };

  const showModalWindow = (item: string) => {
    setShowModal({ ...showModal, [item]: !showModal[item] });
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container fluid className="mt-3 text-center">
      <ChangeTodos
        сhangeModal={showModalWindow}
        modal={showModal}
        setFilter={addFilter}
      />
      {isLoading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        <ListTodo showModal={showModalWindow} filter={filter} />
      )}
    </Container>
  );
};
