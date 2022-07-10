import './style.scss' ;
import {useDispatch, useSelector} from "react-redux";
import userRoleAction from "../../redux/actions/userRoleAction";
import {USER_ROLE_NAME_ADMIN, USER_ROLE_NAME_USER} from "../../utils/constants";

const Home = () => {

    const dispatch = useDispatch();

    const changeUserRole = () => {
        dispatch(userRoleAction())
    }

    const getUserRole = useSelector((state: any) => state.userRoleReducer)

    return (
        <div className="container">
            <button onClick={changeUserRole}>switch to {getUserRole === USER_ROLE_NAME_ADMIN ? USER_ROLE_NAME_USER : USER_ROLE_NAME_ADMIN}</button>
            <div>Hello: {getUserRole}</div>
        </div>
    );
};

export default Home;
