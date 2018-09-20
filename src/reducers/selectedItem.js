import { SELECT_ITEM } from "../constants/constants.js";

const selectedItem = (state = null, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return action.itemData;
        default:
            return state;
    }
};

export default selectedItem;