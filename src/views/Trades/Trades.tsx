import { useState } from "react";
import Tab from "./../../components/TabComponent/Tab";
import BuyBox from "./../../components/BuyBox/BuyBox";
import {BTC_COUNTER , PER_BTC_IN_USD} from './../../utils/constants' ; 
import "./style.scss";

const Trades = () => {
  const [btcCounter, setBtcCounter] = useState<number>(0);
  const [usdCounter, setUsdCounter] = useState<number>(0);
  const [BtcPutCounter, setBtcPutCounter] = useState<number>(0) ; 
  const [UsdPutCounter, setUsdPutCounter] = useState<number>(0) ; 
  
  const buyHande = () => {};
  const addBtcHandle = () : void => {
    let sumBtc: number;
    let sumUsd: number;
    sumBtc = btcCounter + BTC_COUNTER; 
    setBtcCounter(sumBtc);
    sumUsd = sumBtc * PER_BTC_IN_USD;
    setUsdCounter(sumUsd);
  };
  const subtractBtcHandle = () : void => {
    let subBtc: number;
    let subUsd: number;
    subBtc = btcCounter - BTC_COUNTER;
    setBtcCounter(subBtc);
    subUsd = subBtc * PER_BTC_IN_USD;
    setUsdCounter(subUsd);
  };
  const buyCallHande = () : void =>{
    alert("this is buy call")
  }
  const addBtcPutHandle =() =>{
    let sumBtc: number;
    let sumUsd: number;
    sumBtc = BtcPutCounter + BTC_COUNTER; 
    setBtcPutCounter(sumBtc);
    sumUsd = sumBtc * PER_BTC_IN_USD;
    setUsdPutCounter(sumUsd);
  }
  const subtractBtcPutHandle = () : void => {
    let subBtc: number;
    let subUsd: number;
    subBtc = BtcPutCounter - BTC_COUNTER;
    setBtcPutCounter(subBtc);
    subUsd = subBtc * PER_BTC_IN_USD;
    setUsdPutCounter(subUsd);
  };
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
          btcCounter={BtcPutCounter}
          usdCounter={UsdPutCounter}
          btnText="Buy Put"
          clicked={buyHande}
          disabled={false}
          onClick={addBtcPutHandle}
          onSubtractClick={subtractBtcPutHandle}
        />
      </div>
      <div className="bottomBox">
        <Tab />
      </div>
    </div>
  );
};

export default Trades;
