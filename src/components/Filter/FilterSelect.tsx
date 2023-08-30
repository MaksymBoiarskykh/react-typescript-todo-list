import { ChangeEvent, FC } from "react";
import Form from "react-bootstrap/Form";
import { IOptionSelect, IParamsFiltering } from "../../types/IFilter";

interface IFilterSelect {
  param: string;
  data: IParamsFiltering;
  setFilter: (name: string, value: string) => void;
}

export const FilterSelect: FC<IFilterSelect> = ({ param, data, setFilter }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Text className="text-muted">{param}</Form.Text>
      <Form.Select
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setFilter(param, e.target.value)
        }
      >
        <option value="">{data[param].default}</option>
        {data[param].options.map((option: IOptionSelect) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default FilterSelect;
