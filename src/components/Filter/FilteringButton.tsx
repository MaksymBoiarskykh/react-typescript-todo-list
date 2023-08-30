import { FC } from "react";
import Button from "react-bootstrap/Button";
import { BiFilter } from "react-icons/bi";
import { ISetModal } from "../../types/IModal";

interface IFilteringButton {
  showModal: ISetModal;
}

export const FilteringButton: FC<IFilteringButton> = ({ showModal }) => {
  const showResult = (e: any) => {
    showModal("filter");
    e.preventDefault();
  };
  return (
    <Button className="fs-5 py-0" onClick={showResult}>
      <BiFilter />
    </Button>
  );
};
