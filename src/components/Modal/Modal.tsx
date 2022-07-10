import React from "react";
import Backdrop from "./../Backdrop/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";

interface props {
  clicked: any;
  children: React.ReactNode;
  modalClosed: any;
  show: boolean;
}
const Modal = (props: props) => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <CloseIcon className="closeIconStyle" onClick={props.modalClosed} />
      <div style={{ margin: "auto", textAlign: "right" }}>{props.children}</div>
    </div>
  </>
);

export default Modal;
