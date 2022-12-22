import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    offersInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetOffersInfo:
            return ({
                ...state,
                offersInfo: action.payload
            })
        default:
            return state;
    }
}