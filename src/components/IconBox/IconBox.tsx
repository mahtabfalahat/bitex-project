import "./style.scss";
interface props {
  onClick : any ; 
  icon: React.ReactNode;
}

const IconBox = (props: props) => {
  return <div className="iconContainer" onClick={ props.onClick}>{props.icon}</div>;
};

export default IconBox;
