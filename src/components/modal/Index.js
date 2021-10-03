import { useSelector } from "react-redux";

import LogoModal from "components/modal/Logo";

const ModalIndex = () => {
  const { logoModal } = useSelector((state) => state.modal);
  return <>
    <LogoModal show={logoModal.open} />
  </>
};

export default ModalIndex;
