import close from "../../icons/svg/close-24px (5).svg";
import { Back, Overlay } from "./styled";

function Backdrop({onClose}) {
    return (
        <Back className="backdrop" onClick={onClose}></Back>
    )
}

function ModalOverlay({children, onClose}) {
    return (
        <Overlay>
            <div className="close"><img onClick={onClose} src={close} alt="close-btn"/></div>
            <div className="content">
                {children}
            </div>
        </Overlay>
    )
}

export default function Modal({children, onClose}) {

    return (
        <>
            <Backdrop onClose={onClose}/>
            <ModalOverlay onClose={onClose}>
                {children}
            </ModalOverlay>
        </>
    )
}