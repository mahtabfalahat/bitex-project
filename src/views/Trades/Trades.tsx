import React, { useState } from "react";
import Tab from "./../../components/TabComponent/Tab";
import BuyBox from "./../../components/BuyBox/BuyBox";
import "./style.scss";

const Trades = () => {
  const [btcCounter, setBtcCounter] = useState<number>(0);
  const [usdCounter, setUsdCounter] = useState<number>(0);
  const buyHande = () => {};
  const addBtcHandle = () : void => {
    let sumBtc: number;
    let sumUsd: number;
    sumBtc = btcCounter + 0.001;
    setBtcCounter(sumBtc);
    sumUsd = sumBtc * 21337;
    setUsdCounter(sumUsd);
  };
  const subtractBtcHandle = () : void => {
    let subBtc: number;
    let subUsd: number;
    subBtc = btcCounter - 0.001;
    setBtcCounter(subBtc);
    subUsd = subBtc * 21337;
    setUsdCounter(subUsd);
  };
  const buyCallHande = () : void =>{
    alert("this is buy call")
  }
  return (
    <div className="container">
      <div className="topBox">
        <BuyBox
          btnType="greenBtn"
          btcCounter={btcCounter}
          usdCounter={usdCounter}
          btnText="Buy Call"
          disabled={false}
          onClick={addBtcHandle}
          onSubtractClick={subtractBtcHandle}
          clicked = {buyCallHande}
        />
        <BuyBox
          btnType="pinkBtn"
          btcCounter={btcCounter}
          usdCounter={usdCounter}
          btnText="Buy Put"
          clicked={buyHande}
          disabled={false}
          onClick={addBtcHandle}
          onSubtractClick={subtractBtcHandle}
        />
      </div>
      <div className="bottomBox">
        <Tab />
      </div>
    </div>
  );
};

export default Trades;
