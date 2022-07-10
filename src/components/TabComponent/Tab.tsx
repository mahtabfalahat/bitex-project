import  { useState } from "react";
import TabContent from './../TabContent/TabContent' ; 
import TabNavItem from './../TabItem/TabItem' ; 
import "./style.scss";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
      <TabNavItem title="Positions" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="History" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <p>Positions tab!</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>History tab!</p>
        </TabContent>
      </div>
    </div>
  );
};
export default Tab;
