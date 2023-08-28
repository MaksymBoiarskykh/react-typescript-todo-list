import { FC } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";

interface IModalWindow {
  children: JSX.Element;
  show: boolean;
  setShow: (count: number | null) => void;
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
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <CloseButton onClick={() => setShow(null)} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
