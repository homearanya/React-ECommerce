import { SELECT_SUBCAT } from "../constants/constants.js";


const selectSubCat = (catId, subCatId) => {
    return {
        type: SELECT_SUBCAT,
        catId: catId,
        subCatId: subCatId
    };
};

export default selectSubCat;