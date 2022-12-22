import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    categoriesInfo: null,
    categoryInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetCategoriesInfo:
            return ({
                ...state,
                categoriesInfo: action.payload
            })
        case ActionTypes.GetCategoryInfoById:
            return ({
                ...state,
                categoryInfo: action.payload
            })
        default:
            return state;
    }
}