import { useDispatch } from "react-redux";
import { CloseButton, Modal } from "react-bootstrap";

import { closeLogoModal } from "store/slices/modal";

import lct from "assets/images/lct_compressed.png";

const LogoModal = ({ show }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    return dispatch(closeLogoModal());
  };
  return (
    <Modal show={show} onHide={handleClose} className="fullscreen-modal">
      <Modal.Body className="p-0">
        <CloseButton
          onClick={handleClose}
          variant="white"
          className="position-absolute"
          style={{ right: "1em", top: "1em", fontSize: "1.2em" }}
        />
        <img src={lct} style={{ width: "100%" }} alt="logo page" />
      </Modal.Body>
    </Modal>
  );
};

export default LogoModal;
