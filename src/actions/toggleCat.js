import { TOGGLE_CATEGORY } from "../constants/constants.js";


const toggleCat = (id) => {
    return {
        type: TOGGLE_CATEGORY,
        catId: id
    };
};

export default toggleCat;