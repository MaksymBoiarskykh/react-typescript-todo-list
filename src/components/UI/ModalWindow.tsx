import { FC } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";

interface IModalWindow {
  children: JSX.Element;
  show: boolean;
  setShow: () => void;
}

export const ModalWindow: FC<IModalWindow> = ({ children, show, setShow }) => {
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <CloseButton onClick={setShow} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
