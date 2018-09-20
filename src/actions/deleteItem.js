import { DELETE_ITEM } from "../constants/constants.js";


const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        itemId: id
    };
};

export default deleteItem;