import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    contractsInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetContractsInfo:
            return ({
                ...state,
                contractsInfo: action.payload
            })
        default:
            return state;
    }
}