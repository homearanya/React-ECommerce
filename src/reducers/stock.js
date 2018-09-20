import { TOGGLE_STOCK } from "../constants/constants.js";

const stock = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_STOCK:
            return !action.stock;
        default:
            return state;
    }
};

export default stock;