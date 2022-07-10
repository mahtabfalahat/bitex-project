import React from "react";
import "./style.scss";
interface props {
  clicked: any;
  show: boolean;
}
const Backdrop = (props: props) => {
  return (
    <>
      {props.show ? <div className="backdrop" onClick={props.clicked} /> : null}
      {/* <p>hi</p> */}
    </>
  );
};

export default Backdrop;
