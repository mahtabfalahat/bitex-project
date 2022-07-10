import {REDUX_TYPE_CHANGE_ROLE, USER_ROLE_NAME_ADMIN, USER_ROLE_NAME_USER} from "../../utils/constants";

const userRoleReducer = (prevState: string = USER_ROLE_NAME_ADMIN, action: any) => {
    switch (action.type){
        case REDUX_TYPE_CHANGE_ROLE:
            return prevState === USER_ROLE_NAME_USER ? USER_ROLE_NAME_ADMIN : USER_ROLE_NAME_USER
        default:
            return prevState;
    }
}

export default userRoleReducer
