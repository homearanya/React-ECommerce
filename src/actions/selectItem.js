import { SELECT_ITEM } from "../constants/constants.js";


const selectItem = (data) => {
    return {
        type: SELECT_ITEM,
        itemData: data
    };
};

export default selectItem;