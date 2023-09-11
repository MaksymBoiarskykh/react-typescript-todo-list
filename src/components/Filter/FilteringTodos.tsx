import { FC } from "react";
import Form from "react-bootstrap/Form";
import { IParamsFiltering } from "../../types/IFilter";
import Button from "react-bootstrap/Button";
import FilterSelect from "./FilterSelect";
import { ISetModal } from "../../types/IModal";

interface IFilteringTodos {
  params: IParamsFiltering;
  сhangeModal: ISetModal;
}

export const FilteringTodos: FC<IFilteringTodos> = ({
  params,
  сhangeModal,
}) => {
  const applyСhanges = () => сhangeModal("filter");

  return (
    <Form>
      {Object.keys(params).map((param) => (
        <FilterSelect param={param} data={params} key={param} />
      ))}
      <Button className="w-100 bg-success border-0" onClick={applyСhanges}>
        apply changes
      </Button>
    </Form>
  );
};
