import { ADD_ITEM } from "../constants/constants.js";


const addItem = (data, quantity) => {
    return {
        type: ADD_ITEM,
        item: {
            itemData: data,
            quantity: quantity
        }

    };
};

export default addItem;