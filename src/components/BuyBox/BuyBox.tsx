import React from "react";
import MainButton from "./../MainButton/MainButton";
import IconBox from "./../IconBox/IconBox";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import "./style.scss";

interface props {
  clicked: any;
  disabled: boolean;
  btnText: string;
  btnType: string;
  onClick : any | undefined ; 
  onSubtractClick : any ; 
  btcCounter : number ; 
  usdCounter : number ; 
}

const BuyBox = (props:props) => {
 
  return (
    <div className="buyContainer">
      <div className="btcBox">
        <p>MAX</p>
        <p>{props.btcCounter.toFixed(3)} BTC</p>
      </div>
      <div className="actionsBox">
        <IconBox onClick = {props.onClick}  icon={<AddIcon />} />
        <p>Gty(BTC)</p>
        <IconBox onClick = {props.onSubtractClick}    icon={<MinimizeIcon />} />
      </div>
      <div className="btcBox">
        <p>Premium</p>
        <p>{props.usdCounter.toFixed(2)} USDT</p>
      </div>
      <div className="btnBox">
        <MainButton btnType={props.btnType}  disabled={props.disabled} clicked={props.clicked}>
          {props.btnText}
        </MainButton>
      </div>
    </div>
  );
};

export default BuyBox;
