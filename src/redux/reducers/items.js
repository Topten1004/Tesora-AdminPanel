import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    itemsInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetItemsInfo:
            return ({
                ...state,
                itemsInfo: action.payload
            })
        default:
            return state;
    }
}