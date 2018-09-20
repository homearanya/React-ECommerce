import { POPULATE_APP_DATA } from "../constants/constants.js";

function selectItems(data) {
    if (data.length === 0) {
        return;
    }
    // Work out total items
    let totalItems = 0;
    for (let j = 0; j < data.length; j++) {
        for (let k = 0; k < data[j].subcategories.length; k++) {
            totalItems += data[j].subcategories[k].items.length
        }
    }
    // Select 6 random items for carousel
    let totalSelected = 6;
    if (totalItems < totalSelected) {
        totalSelected = totalItems;
    }
    let selectedItems = [];
    let noDuplicates = [];

    let j, k, l, selectedItem; // recycle j, k, l variables
    for (let i = 0; i < totalSelected; i++) {
        // choose a random category
        j = Math.floor(Math.random() * data.length);
        // choose a random subcategory
        k = Math.floor(Math.random() * data[j].subcategories.length);
        // prevent empty subcategories
        if (data[j].subcategories[k].items.length === 0) {
            i--;
            continue;
        }
        // choose a random item
        l = Math.floor(Math.random() * data[j].subcategories[k].items.length);

        // to prevent duplicates
        selectedItem = j + '-' + k + '-' + l;
        if (noDuplicates.length > 0) {
            if (noDuplicates.indexOf(selectedItem) > -1) {
                i--;
                continue;
            }
        }
        noDuplicates.push(selectedItem);

        selectedItems.push(data[j].subcategories[k].items[l]);
    }
    return selectedItems;
}

const carouselItems = (state = [], action) => {
    switch (action.type) {
        case POPULATE_APP_DATA:
            return selectItems(action.appData);
        default:
            return state;
    }
};

export default carouselItems;