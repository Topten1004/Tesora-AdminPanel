import axios from "axios";

import { PRIVATE_TESORA_API } from "../../static/constants";
import ActionTypes from "./actionTypes";

export const AddCategoryInfo = (formState) => async dispatch => {
    try {
        console.log(formState);
        console.log(formState.image);
        const fn = new FormData();

        fn.append('title', formState.title)
        fn.append('status', formState.status)
        fn.append('image', formState.image)
        fn.append('contractId', 2)

        await axios.post(`${PRIVATE_TESORA_API}Category/CreateCategory`, fn);

    } catch (err) {
        console.log(err)
    }
}

export const AddContractInfo = (formState) => async dispatch => {
    try {
        console.log(formState);
        const fn = new FormData();

        fn.append('ContractName', formState.name)
        fn.append('ContractVersion', formState.version)
        fn.append('ContractInterface', formState.interface)
        fn.append('ContractByteCode', formState.byte_code)

        await axios.post(`${PRIVATE_TESORA_API}Contract/CreateContract`, fn);

    } catch (err) {
        console.log(err)
    }
}