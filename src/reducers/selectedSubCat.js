import { SELECT_SUBCAT } from "../constants/constants.js";

const selectedSubCat = (state = null, action) => {
    switch (action.type) {
        case SELECT_SUBCAT:
            return { catId: action.catId, subCatId: action.subCatId };
        default:
            return state;
    }
};

export default selectedSubCat;