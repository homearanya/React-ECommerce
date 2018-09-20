import { ADD_ITEM } from "../constants/constants.js";
import { DELETE_ITEM } from "../constants/constants.js";
import { UPDATE_ITEM } from "../constants/constants.js";

const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            let item = action.item.itemData;
            if (item.stock === "0") {
                alert('Sorry, we\'re out of stock');
                return state;
            }
            if (parseInt(item.stock, 10) < action.item.quantity) {
                alert('Maximum stock reached: ' + item.stock);
                return state;
            }
            let findIndex = state.findIndex((element) => {
                return (element.itemData.name === item.name);
            })
            if (findIndex > -1) {
                item = state[findIndex];
                let newQuantity = parseInt(item.quantity, 10) + parseInt(action.item.quantity, 10);
                if (parseInt(item.itemData.stock, 10) < newQuantity) {
                    alert('Maximum stock reached: ' + item.itemData.stock);
                    return state;
                } else {
                    action.item.quantity = newQuantity;
                    return [...state.slice(0, findIndex), action.item, ...state.slice(findIndex + 1)];
                }
            }
            return [...state, action.item];
        case DELETE_ITEM:
            return [...state.slice(0, action.itemId), ...state.slice(action.itemId + 1)];
        case UPDATE_ITEM:
            let item2 = state[action.itemId];
            item2.quantity = action.quantity;
            return [...state.slice(0, action.itemId), item2, ...state.slice(action.itemId + 1)];
        default:
            return state;
    }
};

export default shoppingCart;