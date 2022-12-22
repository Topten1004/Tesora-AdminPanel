import axios from "axios";

import { PRIVATE_TESORA_API } from "../../static/constants";
import ActionTypes from "./actionTypes";

export const UpdateUserInfo = (formState) => async dispatch => {
    try {
        console.log(formState);
        const fn = new FormData();

        fn.append('userId', formState.userId)
        fn.append('userName', formState.userName)
        fn.append('firstName', formState.firstName)
        fn.append('lastName', formState.lastName)
        fn.append('email', formState.email)
        fn.append('status', formState.status)
        fn.append('masterUserId', formState.masterUserId)
        fn.append('image', formState.profileImage)

        await axios.put(`${PRIVATE_TESORA_API}User/UpdateUser`, fn);

    } catch (err) {
        console.log(err)
    }
}

export const UpdateCategoryInfo = (formState, categoryId, navigate) => async dispatch => {
    try {
        console.log(formState);
        const fn = new FormData();

        fn.append('categoryId', categoryId)
        fn.append('title', formState.title)
        fn.append('status', formState.status)
        fn.append('image', formState.categoryImage)
        fn.append('contractId', formState.contractId)

        let res = await axios.put(`${PRIVATE_TESORA_API}Category/UpdateCategory`, fn);

        if (res.status === 200) {
            navigate('/dashboard/categories')
        }
    } catch (err) {
        console.log(err)
    }
}