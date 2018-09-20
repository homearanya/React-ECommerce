import { combineReducers } from "redux";

import appData from "./appData.js";
import carouselItems from "./carouselItems.js";
import selectedItem from "./selectedItem.js";
import shoppingCart from "./shoppingCart.js";
import categories from "./categories.js";
import selectedSubCat from "./selectedSubCat.js";
import autoplay from "./autoplay.js";
import stock from "./stock.js";
import sorted from "./sorted.js";


const reducer = combineReducers({
    appData,
    carouselItems,
    selectedItem,
    shoppingCart,
    categories,
    selectedSubCat,
    autoplay,
    stock,
    sorted
});

export default reducer;