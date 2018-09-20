import { TOGGLE_STOCK } from "../constants/constants.js";


const toggleStock = (stock) => {
    return {
        type: TOGGLE_STOCK,
        stock: stock
    };
};

export default toggleStock;