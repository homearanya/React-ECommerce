import { TOGGLE_CATEGORY } from "../constants/constants.js";
import { POPULATE_CATEGORIES } from "../constants/constants.js";

const categories = (state = [], action) => {
    switch (action.type) {
        case POPULATE_CATEGORIES:
            return action.cats;
        case TOGGLE_CATEGORY:
            let catCopy = state;
            catCopy[action.catId] = !catCopy[action.catId];
            return catCopy;
        default:
            return state;
    }
};

export default categories;