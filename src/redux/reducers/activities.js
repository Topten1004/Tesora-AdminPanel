import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    activitiesInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetActivitiesInfo:
            return ({
                ...state,
                activitiesInfo: action.payload
            })
        default:
            return state;
    }
}