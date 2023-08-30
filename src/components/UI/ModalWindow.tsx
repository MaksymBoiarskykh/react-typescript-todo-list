import { FC } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";

interface IShow {
  item: string;
  value: boolean;
}

interface IModalWindow {
  children: JSX.Element;
  show: IShow;
  setShow: (item: string) => void;
  title: string;
}

export const ModalWindow: FC<IModalWindow> = ({
  children,
  show,
  setShow,
  title,
}) => {
  return (
    <>
      <Modal show={show.value}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <CloseButton onClick={() => setShow(show.item)} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
