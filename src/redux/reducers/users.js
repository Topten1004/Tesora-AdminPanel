import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    usersInfo: null,
    userInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetUsersInfo:
            return ({
                ...state,
                usersInfo: action.payload
            })
        case ActionTypes.GetUserInfoById:
            return ({
                ...state,
                userInfo: action.payload
            })
        default:
            return state;
    }
}