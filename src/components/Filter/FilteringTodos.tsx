import { FC } from "react";
import Form from "react-bootstrap/Form";
import { IParamsFiltering } from "../../types/IFilter";
import Button from "react-bootstrap/Button";
import FilterSelect from "./FilterSelect";

interface IFilteringTodos {
  params: IParamsFiltering;
  setFilter: (name: string, value: string) => void;
}

export const FilteringTodos: FC<IFilteringTodos> = ({ params, setFilter }) => {
  return (
    <Form>
      {Object.keys(params).map((param) => (
        <FilterSelect
          param={param}
          data={params}
          key={param}
          setFilter={setFilter}
        />
      ))}
      <Button className="w-100 bg-success border-0">add task</Button>
    </Form>
  );
};
