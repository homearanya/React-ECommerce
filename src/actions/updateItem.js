import { UPDATE_ITEM } from "../constants/constants.js";


const updateItem = (id, quantity) => {
    return {
        type: UPDATE_ITEM,
        itemId: id,
        quantity: quantity
    };
};

export default updateItem;