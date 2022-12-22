import axios from "axios";

import { PRIVATE_TESORA_API } from "../../static/constants";
import ActionTypes from "./actionTypes";


export const GetUsersInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}User/GetUsers`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetUsersInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetUserInfoById = (masterUserId) => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}User/GetUser/${masterUserId}`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetUserInfoById,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetCollectionsInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Collection/GetCollections`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetCollectionsInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetItemsInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Item/GetAllItems`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetItemsInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetCategoriesInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Category/GetCategories`, {});

        console.log(res.data)
        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetCategoriesInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetCategoryInfoById = (categoryId) => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Category/GetCategory/${categoryId}`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetCategoryInfoById,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetContractsInfo = () => async dispatch => {
    try {
        let res = await axios.get(`${PRIVATE_TESORA_API}Contract/GetContracts`, {});
        console.log(res.data)
        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetContractsInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetActivitiesInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Activity/GetActivities`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetActivitiesInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const GetOffersInfo = () => async dispatch => {
    try {

        let res = await axios.get(`${PRIVATE_TESORA_API}Offer/GetOffers`, {});

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.GetOffersInfo,
                payload: res.data
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const DeleteCategory = (categoryId) => async dispatch => {
    try {
        console.log(categoryId);
        await axios.delete(`${PRIVATE_TESORA_API}Category/DeleteCategory/${categoryId}`, {});

    } catch (err) {
        console.log(err)
    }
}