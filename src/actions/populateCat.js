import { POPULATE_CATEGORIES } from "../constants/constants.js";


const populateCat = (cats) => {
    return {
        type: POPULATE_CATEGORIES,
        cats: cats
    };
};

export default populateCat;