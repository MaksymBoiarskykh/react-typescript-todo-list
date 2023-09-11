import { ChangeEvent, FC } from "react";
import Form from "react-bootstrap/Form";
import { IOptionSelect, IParamsFiltering } from "../../types/IFilter";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IFilterSelect {
  param: string;
  data: IParamsFiltering;
}

export const FilterSelect: FC<IFilterSelect> = ({ param, data }) => {
  const filters = useTypedSelector((state) => state.filterReducer);
  const { changefilterParam } = useActions();

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Text className="text-muted">{param}</Form.Text>
      <Form.Select
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          changefilterParam({ name: param, value: e.target.value })
        }
        value={filters[param]}
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
