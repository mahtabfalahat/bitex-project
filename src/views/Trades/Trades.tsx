import { useState } from "react";
import Tab from "./../../components/TabComponent/Tab";
import BuyBox from "./../../components/BuyBox/BuyBox";
import { BTC_COUNTER, PER_BTC_IN_USD } from "./../../utils/constants";
import Modal from "./../../components/Modal/Modal";
import "./style.scss";

const Trades = () => {
  const [btcCounter, setBtcCounter] = useState<number>(0);
  const [usdCounter, setUsdCounter] = useState<number>(0);
  const [BtcPutCounter, setBtcPutCounter] = useState<number>(0);
  const [UsdPutCounter, setUsdPutCounter] = useState<number>(0);
  const [openResultOfBuy, setOpenResultOfBuy] = useState<boolean>(false);
  const [openResultOfPut, setOpenResultOfPut] = useState<boolean>(false);
  const addBtcHandle = (): void => {
    let sumBtc: number;
    let sumUsd: number;
    sumBtc = btcCounter + BTC_COUNTER;
    setBtcCounter(sumBtc);
    sumUsd = sumBtc * PER_BTC_IN_USD;
    setUsdCounter(sumUsd);
  };
  const subtractBtcHandle = (): void => {
    let subBtc: number;
    let subUsd: number;
    subBtc = btcCounter - BTC_COUNTER;
    setBtcCounter(subBtc);
    subUsd = subBtc * PER_BTC_IN_USD;
    setUsdCounter(subUsd);
  };

  const addBtcPutHandle = () => {
    let sumBtc: number;
    let sumUsd: number;
    sumBtc = BtcPutCounter + BTC_COUNTER;
    setBtcPutCounter(sumBtc);
    sumUsd = sumBtc * PER_BTC_IN_USD;
    setUsdPutCounter(sumUsd);
  };
  const subtractBtcPutHandle = (): void => {
    let subBtc: number;
    let subUsd: number;
    subBtc = BtcPutCounter - BTC_COUNTER;
    setBtcPutCounter(subBtc);
    subUsd = subBtc * PER_BTC_IN_USD;
    setUsdPutCounter(subUsd);
  };
  const buyCallHande = (): void => {
    setOpenResultOfBuy(true);
  };
  const putHande = (): void => {
    setOpenResultOfPut(true);
  };
  const cancelModal = (): void => {
    setOpenResultOfBuy(false);
    setOpenResultOfPut(false);
  };
  return (
    <div className="container">
      <Modal show={openResultOfBuy} modalClosed={cancelModal} clicked  ={cancelModal}>
        <p className="modalTextStyle">Final Buy call value: </p>
        <p className="modalTextStyle">{usdCounter && usdCounter} $USDT</p>
      </Modal>
      <Modal show={openResultOfPut} modalClosed={cancelModal} clicked ={cancelModal}>
        <p className="modalTextStyle">Final Buy Put value: </p>
        <p className="modalTextStyle">{UsdPutCounter && UsdPutCounter} $USDT</p>
      </Modal>
      <div className="topBox">
        <BuyBox
          btnType="greenBtn"
          btcCounter={btcCounter}
          usdCounter={usdCounter}
          btnText="Buy Call"
          disabled={false}
          onClick={addBtcHandle}
          onSubtractClick={subtractBtcHandle}
          clicked={buyCallHande}
        />
        <BuyBox
          btnType="pinkBtn"
          btcCounter={BtcPutCounter}
          usdCounter={UsdPutCounter}
          btnText="Buy Put"
          clicked={putHande}
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
