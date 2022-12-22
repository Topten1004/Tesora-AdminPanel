import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collectionsInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetCollectionsInfo:
            return ({
                ...state,
                collectionsInfo: action.payload
            })
        default:
            return state;
    }
}