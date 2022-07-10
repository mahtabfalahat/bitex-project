import React from 'react' ; 
import classes from './style.module.scss';

interface props {
    clicked: any;
    disabled: boolean;
    children: React.ReactNode;
    btnType : string ; 
  }
const MainButton = (props : props) => {
    return (
        <button
            onClick={props.clicked}
            disabled = {props.disabled}
            className={[classes.Button, classes[props.btnType]].join(' ')}>
            {props.children}
        </button>
    )
}
export default MainButton;