import { FC } from "react";
import { FilteringButton } from "./Filter/FilteringButton";
import { ModificateTodos } from "./ModificateTodos";
import { ModalWindow } from "./UI/ModalWindow";
import { ISetModal, IModal } from "../types/IModal";
import { FilteringTodos } from "./Filter/FilteringTodos";
import { paramsFiltering } from "./Filter/mockParams";
import { IFilterState } from "../types/IFilter";

interface IChangeTodos {
  сhangeModal: ISetModal;
  modal: IModal;
  setFilter: (name: string, value: string) => void;
}

export const ChangeTodos: FC<IChangeTodos> = ({
  сhangeModal,
  modal,
  setFilter,
}) => {
  return (
    <>
      <ModalWindow
        show={{ item: "modificate", value: modal.modificate }}
        setShow={сhangeModal}
        title="print new title"
      >
        <ModificateTodos showModal={сhangeModal} />
      </ModalWindow>
      <ModificateTodos
        components={[<FilteringButton showModal={сhangeModal} />]}
      />

      <ModalWindow
        show={{ item: "filter", value: modal.filter }}
        setShow={сhangeModal}
        title="select conditions"
      >
        <FilteringTodos
          params={paramsFiltering}
          setFilter={setFilter}
          сhangeModal={сhangeModal}
        />
      </ModalWindow>
    </>
  );
};
