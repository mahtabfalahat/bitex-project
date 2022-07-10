import React from "react";
import "./style.scss";
interface props {
  clicked: any;
  show: boolean;
}
const Backdrop = (props: props) => {
  props.show ? <div className="backdrop" onClick={props.clicked} /> : null;
};

export default Backdrop;
