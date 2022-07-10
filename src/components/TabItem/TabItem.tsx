interface TabItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: any;
}
const TabItem = ({ id, title, activeTab, setActiveTab }: TabItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};
export default TabItem;
