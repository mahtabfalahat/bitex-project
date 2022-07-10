import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import userRoleAction from "../../redux/actions/userRoleAction";
import {
  USER_ROLE_NAME_ADMIN,
  USER_ROLE_NAME_USER,
} from "../../utils/constants";
import MainButton from "./../../components/MainButton/MainButton";
const Home = () => {
  const dispatch = useDispatch();

  const changeUserRole = () => {
    dispatch(userRoleAction());
  };

  const getUserRole = useSelector((state: any) => state.userRoleReducer);

  return (
    <div className="container">
      <div className="roleStyle">Hello: {getUserRole}</div>
      <MainButton btnType="pinkBtn" disabled={false} clicked={changeUserRole}>
        switch to{" "}
        {getUserRole === USER_ROLE_NAME_ADMIN
          ? USER_ROLE_NAME_USER
          : USER_ROLE_NAME_ADMIN}
      </MainButton>
    </div>
  );
};

export default Home;
