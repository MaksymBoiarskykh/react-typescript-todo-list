import { FC } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";

interface IModalWindow {
  children: JSX.Element;
  show: boolean;
  setShow: (count: number | null) => void;
  text: string;
}

export const ModalWindow: FC<IModalWindow> = ({
  children,
  show,
  setShow,
  text,
}) => {
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{text}</Modal.Title>
          <CloseButton onClick={() => setShow(null)} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
